// ---------------------------------------------------------------------------
// The homepage groups the work by what it is made of and what it is for.
//
// `items` is written out by hand rather than derived from threads.js, because
// several of these are not threads: a character, a research strand, a book, a
// publishing house. Anything without an href is listed but not yet a page.
// ---------------------------------------------------------------------------

export const collections = [
  {
    key: 'public',
    image: '/images/work/coll-public.webp',
    imageAlt:
      'Painted blue archways on the walls of a solar-powered structure at Mars College, in the desert.',
    title: 'Public art & community',
    span: '2009–present',
    blurb:
      'From favela walls in Rio to an off-grid community in the California desert. Work made outdoors, at the scale of a body or a building, with the people who live where it stands. A community as a social sculpture.',
    media: 'Mural · stencil · body painting · workshops · projection',
    items: [
      {
        label: 'Visible Memories',
        note: 'my first public art and art history research project',
        years: '2009–2016',
        href: '/threads/visible-memories',
      },
      { label: 'Maurício Hora', note: 'and the history of favelas', years: '2011–2013', href: '/mauricio-hora' },
      {
        label: 'Mars College',
        note: 'high tech low cost living experiment',
        years: '2020–present',
        href: '/mars-college',
      },
    ],
  },
  {
    key: 'patterns',
    image: '/images/work/coll-patterns.webp',
    imageAlt:
      'A Huni Kuin pattern cast onto a face by sunlight through a laser-cut stencil, in the forest on the upper Envira.',
    title: 'Patterns & Hackers',
    span: '2015–present',
    blurb:
      'Everything is made out of patterns. Trade routes followed backwards through blue-and-white; azulejo, Adinkra and arabesque forced through one-point perspective until the perspective becomes the subject; weaves and braids understood through their algorithmic logic.',
    media: 'Laser-cut stencil · parametric design · painting · writing',
    items: [
      {
        label: 'The Silk Roads',
        note: 'the blue and white paintings',
        years: '2015–2020',
        href: '/threads/the-silk-roads',
      },
      {
        label: 'Ethnomathematics & Ethnocomputing',
        note: 'algorithmic art history',
        years: '2016–present',
        href: '/threads/ethnocomputing',
      },
      {
        label: 'Same Putumi',
        note: 'the Huni Kuin shaman',
        years: '2018–2019',
        href: '/threads/same-putumi',
      },
    ],
  },
  {
    key: 'worlds',
    image: '/images/work/coll-worlds.webp',
    imageAlt:
      'Two glazed ceramic Little Martian heads facing each other, one held in a hand, against black.',
    title: 'From ceramics to AI-powered worlds',
    span: '2020–present',
    blurb:
      'Ceramic characters, 3-D scanned and given voices. A species descended from all of Earth’s life, keeping our memory in the Imaginarium. Films, installations and exhibitions built from physical objects that become avatars.',
    media: 'Ceramics · 3-D scanning · film · installation · generative models',
    items: [
      { label: 'Little Martians', years: '2020–present', href: '/threads/little-martians' },
      { label: 'Film festivals', years: '2023–present', href: '/film-festivals' },
      {
        label: 'The Little Martians research',
        years: '2021–present',
        href: 'https://littlemartians.substack.com/',
        external: true,
      },
    ],
  },
  {
    key: 'books',
    image: '/images/work/books-plate.webp',
    imageAlt:
      'Little Martians World: The Codex, by Verdelia, Librarian of the Moon. The bound cover held up against grass.',
    title: 'The love of making books',
    span: 'Ongoing',
    blurb:
      'When I was a kid, my mom, my sister and I learned to make books together. In the 2000s there was a revolution in the book industry called the digital turn, which meant that a middle-class Brazilian family could start selling books through the early years of social media. We ended up creating a publishing company known as Viajante do Tempo, or Time Traveller in Portuguese. Only recently have I started fully integrating making books with my art practice, and I must confess I am very excited to create more.',
    media: 'Editorial · illustration · art direction · print',
    items: [
      { label: 'The art of making books', years: '1990s–present', href: '/books' },
      { label: 'Sketchbooks', years: '2009–present', href: '/sketchbooks' },
      { label: 'Fiction writing' },
    ],
  },
];

// ---------------------------------------------------------------------------
// The research note on the homepage.
// ---------------------------------------------------------------------------

export const essays = {
  research: {
    kicker: 'Research',
    // the question leads, in the display face; the rest follows underneath
    highlight: 'How can we train our imagination to reach other dimensions?',
    body: [
      'Every generation rewrites history in order to understand itself. With AI arriving and our environments collapsing, the past I need to question is much older than the human one. And it turns out our brains were never the center of intelligence.',
      'Here I share what I am working on, and how the thinking got here.',
    ],
    // two beings from Verdelis's Letter, one on each side of the text
    figures: [
      {
        src: '/images/verd/neurons1.webp',
        alt: 'A speculative being drawn for Verdelis’s Letter, its crown branching like neurons.',
      },
      {
        src: '/images/verd/kalama2.webp',
        alt: 'Kalama, one of the Little Martians, drawn for Verdelis’s Letter.',
      },
    ],
    href: '/research',
    linkText: 'The research ⇢',
  },
};
