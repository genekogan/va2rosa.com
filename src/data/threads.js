// ---------------------------------------------------------------------------
// The work, in periods. Some ended; some turned into the next thing.
// `state` is one of: ended | transformed | ongoing: it drives the timeline.
// `collection` groups them on the homepage: public | patterns | worlds
//
// Each thread renders both on the homepage (number, years, places, title,
// summary, plate) and as its own page at /threads/<slug>.
//
// Fields marked DRAFT below were written from the structure brief and need
// your words. Thread 03 is the one that is fully written.
// ---------------------------------------------------------------------------

export const threads = [
  {
    number: '01',
    slug: 'visible-memories',
    hasPage: false,
    href: '/threads/visible-memories', // its own page, phase by phase
    title: 'Visible Memories',
    // Years extended to 2016: your own site says you painted the port zone
    // from 2010 and that Sankofa, in 2016, was the last project there.
    years: '2009–2016',
    start: 2009, end: 2016,
    state: 'ended',
    collection: 'public',
    places: 'Pedra do Sal · Port zone, Rio de Janeiro',
    status: 'Ended, 2016',
    carrier: 'The face, at human scale',
    media: 'Acrylic, spray paint, parametric stencil, wall',
    related: ['mauricio-hora', 'the-silk-roads'],
    summary: [
      'The port zone of Rio was once the biggest slave port of the Americas, and one of the birthplaces of samba and modern carnival. Ten years ago barely anyone in the city went there. I started painting in the region in 2010, on an undergraduate research scholarship, making life-size figures of people from other times, as if the everyday life of the past had been mixed into the present one.',
      'It was the strongest formative experience I had in the arts. It is where I understood what art and activism are to each other.',
    ],
    lede:
      'Life-size figures of people from other times, painted into a neighbourhood the city had decided to forget. Then, over six years, a set of collaborations with the people who had never forgotten it.',
    thesis:
      'A portrait on a wall is an argument about which of a city’s histories get to stay visible.',
    strands: [
      {
        title: 'I. Why the port zone',
        body:
          'The biggest slave port in the Americas, a birthplace of samba and modern carnival, and, after the reforms for the 2016 Olympics, a symbol of Rio’s transformation and of its continued denial of the past. Painting there was never a neutral act.',
      },
      {
        title: 'II. Figures from other times',
        body:
          'The first paintings, from 2010, were imaginary people at life scale, placed as though the past were still going about its day alongside the present. The scale is the argument: at the size of a body, a painted figure meets you rather than decorates the wall behind you.',
      },
      {
        title: 'III. The slave ship, 2014',
        body:
          'Working with Quilombola activists, descendants of enslaved people who have kept their traditions and their housing since before abolition, and with Felipe Carvalho, Diego Deus and Douglas Oliveiras, all raised in the port zone, we painted a large slave ship carrying a message of strength. It has since appeared in news articles, music videos and even tour advertising.',
      },
      {
        title: 'IV. The Sankofa Project, 2016',
        body:
          'Damião Braga, president of the Quilombo, invited me to paint during the Olympics. I coordinated it with Felipe Carvalho and the architect Verônica Natividade, whose students turned traditional Yoruba religious painting into parametric stencils in Grasshopper, following Ron Eglash on African fractals, with advice from Professor Bolaji Campbell. This is the exact point where the street work turned into the ethnocomputing research.',
      },
    ],
    exhibited: [
      { years: '2010', text: 'First paintings, port zone, on an undergraduate research scholarship' },
      { years: '2014', text: 'The slave ship, Pedra do Sal, with Felipe Carvalho, Diego Deus, Douglas Oliveiras' },
      { years: '2016', text: 'The Sankofa Project, Quilombo of Pedra do Sal, during the Olympic Games' },
    ],
    reading: [
      'Eglash, Ron. <em>African Fractals: Modern Computing and Indigenous Design</em>. Rutgers UP, 1999.',
      'Campbell, Bolaji. On Yoruba traditional religious painting.',
    ],
    credits:
      'Sankofa Project. Damião Braga, Quilombo leader. Coordination and research: Vanessa Rosa, Felipe Carvalho. Architecture: Verônica Natividade (PUC). Artists: Joyce Oliveira, Pedro Carneiro, Diego Deus, Thiago Haule, Vitor Vanes. Architecture students: Camila Rodriguez, Eduardo Romano, Marcos Chaves, Rafael Magioli. Producer: Monica Combatente. Film: Pajé Produções. Production support: Zona Imaginária.',
    gallery: ['/images/work/vm-1.webp', '/images/work/vm-2.webp', '/images/work/vm-3.webp', '/images/work/vm-4.webp', '/images/work/vm-5.webp', '/images/work/vm-6.webp', '/images/work/vm-7.webp'],
    hero: '/images/work/visible-memories-hero.webp',
    heroAlt: 'The slave ship painted at Pedra do Sal, 2014. A large mural of a ship crowded with figures.',
  },

  {
    number: '02',
    slug: 'mauricio-hora',
    hasPage: false,
    href: '/mauricio-hora', // its own page
    title: 'Maurício Hora',
    // The studio years ended, the friendship did not: the work with his
    // archive continued in 2020 and again in 2023.
    years: '2011–present',
    start: 2011, end: null,
    state: 'ongoing',
    collection: 'public',
    places: 'Port zone, Rio de Janeiro',
    status: 'Ongoing',
    carrier: 'A shared studio, and the person who held the ground',
    media: 'Studio · photography · public art · community organising',
    related: ['visible-memories'],
    coauthor:
      'With Maurício Hora, photographer and community leader of Rio’s port zone.',
    summary: [
      'For more than two years I shared a studio in the port zone with the community leader Maurício Hora. Working next to someone who had spent his life documenting and defending this territory changed what I thought a public artwork was for.',
      'DRAFT. This page needs your account of the studio years and of the work you made together.',
    ],
    lede:
      'More than two years sharing a studio in Rio’s port zone with Maurício Hora, photographer, community leader, and the person who had been holding that ground long before I arrived.', // DRAFT
    thesis:
      'An outsider painting in a neighbourhood is a guest. Who vouches for you, and who you work beside, is the ground the work stands on.', // DRAFT
    strands: [
      {
        title: 'I. The studio',
        body:
          'DRAFT. Two years of a shared workspace in the port zone: what was made there, who came through it, and what it meant to have a base in the neighbourhood rather than visiting it.',
      },
      {
        title: 'II. Photography beside painting',
        body:
          'DRAFT. Maurício’s photographic record of the territory and the paintings going up on its walls are two ways of doing the same job. Say here how they informed each other.',
      },
    ],
    exhibited: [],
    reading: [],
    credits: 'With Maurício Hora.',
    hero: '/images/work/mauricio-hora-plate.webp',
    heroAlt: 'A street in Rio’s port zone at night.',
  },

  {
    number: '03',
    slug: 'the-silk-roads',
    hasPage: true,
    title: 'Silk Roads',
    years: '2015–2020',
    start: 2015, end: 2020,
    state: 'transformed',
    collection: 'patterns',
    places: 'Lisbon · Munich · New York · Red Hook · Cotonou · San Francisco',
    status: 'Concluded, 2020',
    carrier: 'The pattern, and the route it travelled',
    media: 'Acrylic, spray, laser-cut stencil, projection',
    related: ['ethnocomputing', 'same-putumi'],
    summary: [
      'It began in 2015 as Imaginary Tiles: laser-cut stencils of azulejo, Adinkra and arabesque, distorted with Western one-point perspective until you could see the eye itself. Blue and white travelled from Jingdezhen to Isfahan to Lisbon to Rio, and every stop claimed it as its own. The Pioneer Works mural held that route on one wall, with a single non-blue element, the Adinkra Futunfunefu Denkyemfunefu: two crocodiles, one stomach, still fighting over food.',
      'No pattern was ever pure. That is the whole argument, and it is also a portrait of Brazil.',
    ],
    lede:
      'Cobalt was mined in Persia, fired in Jingdezhen, carried by Portuguese ships, copied in Delft, re-copied in Lisbon, and arrived in Brazil as if it had always been ours. I paint the route, not the destination.',
    thesis:
      'No pattern was ever pure. The ones that pretend to be are the ones that were stolen most carefully.',
    strands: [
      {
        title: 'I. Cobalt as a trade route',
        body:
          'Blue-and-white is the first global brand. Following it backwards is following the money, the ships and the enslaved labour that moved with them. The Pioneer Works wall in Red Hook, painted 2017 and up until 2020, held four claims to the same blue: Chinese, Islamic, Portuguese, Ghanaian.',
      },
      {
        title: 'II. The one thing that isn’t blue',
        body:
          'Futunfunefu Denkyemfunefu: two Siamese crocodiles who share a stomach and fight over food anyway. It is the only element in colour, and it is the sentence the mural is actually making.',
      },
      {
        title: 'III. Stencil as a printing press',
        body:
          'Laser-cut stencils let a pattern repeat at architectural scale with a hand’s inconsistency. Every repetition is slightly wrong. That error is where the painting is.',
      },
      {
        title: 'IV. Perspective as a colonial instrument',
        body:
          'Applying one-point perspective to a non-Western tile makes the tile obey a European eye. Once you can see it happening, you cannot unsee where else it has happened.',
      },
    ],
    exhibited: [
      { years: '2017–2020', text: 'Mural, Pioneer Works, Red Hook, New York. Technology Residency' },
      { years: '2017', text: 'Dialogue & Afro-Brésil, with Gérard Quenum, Le Centre, Cotonou, Benin' },
      { years: '2022', text: 'This Mural is a Time-Traveling Portal, Xenoform Labs, San Francisco' },
    ],
    reading: [
      'Gerdes, Paulus. <em>The Circle and the Square</em>.',
      'Eglash, Ron. <em>African Fractals: Modern Computing and Indigenous Design</em>. Rutgers UP, 1999.',
      'Frankopan, Peter. <em>The Silk Roads: A New History of the World</em>. Bloomsbury, 2015.',
      'Glissant, Édouard. <em>Poetics of Relation</em>. Michigan, 1997.',
      'Necipoğlu, Gülru. <em>The Topkapı Scroll: Geometry and Ornament in Islamic Architecture</em>.',
      'Gombrich, E. H. <em>The Sense of Order</em>. Phaidon, 1979.',
    ],
    credits:
      'Photography: José Vicente, Bruno da Cunha (Lisbon); Walter Wlodarczyk (Red Hook). Curatorial text, Cotonou: Marion Hamard.',
    gallery: ['/images/work/sr-1.webp', '/images/work/sr-2.webp', '/images/work/sr-3.webp', '/images/work/sr-4.webp', '/images/work/sr-5.webp', '/images/work/sr-6.webp'],
    hero: '/images/work/silk-roads-hero.webp',
    heroAlt: 'The Pioneer Works mural in Red Hook. A long blue-and-white painted wall of stencilled archways running beside the red brick building on Pioneer Street.',
  },

  {
    number: '04',
    slug: 'ethnocomputing',
    hasPage: true,
    title: 'Ethnomathematics & Ethnocomputing',
    years: '2016–present',
    start: 2016, end: null,
    state: 'ongoing',
    collection: 'patterns',
    places: 'New York · Lisbon · Bombay Beach',
    status: 'Ongoing',
    carrier: 'The algorithm, and its uncredited author',
    media: 'Grasshopper, laser cutting, games, writing, talks',
    related: ['the-silk-roads', 'same-putumi'],
    summary: [
      'Ornament is not decoration. It is an algorithm with an author, and the author usually goes uncredited. Reading Paulus Gerdes and Ron Eglash changed what I thought I was looking at: a braid, a weave, a body paint, a sand drawing. Each one is a program, with a grammar, a compiler, and a lineage of engineers nobody ever called engineers.',
      'Infinity Game, Babycastles, 2017, with Verônica Natividade and Wenqi Li · Art, Parametric Design and Public Spaces, Penn State, 2017 · Grasshopper studies · Penrose-tile stencils, Mars College, 2022.',
    ],
    lede:
      'A weave is a program. It has a grammar, a compiler and a lineage of engineers. Almost none of them appear in any history of computing.', // DRAFT
    thesis:
      'Ornament is an algorithm with an author. Which authors we agree to call engineers is a political decision, not a technical one.', // DRAFT
    strands: [
      {
        title: 'I. What Gerdes and Eglash changed',
        body:
          'Paulus Gerdes on sona sand drawings and Ron Eglash on African fractals do the same thing from two directions: they show that the mathematics was never implicit or accidental. It was taught, refined and transmitted, by people who knew exactly what they were doing.',
      },
      {
        title: 'II. Building the tools back',
        body:
          'Grasshopper studies and parametric stencils are a way of reading these systems by re-implementing them. If it can be written as a program, the claim stops being poetic and starts being checkable.',
      },
      {
        title: 'III. Games as arguments',
        body:
          'Infinity Game (Babycastles, 2017, with Verônica Natividade and Wenqi Li) puts a pattern grammar in a player’s hands. Playing it is faster than being told what a generative system is.',
      },
    ], // DRAFT
    exhibited: [
      { years: '2017', text: 'Infinity Game, Babycastles, New York' },
      { years: '2017', text: 'Art, Parametric Design and Public Spaces, Penn State' },
      { years: '2022', text: 'Penrose-tile stencils, Mars College, Bombay Beach' },
    ],
    reading: [
      'Gerdes, Paulus. <em>Geometry from Africa: Mathematical and Educational Explorations</em>. MAA, 1999.',
      'Eglash, Ron. <em>African Fractals: Modern Computing and Indigenous Design</em>. Rutgers UP, 1999.',
    ],
    credits: 'Infinity Game with Verônica Natividade and Wenqi Li.',
    gallery: ['/images/work/ec-1.webp', '/images/work/ec-2.webp', '/images/work/ec-3.webp', '/images/work/ec-4.webp', '/images/work/ec-5.webp'],
    hero: '/images/work/ethnocomputing-hero.webp',
    heroAlt: 'Blue pattern studies on paper, stencilled tile motifs repeated in rows.',
  },

  {
    number: '05',
    slug: 'same-putumi',
    hasPage: false,
    href: '/threads/same-putumi', // its own page tree, not the generic template
    title: 'Same Putumi', // OPEN: title, and whether it carries both names
    years: '2018–2019',
    start: 2018, end: 2019,
    state: 'ended',
    collection: 'public',
    places: 'Upper Envira, Acre · São Paulo',
    status: 'Complete · co-authored',
    carrier: 'The collaboration itself',
    media: 'Jenipapo, airbrush, laser-cut stencil, photography, projection mapping',
    related: ['ethnocomputing'],
    coauthor:
      'A collaboration with Same Putumi, Huni Kuin artist, artisan, healer and religious leader, and with her village on the upper Envira river.',
    palette: 'envira', // this thread uses its own colours, not the site blue
    summary: [
      'I went for a month and stopped being the one who explains. We made photographs with laser-cut stencils and the sun, body paintings with jenipapo and airbrush, and later Nhandepa at MIS São Paulo: five weaving patterns Same chose herself, projection-mapped, alongside an infinity box of medicinal plants.',
      'Everything here is co-authored and says so. The full essay on mesh networks, autonomy and what a knowledge system needs in order to survive is attached.',
    ],
    lede:
      'A month on the upper Envira, working with someone who already knew everything I had been reading about. The work that came out of it has two authors, and the site says so before it says anything else.', // DRAFT
    thesis:
      'A knowledge system does not survive by being documented. It survives by staying in the hands of the people who can still change it.', // DRAFT
    strands: [
      {
        title: 'I. Five patterns Same chose',
        body:
          'Nhandepa at MIS São Paulo was built from five weaving patterns Same selected himself, projection-mapped at architectural scale, alongside an infinity box of medicinal plants. The selection was the authorship.',
      },
      {
        title: 'II. Stencils and sunlight',
        body:
          'Photographs made by laying laser-cut stencils against skin and letting the sun do the printing. A camera records; this method lets the place itself expose the image.',
      },
      {
        title: 'III. Mesh networks and autonomy',
        body:
          'The essay attached to this thread is about infrastructure: what a community needs to own, from the generator to the router to the hard drive, for its own knowledge to remain its own. It belongs on this page, not filed under research.',
      },
    ], // DRAFT
    exhibited: [
      { years: '2018', text: 'One month on the upper Envira with Same Putumi, Acre. Residency' },
      { years: '2019', text: 'Nhandepa, MIS São Paulo' },
      { years: '2019', text: 'Katxanawa' },
    ],
    reading: [],
    credits: 'Co-authored with Same Putumi and the community of the upper Envira.',
    hero: '/images/work/same-putumi-plate.webp',
    heroAlt: 'A Huni Kuin woven pattern laid on forest leaves.',
  },

  {
    number: '06',
    slug: 'mars-college',
    hasPage: false,
    href: '/mars-college', // its own page, set like the college's booklet
    title: 'Mars College',
    years: '2020–present',
    start: 2020, end: null,
    state: 'ongoing',
    collection: 'public',
    places: 'Bombay Beach, California',
    status: 'Ongoing',
    carrier: 'The community, and what it builds',
    media: 'Murals, shrines, projection mapping, body painting, workshops',
    related: ['little-martians'],
    summary: [
      'Off-grid, three months a year, in the desert. Murals, shrines, projection mapping, laser-cut body painting, workshops, and a lot of other people’s hands. This is the first thread where the artwork is the community that agreed to keep showing up, and everything it builds: its own power, its own computers, its own rituals, its own walls.',
      'With Marzipan, El Cekis, DRBT, Kif, Snays, Laz, Decoy, Will, Gene Kogan and many more.',
    ],
    lede:
      'Three months a year, off-grid in the Salton Sea basin, a few dozen people build a temporary town and then take most of it down again. I have been painting its walls since the first year.', // DRAFT
    thesis:
      'When the artwork is a community, the medium is everything it agrees to maintain: the solar array, the water tanks, the kitchen rota, the walls.', // DRAFT
    strands: [
      {
        title: 'I. The artwork is not the object',
        body:
          'Murals, shrines and projections here are outputs of something else: a group that decided to keep returning. The walls document the community rather than the other way around.',
      },
      {
        title: 'II. Building the infrastructure too',
        body:
          'Power, computers, water, kitchens. Making the conditions is not separate from making the work; in the desert the distinction stops being available.',
      },
      {
        title: 'III. Many hands',
        body:
          'Almost nothing here is signed alone. The credits are long on purpose.',
      },
    ], // DRAFT
    exhibited: [
      { years: '2020–present', text: 'Mars College, resident artist and mural programme' },
      { years: '2026', text: 'Bombay Beach Biennale, Saturn’s Theater of Minds' },
    ],
    reading: [],
    credits:
      'With Marzipan, El Cekis, DRBT, Kif, Snays, Laz, Decoy, Will, Gene Kogan and many more.',
    hero: '/images/work/mars-college-plate.webp',
    heroAlt: 'A painted structure at Mars College in the desert, with solar panels above.',
  },

  {
    number: '07',
    slug: 'little-martians',
    hasPage: true,
    title: 'Little Martians',
    years: '2020–present',
    start: 2020, end: null,
    state: 'ongoing',
    collection: 'worlds',
    places: 'Bombay Beach · São Paulo · elsewhere',
    status: 'Ongoing',
    carrier: 'An invented species',
    media: 'Ceramics · 3-D scanning · film · projection · generative models',
    related: ['ethnocomputing'],
    // the world has its own site; this page is the way in from here
    external: 'https://littlemartians.world',
    summary: [
      'And then the patterns became beings. Ceramic heads, 3-D scanned and given voices; a species descended from all of Earth’s life, tending the extreme worlds and keeping our memory in the Imaginarium.',
      'It has its own world, its own episodes and its own site.',
    ],
    lede:
      'A species descended from all of Earth’s life, tending the extreme worlds and keeping our memory in the Imaginarium. It begins as a lump of clay and ends as something with a voice.',
    thesis:
      'The safest place to put an argument about memory, extinction and machine intelligence is inside a species that does not exist yet.',
    strands: [
      {
        title: 'I. Clay first',
        body:
          'Every Little Martian starts as a physical ceramic head, made by hand and glazed. Nothing here is generated from nothing: the model is given a body that already existed, and the body carries the marks of having been made.',
      },
      {
        title: 'II. Scanned, and given a voice',
        body:
          '3-D scanning moves the object into a space where it can move and speak. The character is the same object in a second medium, not a replacement for it.',
      },
      {
        title: 'III. The Imaginarium',
        body:
          'The vast network of simulations in which the Little Martians hold Earth’s biological and cultural memory. It is the fictional form of the argument the whole practice has been making since the port zone: that what survives a journey depends entirely on who is carrying it.',
      },
      {
        title: 'IV. Films and shows',
        body:
          'Dear Human, My Muse took Best Female Director (Super Short) at Cannes World Film Festival, and the work has shown at Christie’s, the NVIDIA AI Art Gallery and some thirty festivals. Season One is seven episodes, in production.',
      },
    ],
    exhibited: [],
    reading: [],
    credits: '',
    gallery: ['/images/work/lm-1.webp', '/images/work/lm-2.webp', '/images/work/lm-3.webp', '/images/work/lm-4.webp'],
    hero: '/images/work/little-martians-hero.webp',
    heroAlt: 'A pile of glazed ceramic Little Martian heads in many colours.',
  },
];

// Only these four have their own pages. The rest still appear on the
// homepage timeline and inside their collection.
export const internalThreads = threads.filter((t) => t.hasPage);

// Everything with a page of its own: generic template or custom route.
export const pageThreads = threads.filter((t) => t.hasPage || t.href);

// Where a project links to, or null if it has nowhere to go.
export const linkFor = (t) =>
  t.href ?? (t.hasPage ? `/threads/${t.slug}` : t.external ?? null);

export function threadBySlug(slug) {
  return threads.find((t) => t.slug === slug);
}

// ---------------------------------------------------------------------------
// Rows that belong on the timeline but are not periods of work: they run
// underneath everything. They have their own pages, not /threads/ pages.
// ---------------------------------------------------------------------------
export const timelineExtra = [
  {
    number: '',
    title: 'Sketchbooks',
    href: '/sketchbooks',
    years: '2009–present',
    start: 2009,
    end: null,
    state: 'ongoing',
    carrier: 'The thinking, before it is anything else',
    underlay: true,
  },
  {
    number: '',
    title: 'Making books',
    href: '/books',
    years: '2010–present',
    start: 2010,
    end: null,
    state: 'ongoing',
    carrier: 'The argument, bound so it needs no battery',
    underlay: true,
  },
];
