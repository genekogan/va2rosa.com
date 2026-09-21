#!/usr/bin/env python3
"""Work out where to anchor each hero image when it is cropped.

A hero is a wide box on a desktop and a tall box on a phone, and the picture
is scaled to cover it. Left to itself the browser keeps the centre, which on a
phone throws away most of the width — faces slide out of frame, the subject
ends up at the edge. This finds the part of each picture that actually matters
and writes it out as `object-position`, so the crop holds onto the subject at
every screen size.

Faces win when there are any. Otherwise the focal point is the centre of mass
of a saliency map: local contrast, edge energy and colour deviation, which
between them find the painted wall, the lit face, the sculpture on its plinth.

    python3 scripts/focal-points.py            # rewrite src/styles/focal.css
    python3 scripts/focal-points.py --check    # print, change nothing

Hand-set anything it gets wrong: the generated file is plain CSS, one line per
image, and `focal-overrides.css` is loaded after it and never touched here.
"""

import argparse
import glob
import json
import os
import re
import sys

import cv2
import numpy as np

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'src', 'styles', 'focal.css')
LONG_EDGE = 900          # analyse at this size; plenty, and fast
FACE_WEIGHT = 6.0        # a face outranks any amount of texture
MIN_FACE_CONFIDENCE = 2.5  # Haar level weight; below this it is usually brickwork
MAX_SPREAD = 0.62        # above this the picture has no subject to hold on to


def heroes():
    """Every image the built site uses as a page hero."""
    found = {}
    for f in glob.glob(os.path.join(ROOT, 'dist', '**', 'index.html'), recursive=True):
        with open(f, encoding='utf-8') as fh:
            html = fh.read()
        for m in re.finditer(r'<div class="projhero[^"]*">\s*<img src="([^"]+)"', html):
            found.setdefault(m.group(1), f)
    return sorted(found)


def load(src):
    path = os.path.join(ROOT, 'public', src.lstrip('/'))
    if not os.path.exists(path):
        return None
    im = cv2.imread(path, cv2.IMREAD_COLOR)
    if im is None:                     # OpenCV build without WebP
        from PIL import Image
        im = cv2.cvtColor(np.array(Image.open(path).convert('RGB')), cv2.COLOR_RGB2BGR)
    h, w = im.shape[:2]
    s = LONG_EDGE / max(h, w)
    if s < 1:
        im = cv2.resize(im, (round(w * s), round(h * s)), interpolation=cv2.INTER_AREA)
    return im


def faces(im):
    """Frontal and profile faces, both ways round.

    Haar cascades are cheerful liars on brickwork and foliage, so each hit has
    to clear a confidence threshold and be big enough to be the subject rather
    than a smudge. Returns (x, y, w, h) boxes.
    """
    grey = cv2.equalizeHist(cv2.cvtColor(im, cv2.COLOR_BGR2GRAY))
    floor = max(48, int(min(im.shape[:2]) * 0.12))
    out = []
    d = cv2.data.haarcascades
    for name, flip in [('haarcascade_frontalface_default.xml', False),
                       ('haarcascade_frontalface_alt2.xml', False),
                       ('haarcascade_profileface.xml', False),
                       ('haarcascade_profileface.xml', True)]:
        c = cv2.CascadeClassifier(os.path.join(d, name))
        if c.empty():
            continue
        g = cv2.flip(grey, 1) if flip else grey
        boxes, _lvl, weights = c.detectMultiScale3(
            g, 1.1, 8, minSize=(floor, floor), outputRejectLevels=True)
        for (x, y, w, h), wt in zip(boxes, weights):
            if float(wt) < MIN_FACE_CONFIDENCE:
                continue
            if flip:
                x = g.shape[1] - x - w
            out.append((int(x), int(y), int(w), int(h)))
    # drop boxes that sit inside a bigger one
    out.sort(key=lambda b: -b[2] * b[3])
    kept = []
    for b in out:
        cx, cy = b[0] + b[2] / 2, b[1] + b[3] / 2
        if not any(k[0] <= cx <= k[0] + k[2] and k[1] <= cy <= k[1] + k[3] for k in kept):
            kept.append(b)
    return kept


def saliency(im):
    """Where the picture carries its information."""
    lab = cv2.cvtColor(im, cv2.COLOR_BGR2LAB).astype(np.float32)
    grey = lab[:, :, 0]

    # edge energy, blurred into regions rather than lines
    gx = cv2.Sobel(grey, cv2.CV_32F, 1, 0, ksize=3)
    gy = cv2.Sobel(grey, cv2.CV_32F, 0, 1, ksize=3)
    edges = cv2.GaussianBlur(cv2.magnitude(gx, gy), (0, 0), 12)

    # local contrast: how far each pixel sits from its neighbourhood
    local = cv2.GaussianBlur(grey, (0, 0), 25)
    contrast = cv2.GaussianBlur(np.abs(grey - local), (0, 0), 12)

    # colour distance from the picture's average colour
    mean = lab.reshape(-1, 3).mean(axis=0)
    colour = cv2.GaussianBlur(np.linalg.norm(lab - mean, axis=2), (0, 0), 18)

    def norm(a):
        a = a - a.min()
        return a / (a.max() or 1)

    s = 0.45 * norm(edges) + 0.35 * norm(contrast) + 0.20 * norm(colour)

    # a mild pull to centre, so a busy corner does not win outright
    h, w = s.shape
    yy, xx = np.mgrid[0:h, 0:w]
    r = np.sqrt(((xx - w / 2) / (w / 2)) ** 2 + ((yy - h / 2) / (h / 2)) ** 2)
    return s * (1.0 - 0.28 * np.clip(r, 0, 1))


def focal(im):
    """Return (x, y) as fractions of the image, and how it was decided.

    A picture with one clear subject gets anchored on it. A picture that is
    evenly interesting all over — a woven pattern, a book cover, a field of
    tiles — has nothing to anchor to, and moving the crop off centre only
    lops off an edge for no reason. So the answer is blended back towards the
    centre in proportion to how spread out the interest is.
    """
    h, w = im.shape[:2]
    sal = saliency(im)
    fs = faces(im)

    if fs:
        # centre of the faces, biased to the eyeline rather than the chin
        wt = sum(f[2] * f[3] for f in fs)
        fx = sum((f[0] + f[2] / 2) * f[2] * f[3] for f in fs) / wt
        fy = sum((f[1] + f[3] * 0.42) * f[2] * f[3] for f in fs) / wt
        mask = np.zeros_like(sal)
        for (x, y, fw, fh) in fs:
            cv2.ellipse(mask, (int(x + fw / 2), int(y + fh / 2)),
                        (int(fw * 0.8), int(fh * 0.9)), 0, 0, 360, 1.0, -1)
        mask = cv2.GaussianBlur(mask, (0, 0), 20)
        sal = sal + FACE_WEIGHT * mask * sal.mean()
        how = f'{len(fs)} face' + ('s' if len(fs) > 1 else '')
    else:
        fx = fy = None
        how = 'saliency'

    # centre of mass of the strongest slice of the saliency
    t = np.quantile(sal, 0.72)
    m = np.where(sal >= t, sal, 0)
    total = m.sum() or 1
    yy, xx = np.mgrid[0:h, 0:w]
    cx = float((m * xx).sum() / total)
    cy = float((m * yy).sum() / total)

    if fx is not None:                 # faces lead, saliency nudges
        cx = 0.75 * fx + 0.25 * cx
        cy = 0.75 * fy + 0.25 * cy

    x, y = cx / w, cy / h

    # how tightly is that mass gathered? faces are always tight enough
    if fs:
        conf = 1.0
    else:
        dx = (xx - cx) / w
        dy = (yy - cy) / h
        spread = float((m * np.sqrt(dx * dx + dy * dy)).sum() / total)
        conf = max(0.0, min(1.0, 1.0 - spread / MAX_SPREAD))
        how = f'saliency {conf:.2f}'

    x = 0.5 + conf * (x - 0.5)
    y = 0.5 + conf * (y - 0.5)
    return x, y, how


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--check', action='store_true')
    args = ap.parse_args()

    lines, report = [], []
    for src in heroes():
        im = load(src)
        if im is None:
            report.append((src, None, None, 'missing'))
            continue
        x, y, how = focal(im)
        # keep the anchor off the very edge: a subject flush against the frame
        # reads as a mistake even when it is where the subject really is
        x = min(max(x, 0.08), 0.92)
        y = min(max(y, 0.10), 0.90)
        report.append((src, x, y, how))
        if abs(x - 0.5) < 0.02 and abs(y - 0.5) < 0.02:
            continue                   # centre is the default; no rule needed
        lines.append(
            f'.projhero img[src$="{src}"] {{ object-position: {x*100:.0f}% {y*100:.0f}%; }}')

    header = (
        '/* Where each hero image is anchored when it gets cropped.\n'
        '   GENERATED by scripts/focal-points.py — do not edit by hand.\n'
        '   To correct one, add a rule to focal-overrides.css instead. */\n\n')
    css = header + '\n'.join(lines) + '\n'

    for src, x, y, how in report:
        if x is None:
            print(f'  !! {src}  {how}')
        else:
            print(f'  {x*100:5.1f}% {y*100:5.1f}%  {how:<10} {src}')

    if args.check:
        print(f'\n{len(lines)} rules (not written)')
        return
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, 'w', encoding='utf-8') as fh:
        fh.write(css)
    print(f'\nwrote {OUT} — {len(lines)} rules')


if __name__ == '__main__':
    sys.exit(main())
