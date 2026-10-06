#!/usr/bin/env python3
"""Smaller copies of every image, for phones and tablets.

For each public/images/**/*.webp wider than a step, writes a copy at that
width to public/images/_w/<width>/<same path>, and records every image's
size in src/data/image-sizes.json. After the build, the image-sizes
integration (src/integrations/image-sizes.mjs) reads that file and gives each
<img> its width, height and srcset.

Run it after adding images:   python3 scripts/image-variants.py [site dir]
Only missing or outdated copies are made, so it is quick the second time.
"""
import json
import os
import sys
from concurrent.futures import ProcessPoolExecutor

from PIL import Image

STEPS = [800, 1200]          # widths of the copies
MARGIN = 1.12                # only make a copy if the original is this much wider
QUALITY = 76
KEEP_BELOW = 0.8             # keep a copy only if it is at least 20% lighter

root = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(__file__), '..'))
pub = os.path.join(root, 'public')
images = os.path.join(pub, 'images')
out_json = os.path.join(root, 'src', 'data', 'image-sizes.json')


def work(path):
    rel = '/' + os.path.relpath(path, pub).replace(os.sep, '/')
    with Image.open(path) as im:
        w, h = im.size
        made = []
        for step in STEPS:
            if w < step * MARGIN:
                continue
            dst = os.path.join(images, '_w', str(step), os.path.relpath(path, images))
            if not (os.path.exists(dst) and os.path.getmtime(dst) >= os.path.getmtime(path)):
                os.makedirs(os.path.dirname(dst), exist_ok=True)
                small = im.convert('RGBA' if im.mode in ('RGBA', 'LA', 'P') else 'RGB')
                small = small.resize((step, round(h * step / w)), Image.LANCZOS)
                small.save(dst, 'WEBP', quality=QUALITY, method=4)
            # a copy that saves little is not worth a second download path
            if os.path.getsize(dst) > os.path.getsize(path) * KEEP_BELOW:
                os.remove(dst)
                continue
            made.append(step)
    return rel, [w, h, made]


def main():
    todo = []
    for d, dirs, files in os.walk(images):
        if os.path.relpath(d, images).split(os.sep)[0] == '_w':
            dirs[:] = []
            continue
        todo += [os.path.join(d, f) for f in files if f.lower().endswith('.webp')]
    with ProcessPoolExecutor() as pool:
        sizes = dict(pool.map(work, sorted(todo), chunksize=8))

    # copies whose original is gone
    wdir = os.path.join(images, '_w')
    for d, _, files in os.walk(wdir):
        for f in files:
            orig = '/images/' + os.path.relpath(os.path.join(d, f), wdir).split(os.sep, 1)[1].replace(os.sep, '/')
            if orig not in sizes:
                os.remove(os.path.join(d, f))

    with open(out_json, 'w') as fh:
        json.dump(dict(sorted(sizes.items())), fh, separators=(',', ':'))
    print(f'{len(sizes)} images, {sum(len(v[2]) for v in sizes.values())} copies -> {out_json}')


if __name__ == '__main__':
    main()
