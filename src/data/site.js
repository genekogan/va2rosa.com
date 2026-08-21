// ---------------------------------------------------------------------------
// Global site text. Edit anything here and it changes everywhere it appears.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Vanessa Rosa',
  email: 'va2rosa@littlemartians.world',
  instagram: 'https://www.instagram.com/va2rosa/',
  // Paste your Substack URL here and the logo appears in the footer.
  substack: '',

  // Drop the PDF at public/downloads/ using exactly this filename and the
  // download link starts working. Set to '' to hide the link entirely.
  cvPdf: '/downloads/vanessa-rosa-cv.pdf',
  cvLabel: 'Download CV (artist / educator)',
  littleMartians: 'https://littlemartians.world',

  motto: 'I am devoted to the art of time traveling.',

  // The homepage opening.
  greeting: 'dear human,',
  statementTitle: 'I am devoted to the art of time traveling.',
  statement: ['Let me share my story with you.'],

  // Bios: the corrected text. The old site still carries the version with
  // “projects that mixtures public art”, which several institutions copy-pasted.
  bioShort:
    'Art historian by training, Vanessa Rosa is a Brazilian visual artist based in the United States. Her work merges physical and digital media into a storytelling continuum. Murals become portals to an imaginary world with projection mapping, and ceramics metamorphose into living entities with the aid of AI models.',
  bioLong: [
    'Art historian by training, Vanessa Rosa is a Brazilian visual artist based in the United States. Her work merges physical and digital media into a storytelling continuum. Murals become portals to an imaginary world with projection mapping, and ceramics metamorphose into living entities with the aid of AI models.',
    'She began painting in the streets of Rio de Janeiro in 2010, making murals that placed historical characters into the local environment. Her work gradually evolved into tales of world history and cultural exchange, from Portuguese tiles, Islamic sacred geometry and Chinese porcelain to the study of ethnomathematics and patterns within indigenous societies. She moved from a completely freehand approach to a mix of several media. After the 2020 pandemic, Vanessa dived into science fiction and began creating the Little Martians World, a fictional universe of AI-embodied characters whose films have screened at Christie’s, the NVIDIA AI Art Gallery, and dozens of festivals.',
    'She is a core member of Mars College and art director of the publisher Viajante do Tempo.',
  ],
};

// The homepage is the entrance: it has no nav item of its own; the name
// links back to it. Sketchbooks is parked until it moves inside Research.
// There is no Threads index: the projects are reached from the homepage
// timeline and the collections, which is where people actually look.
export const nav = [
  { label: 'Art', href: '/art' },
  { label: 'Research', href: '/research' },
  { label: 'Info', href: '/info' },
  { label: 'Little Martians ⇢', href: 'https://littlemartians.world', external: true },
];
