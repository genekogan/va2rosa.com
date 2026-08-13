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
  image: '/images/mars/mc-cover.webp',
  imageAlt:
    'The Mars College camp on the dry lake bed at dusk: the solar array, the pallet-rack building and the vans parked around it.',
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
      'Chiba is the central building: a pallet-rack structure built each January and disassembled each April, rebuilt differently the next year. Since 2021 it has been gradually wired with AI — Discord bots that run the lights and the gallery screens, environmental sensors, generative displays — so the building answers its inhabitants like a living system. Then we take it down and teach it to be alive again next season.',
    ],
    image: '/images/mars/mc-chiba.webp',
    caption: 'Under the solar array',
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
      'Over the years it has grown into distinct camps with their own governance: AI Camp, Freeside, Tool Camp, Co-Lab.',
    ],
    image: '/images/mars/mc-community.webp',
    caption: 'The Martians',
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
      'The Little Martians begin as clay, and much of that clay work happens in the desert. The heads are shaped and glazed by hand, then scanned and handed to generative models, where they learn to speak and move.',
      'At the end of the season they come back as a shrine in the Chiba gallery, lit from inside, for Mars Electronica.',
    ],
    images: [
      { src: '/images/work/lm-1.webp', caption: 'A head, straight out of the glaze' },
      { src: '/images/work/little-martians-hero.webp', caption: 'A season of heads' },
      { src: '/images/work/lm-2.webp', caption: 'And where they end up living' },
    ],
    links: [
      { label: 'The whole project', href: '/threads/little-martians' },
      { label: 'Little Martians World', href: 'https://littlemartians.world', external: true },
    ],
  },
  {
    n: 'II',
    title: 'Murals & projections',
    years: '2021 to now',
    body: [
      'Most of the complex murals on Mars are mine. They go straight onto the plywood of Chiba and the camps, and they are painted knowing the building will be taken apart in April.',
      'At night the same walls stop being walls. I projection-map onto what I painted, so a flat surface opens into the world the characters live in, and the mural and the projection are two states of one image.',
    ],
    images: [
      { src: '/images/mars/mc-mural-1.webp', caption: 'The arches, finished' },
      { src: '/images/mars/mc-mural-2.webp', caption: 'Painting them' },
      { src: '/images/work/mars-college-plate.webp', caption: 'The solar building' },
      { src: '/images/mars/mc-projection.webp', caption: 'A Little Martian on the mountains' },
    ],
  },
  {
    n: 'III',
    title: 'Rituals',
    years: 'Since 2021',
    body: [
      'My signature is the chocolate head eating ceremony, which I started in 2021 and have run every season since. Little Martian heads, cast in chocolate, handed around and eaten by everyone.',
    ],
    images: [],
  },
  {
    n: 'IV',
    title: 'The Mars AI Film Festival',
    years: 'Since 2023',
    body: [
      'I started the film festival in 2023 and it has run every season since. Gene Kogan offers the computing credits and teaches the main AI filmmaking classes.',
      'Every film is made by Martians during the semester — generative video, voice, music and story — and premieres as one reel, outdoors under the desert sky, during Mars Electronica at the Bombay Beach Drive-In.',
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
