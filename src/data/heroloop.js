// ---------------------------------------------------------------------------
// The homepage loop. It runs from blue to clay: painted archways, then the
// walls outdoors, then the work on a screen, then the ceramics themselves.
//
// `pos` is object-position, so nothing important gets cropped out.
// `move` picks the drift: `in` and `out` push through the arches, `left` and
// `right` travel across a surface. They alternate so the loop breathes rather
// than marches.
//
// The Silk Roads painting is deliberately not here: its lettering repeats the
// opening line below the fold, and the frames that follow are the same blue.
// ---------------------------------------------------------------------------

export const heroLoop = [
  {
    src: '/images/hero/hs-02.webp',
    alt: 'A painted arcade lit blue, arches receding into the dark.',
    pos: '50% 45%',
    move: 'left',
  },
  {
    src: '/images/hero/hs-03.webp',
    alt: 'The blue arches installation, seen wide.',
    pos: '50% 50%',
    move: 'in',
  },
  {
    src: '/images/hero/hs-04.webp',
    alt: 'A blue-and-white tile painting, a column of water falling through an arch.',
    pos: '50% 40%',
    move: 'out',
  },
  {
    src: '/images/hero/hs-05.webp',
    alt: 'The painted fence at Pioneer Works running the length of the street.',
    pos: '50% 60%',
    move: 'right',
  },
  {
    src: '/images/hero/hs-06.webp',
    alt: 'An audience in a dark room, the film blue on the screen in front of them.',
    pos: '50% 45%',
    move: 'in',
  },
  {
    src: '/images/hero/hs-07.webp',
    alt: 'A ceramic biodome in green and blue glaze, a small figure standing at its centre.',
    pos: '50% 50%',
    move: 'out',
  },
  {
    src: '/images/hero/hs-08.webp',
    alt: 'Verdelia, a glazed ceramic face wreathed in leaves.',
    pos: '50% 40%',
    move: 'left',
  },
  {
    src: '/images/hero/hs-09.webp',
    alt: 'A heap of glazed ceramic Little Martian heads, one blue and white on top.',
    pos: '50% 50%',
    move: 'in',
  },
  {
    src: '/images/hero/hs-10.webp',
    alt: 'Two glazed ceramic heads held in a hand against black.',
    pos: '50% 45%',
    move: 'right',
  },
];

// How long each frame holds, in milliseconds. The cut between frames is
// instant: no crossfade, so nothing ever double-exposes or flickers.
export const HOLD = 3000;
