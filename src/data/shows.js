// ---------------------------------------------------------------------------
// EXHIBITIONS: everything publicly shown, for the /exhibitions page.
//
// kind: solo | group | installation | film | book
// thread: optional slug, adds a "the work ⇢" link to that page
//
// Titles below are taken from your current site (Art Shows, Street Art) and
// from the CV. Years marked null need checking: I have the title but not the
// date. Anything you add here appears on the page automatically.
// ---------------------------------------------------------------------------

export const shows = [
  // --- solo ---------------------------------------------------------------
  { kind: 'solo', year: null, title: 'Imaginary Tiles', venue: 'Solo show', city: '', thread: 'the-silk-roads', note: 'Year to confirm.' },
  { kind: 'solo', year: 2019, title: 'Nhandepa', venue: 'MIS São Paulo', city: 'São Paulo', thread: 'same-putumi', note: 'With Same Putumi. Five weaving patterns, projection-mapped, and an infinity box of medicinal plants.' },

  // --- group --------------------------------------------------------------
  { kind: 'group', year: 2025, title: 'Augmented Intelligence', venue: 'Christie’s, Rockefeller Plaza', city: 'New York' },
  { kind: 'group', year: 2025, title: 'Paintboxed Tezos World Tour', venue: 'Tezos Foundation, ArtMeta and the Paintbox archive. Shown at the Digital Art Mile', city: 'Basel' },
  { kind: 'group', year: 2026, title: 'Bombay Beach Biennale: Saturn’s Theater of Minds', venue: 'Bombay Beach Biennale', city: 'California', thread: 'mars-college' },
  { kind: 'group', year: 2024, title: 'Little Martians at Bombay Beach Biennale', venue: 'Bombay Beach Biennale', city: 'California', thread: 'little-martians' },
  { kind: 'group', year: 2023, title: 'Little Martians at Regency', venue: 'Regency', city: '', thread: 'little-martians', note: 'Venue detail to confirm.' },
  { kind: 'group', year: null, title: 'MAD', venue: 'Museum of Arts and Design', city: 'New York', note: 'Year and full title to confirm.' },
  { kind: 'group', year: 2017, title: 'Dialogue & Afro-Brésil, with Gérard Quenum', venue: 'Le Centre', city: 'Cotonou, Benin', thread: 'the-silk-roads' },
  { kind: 'group', year: 2016, title: 'Stroke Art Fair', venue: '', city: 'Munich', thread: 'the-silk-roads' },
  { kind: 'group', year: 2016, title: 'Dialogue Failure', venue: '', city: 'New York', thread: 'the-silk-roads' },
  { kind: 'group', year: 2017, title: 'Infinity Game, with Verônica Natividade and Wenqi Li', venue: 'Babycastles', city: 'New York', thread: 'ethnocomputing' },
  { kind: 'group', year: null, title: 'Imaginary Zone (from the Port Zone)', venue: '', city: 'Rio de Janeiro', note: 'Year to confirm.' },
  { kind: 'group', year: null, title: 'Caminhos / Paths', venue: '', city: '', note: 'Year and venue to confirm.' },
  { kind: 'group', year: null, title: 'Ver(a)Cidade', venue: '', city: '', note: 'Year and venue to confirm.' },
  { kind: 'group', year: null, title: 'Drawings', venue: '', city: '', note: 'Year and venue to confirm.' },

  // --- installations & public commissions ---------------------------------
  { kind: 'installation', year: 2022, title: 'This Mural is a Time-Traveling Portal', venue: 'Xenoform Labs', city: 'San Francisco', thread: 'the-silk-roads' },
  { kind: 'installation', year: 2017, title: 'Mural, Pioneer Works, up until 2020', venue: 'Pioneer Works, Technology Residency', city: 'Red Hook, New York', thread: 'the-silk-roads' },
  { kind: 'installation', year: 2016, title: 'The Sankofa Project', venue: 'Quilombo of Pedra do Sal, during the Olympic Games', city: 'Rio de Janeiro', thread: 'visible-memories' },
  { kind: 'installation', year: 2014, title: 'The slave ship, Pedra do Sal', venue: 'With Felipe Carvalho, Diego Deus, Douglas Oliveiras', city: 'Rio de Janeiro', thread: 'visible-memories' },
  { kind: 'installation', year: 2015, title: 'Blue Wall Project', venue: '', city: 'Lisbon', thread: 'the-silk-roads' },
  { kind: 'installation', year: 2022, title: 'Penrose-tile stencils and body painting', venue: 'Mars College', city: 'Bombay Beach', thread: 'ethnocomputing' },

  // --- films --------------------------------------------------------------
  { kind: 'film', year: 2024, title: 'Dear Human, My Muse', venue: 'Cannes World Film Festival, Best Female Director (Super Short)', city: '', thread: 'little-martians' },
  { kind: 'film', year: 2026, title: 'Little Martians: Season One', venue: 'Seven episodes, in production', city: '', thread: 'little-martians' },

  // --- books --------------------------------------------------------------
  { kind: 'book', year: null, title: 'Viajante do Tempo', venue: 'Publisher, co-owner and art director', city: '', note: 'Add individual titles here as separate rows.' },
  { kind: 'book', year: null, title: 'Diana’s World', venue: 'Viajante do Tempo', city: '', note: 'Year to confirm.' },
];
