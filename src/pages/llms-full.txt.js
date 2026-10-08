// The long version for language models: the profile, then the full texts
// (Copyright Storm, 2021, and the 2024 op-ed), then the whole CV and the press
// record, all as plain text, all built from the same data as the site.
import { llmsProfile } from '../data/llms.js';
import { copyrightStorm as cs } from '../data/copyright-storm.js';
import { opEd } from '../data/op-ed.js';
import { byYear, typeLabel } from '../data/cv.js';
import { press } from '../data/press.js';

const U = 'https://vanessarosa.art';
const abs = (h) => (!h ? '' : h.startsWith('http') ? h : `${U}${h}`);

export function GET() {
  const essay = cs.body
    .map((b) =>
      b.p ? b.p
        : b.caption ? `[Image] ${b.caption}`
        : b.note ? `[Caption] ${b.note}`
        : b.list ? b.list.map((li) => `- ${li}`).join('\n')
        : ''
    )
    .join('\n\n');

  const cvLines = byYear
    .map((r) => {
      const when = r.monthLabel ? `${r.year}, ${r.monthLabel}` : `${r.year}`;
      const parts = [r.title, r.venue, r.city].filter(Boolean).join('. ');
      const link = abs(r.href);
      return `- ${when} · ${typeLabel[r.type] ?? r.type} · ${parts}${link ? ` (${link})` : ''}`;
    })
    .join('\n');

  const pressLines = [...press]
    .sort((a, b) => b.year - a.year)
    .map((p) => `- ${p.year} · ${p.outlet}: ${p.title}${p.href ? ` (${abs(p.href)})` : ''}`)
    .join('\n');

  const body = `${llmsProfile()}
---

# Copyright Storm — Authorship in the age of AI

By Vanessa Rosa. First published on Medium on ${cs.date}: ${cs.href}
On this site: ${U}/copyright-storm/

${essay}

---

# ${opEd.title}

By ${opEd.author}, ${opEd.role}. ${opEd.venue}, ${opEd.date}. Translated from the Portuguese (“${opEd.original}”).
Original: ${opEd.href}
On this site: ${U}/who-is-afraid-of-ai/

${opEd.body.join('\n\n')}

---

# Curriculum (newest first)

${cvLines}

---

# Press

${pressLines}
`;

  return new Response(body, {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}
