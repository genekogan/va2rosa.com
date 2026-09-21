#!/usr/bin/env python3
"""Turn a book PDF into the pages the site can leaf through.

    python3 scripts/render-book.py <book.pdf> <slug> [--pages 1-11] [--dpi 150]

Writes public/images/books/<slug>/p-001.webp … (numbered by PDF page), then
prints the snippet to paste into src/data/books.js. Rendering at build time
keeps the site static: no PDF reader ships to the visitor, and a page arrives
as fast as any other image.

Print files need two corrections, and this makes both:

  - Colour. Print PDFs are CMYK. Rendered without colour management, CMYK
    comes out as a naive conversion — muddy darks, neon brights. ICC handling
    is switched on so the pages are converted to sRGB properly.
  - Bleed. A print page extends past where it will be cut. Each page is
    clipped to its trim box, so the reader shows the page as printed.

A PDF whose inner pages are already two-page spreads (a booklet exported as
spreads) is fine as it is: the reader splits each spread at the spine.
"""
import argparse
import os

import fitz
from PIL import Image

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

ap = argparse.ArgumentParser()
ap.add_argument('pdf')
ap.add_argument('slug')
ap.add_argument('--pages', default='', help='e.g. 1-11 or 1,2,3,5,10 (1-based, PDF pages)')
ap.add_argument('--dpi', type=int, default=150)
ap.add_argument('--max-width', type=int, default=1600,
                help='a spread gets this width; a single page gets half of it')
ap.add_argument('--quality', type=int, default=82)
a = ap.parse_args()

fitz.TOOLS.set_icc(True)                 # CMYK → sRGB through real profiles

doc = fitz.open(a.pdf)


def page_list(spec, n):
    if not spec:
        return list(range(1, n + 1))
    out = []
    for part in spec.split(','):
        if '-' in part:
            lo, hi = part.split('-')
            out += list(range(int(lo), int(hi) + 1))
        else:
            out.append(int(part))
    return [p for p in out if 1 <= p <= n]


pages = page_list(a.pages, doc.page_count)
out = os.path.join(HERE, 'public', 'images', 'books', a.slug)
os.makedirs(out, exist_ok=True)

single_aspect = None
spread_seen = False
for n in pages:
    page = doc[n - 1]
    clip = page.trimbox if page.trimbox and page.trimbox != page.mediabox else None
    pix = page.get_pixmap(dpi=a.dpi, clip=clip, colorspace=fitz.csRGB, alpha=False)
    im = Image.frombytes('RGB', (pix.width, pix.height), pix.samples)

    is_spread = im.width / im.height > 1.6 or (single_aspect and im.width / im.height > single_aspect * 1.6)
    spread_seen = spread_seen or is_spread
    if not is_spread and single_aspect is None:
        single_aspect = im.width / im.height

    cap = a.max_width if is_spread else a.max_width // 2
    if im.width > cap:
        im = im.resize((cap, round(im.height * cap / im.width)), Image.LANCZOS)
    im.save(os.path.join(out, 'p-%03d.webp' % n), 'WEBP', quality=a.quality, method=6)
    print('  page %d  %dx%d%s' % (n, im.width, im.height, '  spread' if is_spread else ''))

size = sum(os.path.getsize(os.path.join(out, f)) for f in os.listdir(out) if f.startswith('p-'))
print('\n%d pages → public/images/books/%s (%.1f MB)\n' % (len(pages), a.slug, size / 1e6))
print("      read: { slug: '%s', aspect: %.4f, spread: %s, pages: [%s] },"
      % (a.slug, single_aspect or 1, 'true' if spread_seen else 'false',
         ', '.join(str(p) for p in pages)))
