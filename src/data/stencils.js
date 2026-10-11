// ---------------------------------------------------------------------------
// The stencil research behind Silk Roads, 2015 to 2018: /stencils.
// Most of the words are Vanessa's own, from the Laser Tiles proposal (2015),
// the Imaginary Tiles notes and the laser-cut stencil workshop (2016–2017),
// and her notes on which stencils hold and which break (in Portuguese,
// translated here). The pattern drawings are her cutting files, redrawn in
// the site's blue.
// ---------------------------------------------------------------------------

const P = (k) => `/images/stencils/p-${k}.webp`;
const I = (k) => `/images/stencils/${k}.webp`;

export const stencils = {
  slug: 'stencils',
  kicker: 'Research · 2015 to 2018',
  title: 'The stencils',
  lede:
    'How a tile pattern becomes a laser-cut stencil, is bent into perspective, and is sprayed piece by piece into spaces that are not there.',
  hero: I('stencil-spray'),

  idea: [
    'I imagined how interesting it could be to make optical illusions based on those old Portuguese tiles, giving the impression of volume and depth on flat, blank walls. One might have the impression of an entrance where there is none, or see a painting that extends to the floor, as if there were an entire structure on a different plane than the flat wall.',
  ],

  // where the patterns come from: each group is a set of cutting files
  origins: [
    {
      place: 'Portugal',
      note: 'Azulejos, the blue and white tiles over the old buildings of Rio, Lisbon and Porto. Where it started.',
      items: [
        { src: P('pt-tile'), caption: 'A Portuguese tile, as a cutting file' },
        { src: P('pt-motifs'), caption: 'Tile motifs, redrawn' },
      ],
    },
    {
      place: 'The Islamic world',
      note: 'The geometry of the Alhambra in Granada and the Blue Mosque in Istanbul, the source of so much of what Portugal made its own.',
      items: [
        { src: P('is-alhambra'), caption: 'After the Alhambra, Granada' },
        { src: P('is-bluemosque'), caption: 'After the Blue Mosque, Istanbul' },
        { src: P('cn-vase'), caption: 'An Alhambra pattern, in perspective' },
        { src: P('is-hexagons'), caption: 'Hexagons, drawn as an algorithm' },
      ],
    },
    {
      place: 'China',
      note: 'Blue and white porcelain, where the blue began: Qing dynasty vases, clouds and flowers.',
      items: [
        { src: P('cn-china'), caption: 'After Qing porcelain' },
        { src: P('cn-flower'), caption: 'A flower, cut as one line' },
      ],
    },
    {
      place: 'South Asia',
      note: 'Patterns from India and Pakistan, distorted into strips for floors and walls.',
      items: [
        { src: P('in-india'), caption: 'After Indian patterns' },
        { src: P('in-pakistan'), caption: 'After Pakistani patterns' },
      ],
    },
    {
      place: 'Africa',
      note: 'Patterns from Ethiopia, Adinkra symbols from Ghana, and sona, the sand drawings of the Chokwe in Angola. The African patterns also run through the mixed tiles below, and later led to the ethnomathematics research.',
      items: [
        { src: P('af-ethiopia'), caption: 'After Ethiopian patterns' },
        { src: P('af-funtunfunefu'), caption: 'Funtunfunefu, the Adinkra of the two crocodiles that share one stomach' },
        { src: P('af-sona-grid'), caption: 'Sona from Angola, lines drawn around a grid of dots' },
        { src: P('af-sona-knots'), caption: 'Sona, as a cutting file' },
        { src: P('af-sona-warp'), caption: 'Sona, distorted for a wall' },
      ],
    },
    {
      place: 'Mixed',
      note: 'The point of the series: the routes the patterns travelled, made into one surface.',
      items: [
        { src: P('mx-ptafro'), caption: 'Portuguese and African patterns in one tile' },
        { src: P('af-sona'), caption: 'Sona from Angola, crossed with a Chinese pattern. Designed by Verônica Natividade' },
        { src: P('mx-yantra'), caption: 'An Islamic pattern and a yantra. Designed by Verônica Natividade' },
        { src: P('af-cross'), caption: 'An Ethiopian cross, drawn as an algorithm. Designed by Verônica Natividade' },
      ],
    },
  ],

  // from a picture to a stencil (the workshop method)
  method: {
    body: [
      'Planning how to turn an image into a stencil: how many layers will it have, what should be kept in the image, and where to put the bridges, which make it stronger and link the disconnected parts. Bridges avoid the islands effect: a shape with nothing holding it falls out of the stencil.',
      'Original image, colours separated in Photoshop, outlines turned into stencil files in Illustrator. Every file has to be made at actual size, in the dimensions the laser machine allows. Since all are produced as separate pieces, the stencils can also be used in different compositions, or with different colours.',
    ],
    images: [
      { src: I('tile-photo'), caption: 'The original: azulejos on a wall' },
      { src: I('tile-file'), caption: 'The same tile as a stencil file' },
      { src: I('stencil-floor'), caption: 'A laser-cut stencil, showing its level of detail' },
      { src: I('stencil-spray'), caption: 'A stencil after spraying. Photograph by José Vicente, CML, 2015' },
    ],
  },

  // what holds and what breaks (translated from her notes)
  strength: [
    { t: 'Portuguese tiles', d: 'Even with thin lines, the pattern is well distributed across the material, so the stencils are strong, even when distorted.' },
    { t: 'The Alhambra', d: 'Even when the pattern is made much smaller, the stencils stay strong, because the cut-outs are well distributed.' },
    { t: 'Mirror curves', d: 'Patterns of the mirror-curve kind need many bridges to hold together. The stencil comes out very fragile.' },
    { t: 'Islamic geometry', d: 'Could use a few more bridges: a long cut that also folds leaves the material weak.' },
    { t: 'Drawn in Grasshopper', d: 'Designed with an algorithm, in Grasshopper. Here too the stencil came out fragile, because of where the bridges fell: a cut running through the middle of the diamonds makes it break easily.' },
  ],

  // distortion and scale
  distortion: {
    body: [
      'Each pattern is cut flat, and then distorted: upwards, diagonally, sideways, curved into an arch. The diagonal and lateral pieces can be flipped to make the other side. A piece too big for the machine is cut in several parts. And everything painted on the floor needs anamorphosis, so that a person standing at one point sees the whole structure as if it were on another plane.',
    ],
    images: [
      { src: I('set-3'), caption: 'Vector examples for laser cutting: flat, and distorted for each side' },
      { src: P('ds-warp'), caption: 'An old Portuguese pattern, warped' },
      { src: P('ds-dist'), caption: 'The floor and the wall' },
      { src: P('ds-lines'), caption: 'Strips, for steps and borders' },
      { src: P('ds-wave'), caption: 'A wave' },
      { src: P('ds-arco'), caption: 'Pieces for an arch' },
      { src: I('set-1'), caption: 'One stencil set: the tile at several scales, a curve, a vault' },
    ],
  },

  // modularity: one set of pieces, many walls
  modules: {
    body: [
      'Each layout can be painted in several places with variations: changing the colours or the door shape, opening windows onto other places, making completely different compositions with the same pieces, or answering an architectural element that is already there.',
    ],
    images: [
      { src: I('set-2'), caption: 'The same pieces, as a corridor in one-point perspective' },
      { src: I('lisbon-roller'), caption: 'The Blue Wall Project, Lisbon, 2015' },
      { src: I('little-skips'), caption: 'Little Skips, New York, 2015' },
      { src: I('stroke-2016'), caption: 'Live painting at the Stroke Art Fair, Munich, 2016' },
      { src: I('cartography'), caption: 'Cartography. Spray and acrylic on laser-cut paper, 2015' },
      { src: P('cp-firjan'), caption: 'A composition of stencils as one tile' },
    ],
  },

  algorithms: {
    body: [
      'Then the layouts began to be written as algorithms: with Verônica Natividade, patterns described as code in Grasshopper, the plugin for Rhinoceros, and cut as stencils. This is where the stencils met the ethnomathematics research.',
    ],
    image: { src: I('grasshopper'), caption: 'Using algorithms to create layouts for laser cutting' },
  },

  workshops: [
    'Laser-cut stencil workshop, CML, Lisbon, 2016, with José Vicente and Bruno Cunha',
    'Laser-cut stencil workshop, Pioneer Works, Brooklyn, 2017',
    'Art, Parametric Design and Public Spaces, with Verônica Natividade, Pennsylvania State University, 2017',
  ],

  links: [
    { label: 'Silk Roads', href: '/threads/the-silk-roads' },
    { label: 'The Pioneer Works fence', href: '/pioneer-works' },
    { label: 'Imaginary Tiles, the solo show', href: '/imaginary-tiles' },
    { label: 'Ethnomathematics & Ethnocomputing', href: '/threads/ethnocomputing' },
  ],
};
