#!/usr/bin/env python3
"""Set a Markdown text as a plain, readable A4 PDF.

    python3 scripts/md-to-pdf.py <in.md> <out.pdf>

Used for the English translations of the academic texts. The point is a file
that reads well on screen and whose text can be selected, searched and read by
a machine — not a facsimile of the original layout.
"""
import html
import re
import sys

import fitz

src, out = sys.argv[1], sys.argv[2]
md = open(src, encoding='utf-8').read()


def inline(t):
    t = html.escape(t)
    t = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', t)
    t = re.sub(r'(?<!\*)\*([^*]+?)\*(?!\*)', r'<i>\1</i>', t)
    t = re.sub(r'`(.+?)`', r'<i>\1</i>', t)
    t = re.sub(r'\[\^(\w+?)\]', r'<sup>\1</sup>', t)
    t = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'\1', t)
    return t


blocks, buf, mode = [], [], 'p'


def flush():
    global buf, mode
    if buf:
        blocks.append((mode, ' '.join(buf).strip()))
        buf = []
    mode = 'p'


for line in md.split('\n'):
    s = line.rstrip()
    if not s.strip():
        flush()
        continue
    m = re.match(r'^(#{1,4})\s+(.*)$', s)
    if m:
        flush()
        blocks.append(('h%d' % len(m.group(1)), m.group(2)))
        continue
    if s.startswith('---'):
        flush()
        blocks.append(('hr', ''))
        continue
    if s.startswith('> '):
        if mode != 'q':
            flush()
            mode = 'q'
        buf.append(s[2:])
        continue
    if re.match(r'^[-*]\s+|^\d+\.\s+', s):
        flush()
        blocks.append(('li', re.sub(r'^[-*]\s+|^\d+\.\s+', '', s)))
        continue
    if mode != 'p':
        flush()
    buf.append(s)
flush()

parts = []
for kind, text in blocks:
    t = inline(text)
    if kind == 'hr':
        parts.append('<div class="hr"></div>')
    elif kind == 'li':
        parts.append('<p class="li">%s</p>' % t)
    elif kind == 'q':
        parts.append('<p class="q">%s</p>' % t)
    elif kind.startswith('h'):
        parts.append('<%s>%s</%s>' % (kind, t, kind))
    else:
        parts.append('<p>%s</p>' % t)

CSS = """
body { font-family: serif; font-size: 10.5pt; line-height: 1.5; }
h1 { font-size: 17pt; margin-bottom: 4pt; }
h2 { font-size: 12.5pt; margin-top: 14pt; margin-bottom: 4pt; }
h3 { font-size: 11pt; margin-top: 12pt; margin-bottom: 3pt; }
h4 { font-size: 10.5pt; margin-top: 10pt; }
p { margin-top: 0; margin-bottom: 7pt; text-align: justify; }
p.q { margin-left: 24pt; margin-right: 12pt; font-size: 9.5pt; }
p.li { margin-left: 14pt; }
.hr { margin-top: 8pt; margin-bottom: 8pt; }
sup { font-size: 7pt; }
"""

story = fitz.Story(html='<body>%s</body>' % ''.join(parts), user_css=CSS)
writer = fitz.DocumentWriter(out)
page = fitz.paper_rect('a4')
where = page + (64, 64, -64, -70)
more, n = 1, 0
while more:
    dev = writer.begin_page(page)
    more, _ = story.place(where)
    story.draw(dev)
    writer.end_page()
    n += 1
writer.close()

doc = fitz.open(out)
doc.set_metadata({'title': blocks[0][1] if blocks else '', 'author': 'Vanessa Rosa'})
doc.saveIncr()
print(out, n, 'pages')
