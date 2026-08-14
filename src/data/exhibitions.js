// ---------------------------------------------------------------------------
// The /exhibitions page, told as work rather than as a list: one lead project,
// one that is a place as much as a project, then the shows as cards.
//
// The plain chronological record still lives in cv.js and at the foot of the
// page. This file is the part a curator actually reads.
// ---------------------------------------------------------------------------

export const lead = {
  kicker: 'The lead work',
  title: 'Little Martians',
  subtitle: 'Future beings who care about us',
  lines: ['Ceramic heads, made by hand, transformed into AI powered characters.'],
  image: '/images/work/little-martians-hero.webp',
  imageAlt:
    'Two glazed ceramic Little Martian heads facing each other, one held in a hand, against black.',
  body: [
    'Little Martians began as clay. The heads are shaped and glazed by hand, then 3-D scanned and handed to generative models. I co-create their world with AI, testing the tools as they evolve, learning about minds and possible futures while I imagine who they are.',
    'The work has run since 2020 as installations, films, books and exhibitions. It went to Christie’s first AI art auction, the NVIDIA AI Art Gallery, CVPR and NeurIPS, and it has collected some dozens of festival awards along the way.',
  ],
  links: [
    { label: 'Enter the world', href: 'https://littlemartians.world', external: true },
    { label: 'The thread on this site', href: '/threads/little-martians' },
  ],
};

export const place = {
  kicker: 'And a place',
  title: 'Mars College',
  years: '2020 to now',
  image: '/images/work/mars-college-plate.webp',
  imageAlt: 'Painted blue archways on a solar-powered structure at Mars College, in the desert.',
  body: [
    'Mars College is a three-month school, research lab and off-grid community on a dry lake bed near Bombay Beach, California, dedicated to a low-cost, high-tech life. The campus is built from scratch each winter from pallet racks and plywood, runs on solar, and is taken down again in the spring.',
    'Vanessa has been part of the core team since it began in 2020. She paints murals, teaches workshops, hosts people and does the hundred unglamorous things a temporary town needs. Several of the projects on this page were made there, or were inspired by it.',
  ],
  links: [
    { label: 'My thread on Mars College', href: '/mars-college' },
    { label: 'Mars College', href: 'https://mars.college', external: true },
  ],
};

export const highlight = {
  kicker: 'And a wall',
  title: 'The Pioneer Works fence',
  years: '2017 to 2021',
  image: '/images/pw/pw-corner.webp',
  imageAlt:
    'The painted blue fence wrapping the corner of Pioneer Works in Red Hook, with the red brick building behind it.',
  body: [
    'Two hundred and fifty square metres of painting wrapped around the Center for Art and Innovation in Red Hook, Brooklyn, made in 2017. Custom laser-cut stencils were used to create optical illusions of arches, azulejo blues, Adinkra and arabesque forms pushed into surreal perspectives.',
  ],
  links: [
    { label: 'The whole project', href: '/pioneer-works' },
    { label: 'Pioneer Works', href: 'https://pioneerworks.org/', external: true },
  ],
};

export const films = {
  kicker: 'And the films',
  title: 'Screenings around the world',
  years: '2023 to now',
  image: '/images/fest/fest-hero.webp',
  imageAlt:
    'An open-air screening in the desert at Bombay Beach: the film on a drive-in screen, a fire and the town parked around it.',
  body: [
    'The films, and the prizes and selections they have travelled through: Cannes World, Seoul, Milan, Bangkok, Dubai, Reykjavík and some fifty more.',
  ],
  links: [{ label: 'Open the page', href: '/film-festivals' }],
};

// The cards. `href` is optional: no link, no button. Sorted on the way out so
// the order here does not have to be maintained by hand.
const showCards = [
  {
    year: 2026,
    title: 'Uncanny Nova Phenomenon',
    venue: 'Machine Consciousness Conference, Lighthaven, Berkeley',
    image: '/images/shows/mc-shakes.webp',
    imageAlt: 'Two glazed ceramic busts of Shakespeare facing each other on a dark table.',
    body: 'A gallery exhibition on emergence, where simple rules give rise to behaviour that looks sentient. Curated by Aleksandra Smilek. The Little Martians Cabinet was gifted to the Center for the Interdisciplinary Study of Machine Consciousness.',
    href: 'https://machine-consciousness.ai/',
    external: true,
  },
  {
    year: 2026,
    title: 'Saturn’s Theater of Minds',
    venue: 'Bombay Beach Biennale, California',
    image: '/images/shows/theater-of-minds.webp',
    imageAlt: 'A three-channel projection-mapped installation inside a painted theatre.',
    body: 'A three-channel, projection-mapped installation in which artificial minds perform their own worlds from inside a painted theatre stage.',
    href: 'https://thecvf-art.com/project.php?year=2026&artist=vanessa-rosa&id=1017',
    external: true,
  },
  {
    year: 2025,
    title: 'Augmented Intelligence',
    venue: 'Christie’s, Rockefeller Center, New York',
    image: '/images/shows/christies.webp',
    imageAlt: 'Verdelia, a Little Martian ceramic head, on display at Christie’s.',
    body: 'Verdelia went to the first auction at a major house dedicated to AI art, 20 February to 5 March 2025. She was sold as a physical sculpture with a digital film attached.',
    href: '/christies',
  },
  {
    year: 2025,
    title: 'Immersive exhibitions',
    venue: 'Fundação Bienal de São Paulo',
    image: '/images/shows/bienal-sp.webp',
    imageAlt: 'A darkened room with Little Martians projected across the walls.',
    body: 'Two years running at the Bienal foundation in São Paulo, for NFT.Brasil in 2024 and TokenNation Brasil in 2025. Projection filling a room, and Brazilian audiences meeting the work at home.',
    href: '/immersive-sao-paulo',
  },
  {
    year: 2022,
    title: 'Glitch ARTS+TECH Residency',
    venue: 'Château du Feÿ, Burgundy, France',
    image: '/images/shows/glitch-chateau.webp',
    imageAlt: 'Château du Feÿ seen from the air, the courtyard and fountain in front of it.',
    body: 'Two weeks in a château in Burgundy, once a year, with artists, technologists, writers and collectors who work across digital and physical media. I have taken part in all four editions: 2022, 2023, 2024 and 2025. Most of what came out of it were friendships and the collaborations that followed.',
    href: 'https://www.instagram.com/glitchresidency/',
    external: true,
  },
  {
    year: 2024,
    title: 'Vision Weekend',
    venue: 'Foresight Institute, Schloss Bückeburg, Germany',
    image: '/images/shows/foresight-buckeburg.webp',
    imageAlt: 'The Little Martians installation in a room at Bückeburg Castle.',
    body: 'Little Martians shown inside a hundred-year-old castle, to an audience of people arguing about the long-term future.',
    href: '/foresight-buckeburg',
  },
  {
    year: 2024,
    title: 'Little Martians at Saturn',
    venue: 'Bombay Beach Biennale, California',
    image: '/images/shows/bbb-2024.webp',
    imageAlt: 'The Little Martians solo installation at Bombay Beach, lit at night.',
    body: 'A solo exhibition in the desert, at the biennale that takes over Bombay Beach for a weekend each spring.',
  },
  {
    year: 2023,
    title: 'Little Martians pop-up',
    venue: 'Re:Gen:Cy, Brooklyn, New York',
    image: '/images/shows/regency-2023.webp',
    imageAlt: 'Ceramic heads on plinths at the Re:Gen:Cy pop-up in New York.',
    body: 'A solo pop-up and art talk in Brooklyn. First presentation of a Little Martians interactive AI storytelling experiment.',
  },
  {
    year: 2022,
    title: 'Simulated Worlds',
    venue: 'Gray Area Foundation for the Arts, San Francisco',
    image: '/images/shows/gray-area-2022.webp',
    imageAlt: 'The Simulated Worlds installation and workshop at Gray Area.',
    body: 'Participatory world-building with AI: an exhibition and two workshops.',
  },
  {
    year: 2019,
    title: 'Nhandepa',
    venue: 'Museum of Image and Sound (MIS), São Paulo',
    image: '/images/shows/nhandepa.webp',
    imageAlt: 'The Nhandepa immersive installation, painted patterns lit by projection mapping.',
    body: 'An immersive installation with Same Putumi and Verônica Natividade, 14 February to 10 March 2019, curated by Milton Guran and Monica Maia.',
    href: '/threads/same-putumi/nhandepa',
    href2: 'https://mis-sp.org.br/exposicao/nhandepa/',
    href2Label: 'The show at MIS',
  },
  {
    year: 2018,
    title: 'Ethnocomputing Experiments',
    venue: 'Pioneer Works, Brooklyn, New York',
    image: '/images/shows/ethnocomputing.webp',
    imageAlt: 'A Sona pattern projected over a painting of a receding perspective corridor.',
    body: 'With Wenqi Li, shown at Second Sundays on 8 April 2018 and open to 22 April. Chokwe Sona patterns from Angola, redrawn in Processing along the heritage algorithm that produced them, projected over a painting built from Vredeman de Vries’ seventeenth-century treatise on linear perspective.',
    href: '/ethnocomputing-experiments',
  },
  {
    year: 2017,
    title: 'Gérard Quenum & Vanessa Rosa',
    venue: 'Le Centre, Cotonou, Benin',
    image: '/images/gq/gq-afro-1.webp',
    imageAlt: 'The Afro-Brésil mural in the sculpture garden at Le Centre, Cotonou.',
    body: 'A two-person exhibition with Gérard Quenum, 30 September to 23 November 2017, made during a one-month residency. Dialogue: nine of his portraits taken over by azulejo and Adinkra patterns, a mural in the sculpture garden, and two canvases of my own.',
    href: '/gerard-quenum',
  },
  {
    year: 2017,
    title: 'Infinity Game',
    venue: 'Babycastles, New York',
    image: '/images/shows/infinity-game.webp',
    imageAlt: 'The Infinity Game projection-mapping installation and its infinity boxes.',
    body: 'An exhibition that is also a game, with Verônica Natividade and Wenqi Li, 3 to 24 August 2017. Representations of infinity from different cultures, in paintings, code, video mapping and mirrored boxes.',
    href: '/infinity-game',
  },
  {
    year: 2012,
    title: 'Ver(a)Cidade',
    venue: 'Caixa Cultural, Rio de Janeiro',
    image: '/images/vc/vc-pai-1.webp',
    imageAlt: 'The anamorphic landscape wrapped around the columns at Caixa Cultural.',
    body: 'My first massive institutional show. Thirteen artists on the urban scene, and I took the parts of the building nobody had asked for: a hanging drawing of downtown Rio behind the stairway, gouache passengers on the steps, and an anamorphic landscape wrapped around the columns upstairs. I produced the show as well.',
    href: '/ver-a-cidade',
  },
  {
    year: 2012,
    title: 'Mural at Artur Fidalgo',
    venue: 'Galeria Artur Fidalgo, Rio de Janeiro',
    image: '/images/op2/fidalgo-1.webp',
    imageAlt: 'The red mural installed at Galeria Artur Fidalgo, Rio de Janeiro.',
    body: 'I created a mural for this art gallery in November 2012, as a distorted mirror of the surrounding antique stores.',
  },
  {
    year: 2017,
    title: 'Imaginary Tiles',
    venue: 'B[x] Space, Bushwick, New York',
    image: '/images/work/imaginary-tiles-plate.webp',
    imageAlt: 'Blue and white tile patterns forced through a one-point perspective.',
    body: 'A solo show of the tile work in March and April 2017: azulejo, Adinkra and arabesque pushed through linear perspective until the perspective itself becomes the subject rather than the frame. The statement was written by the Iranian artist Marjan Fadavi.',
    href: '/imaginary-tiles',
  },
];

export const mainShows = [...showCards].sort((a, b) => b.year - a.year);

// ---------------------------------------------------------------------------
// The bodies of work that have their own page. These sit under the show cards.
// ---------------------------------------------------------------------------

export const workPages = [
  {
    title: 'Maurício Hora',
    years: '2011 to now',
    href: '/mauricio-hora',
    image: '/images/mh/mh-p-tank.webp',
    imageAlt: 'Oil painting of a water tank on the hillside at Morro da Providência, against Rio at dusk.',
    body: 'Fifteen years of friendship with the photographer of Morro da Providência: paintings made from his archive, and then two attempts, three years apart, to put the same photographs through machines.',
  },

  {
    title: 'Street art over the years',
    years: '2009 to now',
    href: '/street-art',
    image: '/images/street/street-002.webp',
    imageAlt: 'A mural in progress on a wall in Rio de Janeiro.',
    body: 'Where all of it started: walls in Rio, Chile, Berlin, Lisbon, Cotonou and New York, usually painted with other people.',
  },
  {
    title: 'Há muitas noites na noite',
    years: '2014 to 2015',
    href: '/ha-muitas-noites',
    image: '/images/tendler/tendler-000.webp',
    imageAlt: 'A painted landscape from the title sequence of the series.',
    body: 'Silvio Tendler’s seven-part series on Ferreira Gullar’s exile. More than twenty time-lapse painting animations and forty drawings, broadcast on TV Brasil.',
  },
  {
    title: 'The love of making books',
    years: 'Ongoing',
    href: '/books',
    image: '/images/work/books-plate.webp',
    imageAlt: 'The Little Martians Codex, hand-bound, held up against grass.',
    body: 'A publishing house built by one family in a living room, and the books that came out of it. Diana’s World, the Little Martians titles, the Codex bound by hand.',
  },
  {
    title: 'MAD — Machine Aided Drawings',
    years: '2019 to 2021',
    href: '/mad',
    image: '/images/mad/mad-01.webp',
    imageAlt: 'A plotted drawing of a Qing vase on a tiled floor, inside an illusionary frame.',
    body: 'Six drawings of a Qing vase made with an AxiDraw pen plotter, each one different because I moved the paper or the pen while the machine worked. With the Escher and the perspective treatises behind them.',
  },
  {
    title: 'Drawings',
    years: '2009 to now',
    href: '/sketchbooks',
    image: '/images/sk/dr-03.webp',
    imageAlt: 'A watercolour portrait, eyes closed, in blues and reds.',
    body: 'What I love most is to draw wherever I am. Sketches made on the streets and in life model sessions.',
  },
];
