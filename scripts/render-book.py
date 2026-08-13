#!/usr/bin/env python3
"""Turn a book PDF into the pages the site can leaf through.

    python3 scripts/render-book.py <book.pdf> <slug> [--dpi 130]

Writes public/images/books/<slug>/p-001.webp … and a thumb for each, then
prints the JS snippet to paste into src/data/books.js. Rendering at build time
keeps the site static: no PDF reader has to be shipped to the reader, and a
page arrives as fast as any other image.
"""
import os, sys, argparse

import fitz
from PIL import Image

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

ap = argparse.ArgumentParser()
ap.add_argument('pdf')
ap.add_argument('slug')
ap.add_argument('--dpi', type=int, default=130)
ap.add_argument('--max-width', type=int, default=1200)
ap.add_argument('--quality', type=int, default=80)
a = ap.parse_args()

out = os.path.join(HERE, 'public', 'images', 'books', a.slug)
os.makedirs(out, exist_ok=True)

doc = fitz.open(a.pdf)
tmp = os.path.join(out, '.tmp.png')

for i, page in enumerate(doc):
    page.get_pixmap(dpi=a.dpi).save(tmp)
    im = Image.open(tmp).convert('RGB')
    if im.width > a.max_width:
        im = im.resize((a.max_width, round(im.height * a.max_width / im.width)), Image.LANCZOS)
    im.save(os.path.join(out, 'p-%03d.webp' % (i + 1)), 'WEBP',
            quality=a.quality, method=6)

    th = im.copy()
    th.thumbnail((190, 190), Image.LANCZOS)
    th.save(os.path.join(out, 't-%03d.webp' % (i + 1)), 'WEBP', quality=70, method=6)

os.remove(tmp)

first = Image.open(os.path.join(out, 'p-001.webp'))
total = sum(
    os.path.getsize(os.path.join(out, f)) for f in os.listdir(out)
)

print('%d pages → public/images/books/%s (%.1f MB)' % (len(doc), a.slug, total / 1e6))
print()
print("    read: { slug: '%s', pages: %d, ratio: %.4f }," % (a.slug, len(doc), first.width / first.height))
