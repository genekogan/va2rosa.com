// ---------------------------------------------------------------------------
// Sketchbooks, research and press.
// ---------------------------------------------------------------------------

// [ label, spine colour, spine height in px, place tag ]
export const sketchbooks = [
  ['2009 Rio', '#1c3f63', 130, 'rio'],
  ['2010 Rio', '#2a5a7a', 148, 'rio'],
  ['2011 Rio', '#7c3b2f', 122, 'rio'],
  ['2012 UERJ', '#33513a', 160, 'rio'],
  ['2013 Berlin', '#1c3f63', 138, 'europe'],
  ['2014 Milan', '#8a6a2f', 152, 'europe'],
  ['2015 Lisboa', '#1c4a86', 144, 'lisbon'],
  ['2015 NYC', '#4a2f5c', 126, 'nyc'],
  ['2016 Munich', '#2a5a7a', 158, 'europe'],
  ['2017 Cotonou', '#7c3b2f', 134, 'benin'],
  ['2017 Red Hook', '#1c3f63', 150, 'nyc'],
  ['2018 Envira', '#33513a', 166, 'envira'],
  ['2019 SP', '#5b3f8f', 142, 'brazil'],
  ['2020 Bombay', '#8a6a2f', 128, 'mars'],
  ['2021 Bombay', '#1c4a86', 156, 'mars'],
  ['2022 SF', '#2a5a7a', 140, 'mars'],
  ['2023 LM', '#33513a', 162, 'lm'],
  ['2024 LM', '#7c3b2f', 132, 'lm'],
  ['2025 LM', '#1c3f63', 148, 'lm'],
  ['2026', '#5b3f8f', 154, 'lm'],
];

// kind: essay | paper | talk | film | book
export const research = [
  {
    kind: 'paper',
    year: 2019,
    title: 'Mesh networks, autonomy and the survival of a knowledge system',
    venue: 'Written alongside the Same Putumi collaboration',
  },
  {
    kind: 'talk',
    year: 2024,
    title: 'Artists Exploring Creativity and Language with Generative AI',
    venue: 'NVIDIA GTC',
  },
  { kind: 'talk', year: 2023, title: 'NVIDIA GTC', venue: 'NVIDIA' },
  {
    kind: 'talk',
    year: 2017,
    title: 'Art, Parametric Design and Public Spaces',
    venue: 'Penn State, with Verônica Natividade',
  },
  {
    kind: 'book',
    year: null,
    title: 'Viajante do Tempo',
    venue: 'Publisher, co-owner and art director',
    note: 'Including Diana’s World.',
  },
  {
    kind: 'film',
    year: 2024,
    title: 'Dear Human, My Muse',
    venue: 'Cannes World Film Festival, Best Female Director (Super Short)',
  },
];

// Pull quotes for the homepage. Needs your real ones: these are placeholders
// and are hidden until `live: true`.
export const press = [
  // { quote: '…', outlet: 'The Art Newspaper', year: 2026, href: '', live: true },
];
