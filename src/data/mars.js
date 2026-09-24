// ---------------------------------------------------------------------------
// Mars College. The page borrows the rhythm of mars.college — numbered
// sections, a hairline rule, one big headline, a narrow column of text, then
// photographs across the full width — but keeps this site's own type and only
// swaps the colours for the desert ones.
//
// The description of the college follows mars.college and the college's own
// booklet; the rest is Vanessa's account of what she does out there.
// ---------------------------------------------------------------------------

export const cover = {
  kicker: 'A place · 2020 to now',
  title: 'Mars College',
  line: 'An off-grid college in the Southern California desert, built from scratch every winter.',
  image: '/images/mars/mc-cover-camp.webp',
  imageAlt:
    'The camp from the air: the MARS letters, the trailers and the pallet-rack building on the dry lake bed, with people gathered around a wooden frame in the foreground.',
};

export const opening = {
  lede:
    'I see Mars College as a prototype for high-tech, low-cost education, AI applied for human autonomy, and ecosystem thinking.',
  body: [
    'What I have been most excited about in our current technological transformation is how it can have an impact on our physical world. We use AI to teach ourselves all sorts of physical crafts, by asking as many questions as we wish, then taking pictures of the process and asking more, so we can learn much faster about so many different topics.',
    'We are very far from being a fully sustainable, regenerative system. We depend on the grid for water, food, deliveries. But we could aim in that direction, and eventually some of the Martian camps would get there, and then they could work as references, experimentation hubs, for truly self-reliant communities. Thanks to people like Freeman Murray and Sam Smith, aka Solar Sam, solar power is the main energy source used on Mars. We could use our local clay for many more projects, and I would like to contribute for that to happen.',
  ],
};

export const what = {
  kicker: 'What Mars College is',
  body: [
    'A pop-up, off-grid intentional community and educational experiment on a dry lake bed near Bombay Beach, by the Salton Sea. Since 2020, each winter a group of artists, technologists and builders gathers for three months to build a temporary solar-powered village, and takes it down again in the spring.',
    'It runs as a do-ocracy, outside the traditional academic system. There are no degrees and no tuition. Participants — Martians — share skills, run workshops on an open calendar, and learn about living off the grid by doing it.',
  ],
  plate: {
    src: '/images/mars/mc-camp.webp',
    caption: 'The camp on the lake bed',
  },
};

// the campus year by year, from mars.college's own record
export const years = [
  { year: '2020', src: '/images/mars/year-2020.webp', caption: 'The Portal, the first structure' },
  { year: '2021', src: '/images/mars/year-2021.webp', caption: 'The first pallet-rack build on the open lake bed' },
  { year: '2022', src: '/images/mars/year-2022.webp', caption: 'The village strung out below the mountains' },
  { year: '2023', src: '/images/mars/year-2023.webp', caption: 'Chiba going up, solar with it' },
  { year: '2024', src: '/images/mars/year-2024.webp', caption: 'Spread across the playa' },
  { year: '2025', src: '/images/mars/year-2025.webp', caption: 'Chiba and the camp around it' },
  { year: '2026', src: '/images/mars/year-2026.webp', caption: 'The muraled hall and the village ring' },
];

export const aspects = [
  {
    n: 'I',
    title: 'High-tech, off-grid living',
    body: [
      'The campus is plywood, metal framing and a large central solar array, with experimental dwellings raised each season alongside the vans and the RVs.',
      'We call the main structure Chiba every year. Since 2021 it has been gradually wired with AI — Discord bots that run the lights and the gallery screens, environmental sensors, generative displays — so the building answers its inhabitants like a living system.',
    ],
    image: '/images/mars/mc-chiba-screens.webp',
    caption: 'The gallery screens inside Chiba',
  },
  {
    n: 'II',
    title: 'Academics & workshops',
    body: [
      'The curriculum is entirely peer-taught, and covers machine learning, generative AI, creative writing, solar installation and bodywork.',
      'Each season has a public midterm of project presentations and closes with Mars Electronica, a large art show where every Martian is welcome to contribute work to the main gallery at Chiba. Since 2023 an AI film festival has run alongside it.',
    ],
    image: '/images/mars/mc-lecture.webp',
    caption: 'A class at Chiba',
  },
  {
    n: 'III',
    title: 'Community',
    body: [
      'Somewhere between an artist residency, a tech incubator and a commune, with shared meals, high-speed internet and sanitation handled cooperatively.',
      'Over the years it has grown into distinct camps with their own governance: Freeside, Tool Camp, Co-Lab, and the one that was AI Camp until it renamed itself the Mars Institute of Technology, aka MIT. The camps like to change their names.',
    ],
    image: '/images/mars/mc-community2.webp',
    caption: 'The Martians, in front of Chiba',
  },
];

// --- her own work out there ------------------------------------------------
export const mine = {
  kicker: 'My part in it',
  title: 'What I do on Mars',
  lede:
    'I have been part of the core team since the first season. Some of it is the unglamorous work a temporary town needs; the rest is this.',
};

export const contributions = [
  {
    n: 'I',
    title: 'Little Martians',
    years: '2020 to now',
    body: [
      'Living on Mars College inspired me to imagine futures with my hands. That’s where the Little Martians came to life: a sci-fi world based on my own ceramic sculptures, merging ancient craft with every new AI technique I get the chance to learn.',
    ],
    images: [
      { src: '/images/mars/lm-mycos.webp', caption: 'Mycos the Little Martian.' },
      { src: '/images/mars/lm-electronica.webp', caption: 'Little Martians projected during Mars Electronica, 2022.' },
      { src: '/images/mars/lm-chiba.webp', caption: 'The Little Martians shrine at Chiba, 2026. Photograph by Ygor Marotta.' },
    ],
    links: [
      { label: 'The whole project', href: '/threads/little-martians' },
      { label: 'Little Martians World', href: 'https://littlemartians.world', external: true },
    ],
  },
  {
    n: 'II',
    title: 'Murals & projections',
    years: '2020 to now',
    body: [
      'Martian plywood is a great base for murals. Each year we create new ones, then they come down, and the following year we often recombine the pieces into new configurations.',
      'At night the same walls stop being walls. Projection mapping is a Martian tradition, and it turns the paintings into portals.',
    ],
    images: [
      { src: '/images/mars/mural/m-01.webp', caption: '2021. A jungle painted across the plywood.' },
      { src: '/images/mars/mural/m-02.webp', caption: '2022. Blue arches under the solar array.' },
      { src: '/images/mars/mural/m-03.webp', caption: '2024. Chiba, with the lettering by Will Simmons and a central flower after Marzipan’s AI version of Kirby’s Mars College logo.' },
      { src: '/images/mars/mural/m-04.webp', caption: '2024. Painted with Cekis.' },
      { src: '/images/mars/mural/m-05.webp', caption: '2026. Saturn’s Theater of Minds: painting and projections.' },
    ],
  },
  {
    n: 'III',
    title: 'Rituals',
    years: '',
    body: [
      'It started as a fun unpretentious project during our Midterms project presentation back in 2021. I created a series of eatable sculptures. Sofy Yuditskaya, the Mars Midterms original organizer, loved the work and pushed me to serve the chocolate heads the following year as part of her wedding celebration. Since then, it evolved as a Martian annual ritual. Eventually we realized it was a kind of cacao ceremony and it became a moment for expressing gratitude towards the community.',
    ],
    // names in the prose above that should carry a link
    bodyLinks: [{ text: 'Sofy Yuditskaya', href: 'https://www.yuditskaya.com/' }],
    gallery: 'slides',
    images: [
      { src: '/images/mars/ritual/r-01.webp', caption: '2021. The first eatable sculptures.' },
      { src: '/images/mars/ritual/r-02.webp', caption: '2021. Martian chocolate.' },
      { src: '/images/mars/ritual/r-03.webp', caption: '2024. Eating a small chocolate head. Photograph by Chebel, who was the one who noticed the likeness to a cacao ritual.' },
      { src: '/images/mars/ritual/r-04.webp', caption: '2026. The Midterms ritual with Ria Rajan. Photograph by Xiaocheng.' },
      { src: '/images/mars/ritual/r-05.webp', caption: '2026. The Midterms ritual with Ria Rajan. Photograph by Xiaocheng.' },
      { src: '/images/mars/ritual/r-06.webp', caption: '2026. The Midterms ritual with Ria Rajan. Photograph by Xiaocheng.' },
      { src: '/images/mars/ritual/r-07.webp', caption: '2026. Martians watch the sunset in silence. Photograph by Xiaocheng.' },
    ],
  },
  {
    n: 'IV',
    title: 'The Mars AI Film Festival',
    years: 'Since 2023',
    body: [
      'I started the film festival in 2023 and it has run every season since. Gene Kogan offers the computing credits and teaches the main AI filmmaking classes.',
      'Every film is made by Martians during the semester — generative video, voice, music and story — and premieres as one reel, outdoors under the desert sky, during Mars Electronica and Bombay Beach Biennale.',
    ],
    images: [{ src: '/images/fest/fest-hero.webp', caption: 'The screening, Bombay Beach' }],
    links: [
      { label: 'The festival', href: 'https://mars.college/mff', external: true },
      { label: 'Where my own films have travelled', href: '/film-festivals' },
    ],
  },
  {
    n: 'V',
    title: 'Hosting',
    years: '2021 to now',
    body: [
      'Beyond supporting the project overall, I have personally hosted dozens of people in my house in town, Saturn. Bombay Beach is a few minutes from the lake bed, and Saturn is where people land when they arrive, or warm up when the desert gets too much.',
    ],
    images: [
      { src: '/images/mars/mc-saturn.webp', caption: 'A long dinner' },
      { src: '/images/mars/mc-camp.webp', caption: 'The edge of the season' },
    ],
  },
  {
    n: 'VI',
    title: 'Art shows at Saturn',
    years: 'Since 2025',
    body: [
      'Last year I was finally able to focus on organising art shows at Saturn, and I would like to do much more of it. The ambition is outreach: bringing people from outside the desert in, and getting the work made here seen by more than the people who made it.',
    ],
    images: [
      { src: '/images/mars/mc-show.webp', caption: 'An installation at Saturn' },
      { src: '/images/mars/mc-dusk.webp', caption: 'Between the lake bed and town' },
    ],
  },
];

export const note = [
  'If our technology could one day take humans to live on Mars, how could it help us take better care of Earth?',
];

export const facts = [
  ['Since', '2020'],
  ['Where', 'Bombay Beach, California'],
  ['How long', 'Three months, every winter'],
  ['Power', 'Solar'],
];

export const links = [
  { label: 'mars.college', href: 'https://mars.college/', external: true },
  { label: 'The AI film festival', href: 'https://mars.college/mff', external: true },
  { label: 'The Mars College Substack', href: 'https://marscollege.substack.com/', external: true },
  { label: 'What has been written about it', href: '/info#press' },
];
