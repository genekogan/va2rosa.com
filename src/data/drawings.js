// ---------------------------------------------------------------------------
// DRAWINGS: /sketchbooks. A self portrait at the top, a handful of single
// drawings chosen over the years, then the sketchbooks themselves, year by
// year, as slideshows and as films of the pages being turned.
//
// Dates come from Vanessa's own file and folder names, cross-checked against
// when the scans and photographs were made. Anything with digital text laid
// over it (the 2011 French portfolio pages, the watermarked scans) is left out
// of the highlights on purpose.
// ---------------------------------------------------------------------------

const d = (name) => `/images/draw/${name}.webp`;
const v = (name) => ({ file: `/video/draw/${name}.mp4`, poster: `/video/draw/${name}.webp` });

export const selfPortrait = {
  src: d('h-2000-self'),
  year: 2000,
  caption: 'Self portrait, 2000. Pencil on paper.',
  alt: 'A pencil self portrait: a young woman with curly hair looking straight out, drawn in 2000.',
};

// single drawings, oldest first
export const highlights = [
  { src: d('h-2011-leaning'), year: 2011, caption: 'Watercolour, 2011' },
  { src: d('h-2011-reclining'), year: 2011, caption: 'Life model, watercolour, 2011' },
  { src: d('h-2012-arms'), year: 2012, caption: 'Life model, watercolour, 2012' },
  { src: d('h-2012-back'), year: 2012, caption: 'Life model, watercolour, 2012' },
  { src: d('h-2012-yellow'), year: 2012, caption: 'Life model, watercolour, 2012' },
  { src: d('h-2012-seated'), year: 2012, caption: 'Life model, mixed media, 2012' },
  { src: d('h-2013-capoeira'), year: 2013, caption: 'Capoeira, watercolour, 2013' },
  { src: d('h-2013-man'), year: 2013, caption: 'Portrait, watercolour, 2013' },
  { src: d('h-2013-nefertiti'), year: 2013, caption: 'Nefertiti, watercolour, 2013' },
  { src: d('h-2014-model'), year: 2014, caption: 'Life model, watercolour, 2014' },
  { src: d('h-2015-class'), year: 2015, caption: 'Drawn during a documentary class, 2015' },
];

// the sketchbooks, year by year
export const years = [
  {
    year: '1999',
    title: 'Drawings, 1999',
    video: { ...v('draw-1999'), caption: 'A portfolio of drawings from 1999.' },
  },
  {
    year: '2011',
    title: 'Paris sketchbook',
    body: 'Kept during an exchange year at Paris 8: cafés, the metro, streets, life drawing, and whatever was pasted in.',
    video: { ...v('draw-2011'), caption: 'Turning the pages of a 2011 sketchbook.' },
    slides: [
      '001', '002', '003', '005', '006', '008', '009', '011', '012', '013', '014', '015', '016',
      '019', '020', '021', '022', '023', '024', '025', '026', '027', '029', '031', '032', '033',
    ].map((n) => ({ src: d('p11-' + n) })),
  },
  {
    year: '2011',
    title: 'Street sketchbook',
    body: 'Pencil and ink, drawn standing up: people waiting, walking, sitting, and the buildings behind them.',
    slides: ['0011', '0015', '0052', '0053', '0054', '0055', '0059', '0074', '0079', '0088', '0129', '0130']
      .map((n) => ({ src: d('s11-' + n) })),
  },
  {
    year: '2013',
    title: 'Watercolour sketchbook',
    body: 'Capoeira, crowds and portraits, straight in watercolour.',
    video: { ...v('draw-2013'), caption: 'Turning the pages of the 2013 sketchbook.' },
    slides: ['w13-caderno', 'w13-caderno3', 'w13-capoeira', 'w13-capoeira3', 'w13-a', 'w13-b', 'w13-c'].map((n) => ({ src: d(n) })),
  },
  {
    year: '2017',
    title: 'Watercolour sketchbook',
    video: { ...v('draw-2017'), caption: 'Turning the pages of a 2017 sketchbook.', tall: true },
  },
  {
    year: '2018',
    title: 'Sketchbook, Thailand',
    body: 'Branches, cats, stairwells and rooms, in watercolour.',
    video: { ...v('draw-2018'), caption: 'Turning the pages.' },
    slides: ['121350', '121355', '121402', '121407', '121412', '121420', '121425', '121431', '121434', '121438', '121446', '121451', '121457']
      .map((n) => ({ src: d('t18-' + n) })),
  },
  {
    year: '2018',
    title: 'Watercolours with Same Putumi',
    body: 'Kene patterns, painted during the immersion with the Huni Kuin.',
    video: { ...v('draw-2018-same'), caption: 'Turning the pages.' },
  },
];
