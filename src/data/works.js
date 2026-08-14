// ---------------------------------------------------------------------------
// The project pages that hang off /shows. Each object is one page, rendered by
// components/WorkPage.astro. Image lists come from data/galleries.js, which is
// generated from what is actually in public/images, so a missing file cannot
// silently break a page.
//
// Sources: va2rosa.com (Ver-a-cidade, Other-projects), the portfolio folders on
// Drive, and Vanessa's own account of each project.
// ---------------------------------------------------------------------------

import { g, take, slice } from './galleries.js';
import { festivalRows } from './festivals.js';

export const pioneerWorks = {
  slug: 'pioneer-works',
  kicker: 'Public art · 2017 to 2021',
  title: 'The Pioneer Works fence',
  hero: '/images/pw/pw-corner.webp',
  heroAlt:
    'The painted fence turning the corner at Pioneer Works, with the red brick building and the street behind it.',
  lede:
    'Two hundred and fifty square metres of painting wrapped around the Center for Art and Innovation in Red Hook, Brooklyn. It stood for four years, and then it did what a painted fence does.',
  meta: [
    ['Where', 'Pioneer Works, Red Hook, Brooklyn'],
    ['When', 'Painted 2017, stood until 2021'],
    ['Scale', 'About 250 m² of fence'],
    ['Made during', 'The technology residency'],
  ],
  intro: [
    'Pioneer Works sits behind a long perimeter fence, and in 2017 the fence was mine to paint. I filled it with the vocabulary I had been building for years: arches, azulejo blues, Adinkra and arabesque forms pushed into a one-point perspective so the flat boards open into rooms that are not there.',
    'A wall like this is not a canvas that happens to be outside. People lean on it, walk past it every morning, photograph themselves against it, park in front of it. The work is finished by the street, not by me.',
  ],
  read: {
    kicker: 'Written at the time',
    title: 'How Pioneer Works got its blue fence',
    href: 'https://www.star-revue.com/how-pioneer-works-got-its-blue-fence-by-vanessa-rosa/',
    meta: 'Red Hook Star-Revue, 5 March 2020. Written by Vanessa Rosa.',
    body: [
      'The account of how the wall happened, written for the neighbourhood’s own paper three years after it went up. It starts with a laser-cut stencil workshop the technology department invited me to run in 2017, and with meeting the people who run the place.',
    ],
    linkText: 'Read it in the Star-Revue',
  },
  sections: [
    {
      title: 'The painting, 2017',
      body: [
        'Front, side, back and the stairway. The blue is the constant, and the perspective does the rest.',
      ],
      gallery: 'slides',
      // the corner shot is the header; no need to meet it twice
      images: slice('pw', 0).filter((im) => !im.src.includes('pw-corner')),
    },
    {
      title: 'What people did with it',
      body: [
        'For four years the fence was a backdrop for other people’s pictures. These are some of the posts that came back: portraits, dogs, weddings, skateboards, first days of school. This is the part of a public work you cannot design.',
      ],
      gallery: 'slides',
      images: take('pwig', 0, 17),
    },
    {
      title: 'Four years later, 2021',
      body: [
        'By September 2021 the sun, the salt air and four Red Hook winters had done their work. I went back and photographed the fence panel by panel: the blue gone chalky, the stencils half eaten, rust coming up through the pattern, paint lifting off in sheets, and a surveillance notice bolted straight through the painting.',
        'A mural outdoors is a slow performance and this is its last act. It is not a failure. It is the thing behaving exactly as a painted fence in Red Hook behaves.',
      ],
      gallery: 'slides',
      images: slice('pw21', 0),
    },
  ],
  closing:
    'The fence exists now as photographs, and as several thousand pictures on other people’s phones.',
  also: {
    kicker: 'Also at Pioneer Works',
    title: 'Ethnocomputing Experiments',
    body: [
      'The fence was not the only thing I made there. In April 2018, back inside the building, Wenqi Li and I showed Ethnocomputing Experiments: Chokwe Sona patterns from Angola redrawn in Processing along the heritage algorithm that produced them, projected over a painting built from Vredeman de Vries’ seventeenth-century treatise on linear perspective.',
      'It is the same argument as the fence, made indoors and with code: two mathematical ways of handling a line, put in one room.',
    ],
    image: '/images/ecx/night-1.webp',
    imageAlt:
      'A Sona line projected across a painted perspective corridor at Pioneer Works, at night.',
    links: [
      { label: 'Ethnocomputing Experiments', href: '/ethnocomputing-experiments' },
      { label: 'Pioneer Works', href: 'https://pioneerworks.org/', external: true },
    ],
  },
};

export const veracidade = {
  slug: 'ver-a-cidade',
  kicker: 'Group exhibition · 2012',
  title: 'Ver(a)cidade',
  hero: '/images/vc/vc-mou-1.webp',
  heroAlt: 'Moucharabieh: painted plastic curtains hung behind the stairway at Caixa Cultural.',
  lede: 'Translates as The Urban Scene, or The Urban Seen.',
  meta: [
    ['Where', 'Caixa Cultural, Rio de Janeiro'],
    ['When', '2012'],
    ['With', 'Thirteen artists'],
    ['Also', 'Executive producer'],
  ],
  intro: [
    'A collective exhibition that brought thirteen artists to the Caixa Cultural Center in Rio de Janeiro, each one with their own interpretation of the urban scene. I chose to occupy the space in a way that bound the show’s two floors together, interacting with the most impactful architectonic elements in Caixa Cultural: the hall’s columns and the central stairway. My participation can be seen as three different works, or as one with changes of medium and strategy.',
    'Behind the stairs one would find what seemed to be black curtains with transparent areas, creating an oneiric drawing of Rio’s downtown architecture, a work called Moucharabieh, like the Arabic window. The drawing builds a landscape where only the windows appear, as if it were a dark night and all the lights were on. However, through those transparent areas one sees a drawing behind the curtains, showing a stairway that leads to an old building with many other stairs and little secrets, inspired by Rio’s old architecture, Arabic moucharabiehs and Piranesi’s etchings.',
    'In the central stairway I drew moving passengers taken from observations of the city’s day to day downtown. I used gouache paint, hence the images were vulnerable to the visitors’ intervention.',
    'At last, when the spectator arrived at the second floor, one could see an image made of drawings glued over the central columns. The drawings had an anamorphic effect, so from some points of view it was possible to see a landscape floating over the main hall.',
    'I worked not only as an artist, but also as executive producer, accompanying every phase of the project’s realization.',
  ],
  sections: [
    {
      title: 'Moucharabieh',
      body: ['Plástico pintado, cabo de aço e papel vegetal. 4,2 × 6,6 × 1,3 m. 2012.'],
      images: [
        { src: '/images/vc/vc-mou-1.webp' },
        { src: '/images/vc/vc-mou-2.webp' },
        { src: '/images/vc/vc-mou-3.webp' },
        { src: '/images/vc/vc-mou-4.webp' },
        { src: '/images/vc/vc-mou-5.webp' },
        { src: '/images/vc/vc-mou-6.webp' },
        { src: '/images/vc/vc-mou-7.webp' },
        { src: '/images/vc/vc-mou-8.webp' },
      ],
    },
    {
      title: 'Paisagem',
      body: ['Ampliações fotográficas em vinil plotadas sobre colunas. 42,6 m². 2012.'],
      images: [
        { src: '/images/vc/vc-pai-1.webp' },
        { src: '/images/vc/vc-pai-2.webp' },
        { src: '/images/vc/vc-pai-3.webp' },
      ],
    },
    {
      title: 'Rabiscos',
      body: ['Tinta guache sobre corrimão de escadaria. Dimensões variadas. 2012.'],
      images: [
        { src: '/images/vc/vc-rab-1.webp' },
        { src: '/images/vc/vc-rab-2.webp' },
        { src: '/images/vc/vc-mou-5.webp' },
        { src: '/images/vc/vc-rab-3.webp' },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Infinity Game, Babycastles, 2017. Follows the original page: the video, then
// the four sections in the order they were shown there.
// ---------------------------------------------------------------------------
export const infinityGame = {
  slug: 'infinity-game',
  kicker: 'Exhibition and game · 2017',
  title: 'Infinity Game',
  hero: '/images/ig/ig-proj-1.webp',
  heroAlt: 'The projection-mapped installation at Babycastles, patterns thrown across the gallery.',
  lede:
    'Visual and numeric representations of infinity through the eyes of different cultures are the reference for an art exhibition that is also a game. A game made by paintings, coding, video mapping and infinity boxes.',
  meta: [
    ['Where', 'Babycastles Gallery, New York'],
    ['When', '3 to 24 August 2017'],
    ['With', 'Verônica Natividade and Wenqi Li'],
    ['Media', 'Painting · projection mapping · laser-cut stencil · code'],
  ],
  intro: [
    'The project is a collaboration between visual artist Vanessa Rosa, architect Verônica Natividade and creative coder Wenqi Li.',
    'The visitors were invited into the quest of looking for hidden numbers across the exhibition site, inside the infinity boxes. Each number is capable of transforming the projection mapping installation in a unique way. If the visitor finds them all, they win a prize: a laser-cut stencil and an email with the research behind the project.',
    'The project was first shown at Babycastles, NYC, in August 2017. It is based on research on ethnomathematics, a culturally contextualized approach to technology.',
    'This project had the collaboration of Verônica Natividade’s students: Camila Rodriguez and especially Marcelo Chaves.',
  ],
  video: { vimeo: '242384033', caption: 'Infinity Game.' },
  sections: [
    {
      title: 'The projection mapping installation',
      images: [
        { src: '/images/ig/ig-proj-1.webp' },
        { src: '/images/ig/ig-proj-2.webp' },
        { src: '/images/ig/ig-proj-3.webp' },
        { src: '/images/ig/ig-proj-4.webp' },
        { src: '/images/ig/ig-proj-5.webp' },
        { src: '/images/ig/ig-proj-6.webp' },
        { src: '/images/ig/ig-proj-7.webp' },
      ],
    },
    {
      title: 'The Infinity Boxes',
      images: [
        { src: '/images/ig/ig-box-1.webp' },
        { src: '/images/ig/ig-box-2.webp' },
        { src: '/images/ig/ig-box-3.webp' },
      ],
    },
    {
      title: 'People playing with the stencils and the projection',
      images: [
        { src: '/images/ig/ig-play-1.webp' },
        { src: '/images/ig/ig-play-2.webp' },
        { src: '/images/ig/ig-play-3.webp' },
        { src: '/images/ig/ig-play-4.webp' },
        { src: '/images/ig/ig-play-5.webp' },
        { src: '/images/ig/ig-play-6.webp' },
        { src: '/images/ig/ig-play-7.webp' },
      ],
    },
    {
      title: 'Design layouts and studies for the Infinity Boxes',
      body: ['Made with Grasshopper by Verônica Natividade and her students.'],
      images: [
        { src: '/images/ig/ig-design-1.webp' },
        { src: '/images/ig/ig-design-2.webp' },
      ],
    },
  ],
};

export const streetArt = {
  slug: 'street-art',
  kicker: 'Public work · 2009 to now',
  title: 'Street art over the years',
  hero: g.street[0]?.src,
  heroAlt: 'A mural in progress on a wall in Rio de Janeiro.',
  lede:
    'I started painting in public in Rio in 2009, while I was studying art history at UERJ. Everything else on this site grew out of that: the patterns, the projections, the ceramics, the films.',
  meta: [
    ['Since', '2009'],
    ['Where', 'Brazil, Chile, Portugal, Germany, France, Benin, the United States'],
    ['Media', 'Mural · stencil · body painting · projection'],
    ['Usually', 'With other people'],
  ],
  intro: [
    'A wall is the only studio that argues back. You paint at the speed of the light and the weather, the neighbours have opinions, and when you leave, the work belongs to the street rather than to you.',
    'This page is a portfolio rather than a chronology: Rio, Chile, Berlin, Lisbon, Cotonou, New York. Some of these walls are gone. Most of the good ones were painted with somebody else.',
  ],
  sections: [
    {
      title: 'Caminho',
      body: [
        'Using a photo by Angela Rolim, taken at Morro da Conceição in the port zone of Rio de Janeiro, I made a digital distortion of the image to enhance the perspective’s illusion. After pasting the photographic enlargement on a wall, I continued the work with spray paint and acrylics, creating characters who looked like the people who live there.',
        'Intrigued by the illusive effect, I decided to reassemble it in other contexts. I always try to adapt the painting and collage to their new surroundings, making characters and painted architectures that refer to local specificities.',
        'It was first made at Morro da Conceição during a feminist NGO mural event I coordinated, then shown at the 63rd Fortaleza Art Salon, and redone with Julia Suav at the II Kolirius International Festival in Macaé, Rio de Janeiro state.',
      ],
      images: [
        { src: '/images/street/cam-01.webp', caption: 'Made in Rio de Janeiro. Photo by Paulo Barros' },
        { src: '/images/street/cam-02.webp', caption: 'Made in Fortaleza. Photo by Danielle Travassos' },
        { src: '/images/street/cam-03.webp', caption: 'Fortaleza, detail. Photo by Danielle Travassos' },
        { src: '/images/street/cam-04.webp', caption: 'Fortaleza. Photo by Danielle Travassos' },
      ],
    },
    { title: 'Walls', images: take('street', 0, 12) },
    { title: 'More', images: slice('street', 12) },
  ],
  closing:
    'More walls are being added: Berlin, Cotonou and the desert are still to come, along with the earliest work from 2009 and 2010 in Rio.',
};

export const haMuitasNoites = {
  slug: 'ha-muitas-noites',
  kicker: 'Animation for television · 2014 to 2015',
  title: 'Há muitas noites na noite',
  hero: g.tendler[0]?.src,
  heroAlt: 'A painted landscape from the title sequence, with a line of the poem across it.',
  lede:
    'A seven-part documentary series by Silvio Tendler on Ferreira Gullar’s exile, built around his Poema Sujo. I made the painted animation that runs through it.',
  meta: [
    ['Directed by', 'Silvio Tendler'],
    ['Produced by', 'Caliban'],
    ['Broadcast', 'TV Brasil, seven episodes of 26 minutes'],
    ['My part', 'More than 20 time-lapse painting animations, and 40 drawings'],
  ],
  intro: [
    'Gullar wrote Poema Sujo in Buenos Aires in 1975, in exile, believing he might be killed before he finished it. Tendler’s series follows that journey through testimony, music and readings, and it needed images for the parts of a life that were never filmed.',
    'I painted those parts and filmed myself painting them, so the image arrives the way a memory does: a mark at a time, in front of you, until it becomes a place. More than twenty of these time-lapse sequences were produced, alongside forty drawings.',
  ],
  videos: [
    { title: 'Teaser', vimeo: '249747317', caption: 'Há muitas noites na noite — teaser.' },
    { title: 'An episode', youtube: 'f1juvStUUQA', caption: 'One of the episodes. The whole series is on YouTube.' },
    { title: 'Another episode', youtube: 'UHXVFcGnRTc' },
  ],
  sections: [
    {
      title: 'Frames',
      body: [
        'Stills from the teaser and from episode five, Poema Sujo 2. The whole series is on television archives and on YouTube.',
      ],
      images: take('tendler', 0, 8),
    },
  ],
  closing:
    'This was the first time my painting had to serve somebody else’s argument, on a schedule, at broadcast length. It taught me most of what I know about editing.',
};

// ---------------------------------------------------------------------------
// Ethnocomputing Experiments is one specific show: Pioneer Works, April 2018.
// The wider research thread lives elsewhere. Text follows the original page at
// va2rosa.com/Ethnocomputing-Experiments.
// ---------------------------------------------------------------------------

const ec = (slug, caption) => ({ src: `/images/ecx/${slug}`, caption });

export const ethnocomputingExperiments = {
  slug: 'ethnocomputing-experiments',
  kicker: 'Exhibition · Pioneer Works, 2018',
  title: 'Ethnocomputing Experiments',
  hero: '/images/ecx/night-1.webp',
  heroAlt:
    'A Sona line projected across a painted perspective corridor at Pioneer Works, at night.',
  lede:
    'A work about the mix of two extremely different representational systems, though both are highly mathematical in their approach to line.',
  meta: [
    ['With', 'Wenqi Li'],
    ['Opened', 'Second Sundays, 8 April 2018'],
    ['Open until', '22 April 2018'],
    ['Where', 'Pioneer Works, Red Hook, Brooklyn'],
  ],
  intro: [
    'A set of Angolan traditional patterns known as Sona, from the Chokwe people, are recreated with Processing, a free graphical library and development environment. The recreation follows the heritage algorithm embedded in the original patterns, which used to be made as finger drawings in sand: a person would tell a story and draw at the same time.',
    'We chose one specific pattern to project over a painting inspired by an early seventeenth-century treatise on linear perspective by the Dutch artist Vredeman de Vries. It is a pattern that tells the story of a wild chicken running away from a hunter. The line is the path the chicken takes while it tries to fool the hunter and exhaust him, until it can return to its hidden home, which sits precisely where the run started.',
    'The main inspiration for this project is the academic work of the Dutch and Mozambican author Paulus Gerdes, a prominent figure in the field of ethnomathematics. The other great influence is Ron Eglash’s work on ethnocomputing and heritage algorithms.',
  ],
  video: {
    vimeo: '265263624',
    title: 'The film',
    caption: 'Ethnocomputing Experiments, on Vimeo.',
  },
  terms: {
    title: 'Three words',
    items: [
      [
        'Ethnomathematics',
        'Ethno (culture, or group of people) + mathema (explaining reality) + tics (techno). In mathematics education, ethnomathematics is the study of the relationship between mathematics and culture. The term was introduced by the Brazilian educator and mathematician Ubiratan D’Ambrosio during the 1970s.',
      ],
      [
        'Ethnocomputing',
        'The study of the interactions between computing and culture, carried out through theoretical analysis, empirical investigation and design implementation. It includes research on the impact of computing on society, and the reverse: how cultural, historical, personal and societal origins affect the innovation, development, diffusion, maintenance and appropriation of computational artefacts or ideas. From the ethnocomputing perspective, no computational technology is culturally neutral, and no cultural practice is a computational void. Instead of treating culture as a hindrance to software engineering, culture should be seen as a resource for innovation and design.',
      ],
      [
        'Linear perspective',
        'The illusion of depth on a two-dimensional surface, based on a linear system of spatial alignment. Developed in fifteenth-century Italy, it is a key concept in Western architecture and painting. Even the nineteenth-century analogue camera was still built on the same principles of vision and representation that shaped linear perspective.',
      ],
    ],
  },
  sections: [
    {
      title: 'Installation, by day and by night',
      images: [
        ec('day-1.webp', 'The installation in daylight: the painting after Vredeman de Vries, before the projection starts.'),
        ec('night-1.webp', 'At night the Sona line runs across the painted corridor.'),
        ec('night-2.webp', ''),
        ec('night-3.webp', ''),
        ec('night-4.webp', ''),
      ],
      gallery: 'slides',
    },
    {
      title: 'Where the two systems come from',
      body: [
        'On one side, an engraving from Vredeman de Vries. On the other, the Sona pattern, and the algorithm that draws it.',
      ],
      images: [
        ec('vries.webp', 'Hans Vredeman de Vries (1527 to 1606), engraving from The Book of Perspective, 1604 to 1605.'),
        ec('sona.webp', 'A Chokwe pattern from Angola, known as Sona. This one tells the story of a wild chicken running away from a hunter.'),
        ec('algorithm.gif', 'The running chicken algorithm, redrawn in Processing.'),
        ec('making.gif', 'Making of.'),
      ],
    },
    {
      title: 'Second Sunday, 8 April 2018',
      images: [
        ec('open-1.webp', 'Second Sunday at Pioneer Works, 8 April 2018.'),
        ec('open-2.webp', ''),
        ec('open-3.webp', ''),
        ec('open-4.webp', ''),
      ],
      gallery: 'slides',
    },
    {
      title: 'Details',
      images: [
        ec('detail-1.webp', 'Detail: the line crossing the perspective.'),
        ec('detail-2.webp', ''),
        ec('detail-3.webp', ''),
        ec('artists.webp', 'The artists: Vanessa Rosa and Wenqi Li.'),
      ],
    },
  ],
  also: {
    kicker: 'Also at Pioneer Works',
    title: 'The fence',
    image: '/images/pw/pw-corner.webp',
    imageAlt: 'The painted blue fence wrapping the corner of Pioneer Works.',
    body: [
      'The same building, from the outside. Two hundred and fifty square metres of painting around the perimeter, made during the technology residency in 2017 and standing until 2021.',
    ],
    links: [
      { label: 'The Pioneer Works fence', href: '/pioneer-works' },
      { label: 'Pioneer Works', href: 'https://pioneerworks.org/', external: true },
    ],
  },
};

// ---------------------------------------------------------------------------
// Maurício Hora. Fifteen years of friendship: the paintings made from his
// photographs, and then two attempts, three years apart, to put those same
// photographs through machines. Vanessa's text, as she wrote it.
// ---------------------------------------------------------------------------
export const mauricioHora = {
  slug: 'mauricio-hora',
  kicker: 'A friendship · 2011 to now',
  title: 'Maurício Hora',
  hero: '/images/mh/mh-p-tank.webp',
  heroAlt:
    'Oil painting of a water tank on the hillside at Morro da Providência, silhouetted against Rio at dusk.',
  lede:
    'Once upon a time, favela was the name of a plant. Cnidoscolus quercifolius, rough and thorny, native to the dry hills of Bahia.',
  meta: [
    ['Where', 'Morro da Providência and Pedra do Sal, Rio de Janeiro'],
    ['Since', '2011'],
    ['Media', 'Oil and spray painting · GANs · diffusion models'],
    ['With', 'Maurício Hora'],
  ],
  intro: [
    'The word attached itself to low-income communities in the late 1890s, when veterans of the Canudos War and freed slaves built a camp on a hillside in Rio and named it after the plant that covered the hills they had just arrived from.',
    'The person who taught me this was my dear friend Maurício Hora. He was born on that hill, Morro da Providência, which was once called Morro da Favela and had to find a new name for itself after the old one spread to every other similar community in Brazil.',
    'Maurício is a photographer and a community leader. He started out delivering newspapers, got curious about the newsroom cameras, and became one of the first people to photograph a favela from the inside, with all of it at once: the traffic, the friendships, the beauty, the violence, the ordinary afternoons. He was the first person from Providência to visit Canudos, and he made a photo essay about the trip. With the French artist JR he founded Casa Amarela, the only cultural center in Providência, which has received Madonna and Pharrell Williams and a long line of politicians and entrepreneurs. Meanwhile parts of Providência can only be reached by climbing hundreds of steps. Maurício spends a lot of his time pressing the government or organizing his peers to build basic infrastructure, like massive water tanks, so people don’t have to carry buckets up those steps on their backs anymore. His life is told in the graphic novel Picture a Favela, by André Diniz.',
    'I met him because of my Visible Memories project. Maurício was the reason why my work at the historical Pedra do Sal lasted at all. He is one of the founders of Quilombo da Pedra do Sal, and he invited me to be part of his collective studio, where I had my painting corner for two years, a space called Imaginary Zone. I participated in his meetings with public officials, patrons, activist groups, and community gatherings. I created oil and spray painting works based on his photographs as an act of appreciation for how much I learned from him.',
  ],
  sections: [
    {
      title: 'His photographs',
      body: [
        'The pictures the paintings were made from.',
      ],
      gallery: 'slides',
      images: [
        { src: '/images/mh/mh-o-steps.webp', caption: 'Photograph by Maurício Hora' },
        { src: '/images/mh/mh-o-porch.webp', caption: 'Photograph by Maurício Hora' },
        { src: '/images/mh/mh-o-street.webp', caption: 'Photograph by Maurício Hora' },
        { src: '/images/mh/mh-o-dusk.webp', caption: 'Photograph by Maurício Hora' },
      ],
    },
    {
      title: 'The paintings, 2014 to 2015',
      gallery: 'slides',
      images: [
        { src: '/images/mh/mh-p-steps.webp', caption: 'Three on the steps. Oil on canvas' },
        { src: '/images/mh/mh-p-porch.webp', caption: 'Under the laundry. Oil on canvas' },
        { src: '/images/mh/mh-p-street.webp', caption: 'The street, with dogs. Oil and spray' },
        { src: '/images/mh/mh-p-tank.webp', caption: 'The water tank, and the city behind it. Oil on canvas' },
        { src: '/images/mh/mh-p-dog.webp', caption: 'The dog' },
        { src: '/images/mh/mh-p-woman.webp', caption: 'Standing in the doorway' },
        { src: '/images/mh/mh-p-det-1.webp', caption: 'Detail' },
        { src: '/images/mh/mh-p-det-2.webp', caption: 'Detail' },
        { src: '/images/mh/mh-p-det-3.webp', caption: 'Detail' },
        { src: '/images/mh/mh-p-det-4.webp', caption: 'Detail' },
      ],
    },
    {
      title: '2020, and the GANs',
      body: [
        'In 2020, I showed him how GANs worked and told him why I believed it was going to disrupt the lives of professional photographers. He understood immediately what it meant. Then he gave me a terabyte of his work to train a model as an experiment. My plan was to write an article on technology and inequality, but my trials did not work so well. To train a good StyleGAN2 image back then, it was important to have thousands of images with very similar compositions, and Maurício’s photos were too diverse for that. I did write a first draft that worked mostly as a preliminary version to my article Copyright Storm, which used Instagram photos from storm chasing photographers.',
      ],
      images: [
        { src: '/images/mh/mh-gan-1.webp', caption: 'StyleGAN2, trained on his archive' },
        { src: '/images/mh/mh-gan-2.webp', caption: 'The hill, dissolving' },
      ],
      video: {
        // served from this site rather than a platform, and nothing is
        // fetched until someone presses play
        file: '/video/mh-latent-walk.mp4',
        poster: '/video/mh-latent-walk.webp',
        caption:
          'A walk through the latent space of the model trained on Maurício’s archive. Thirty seconds, no sound.',
        alt: 'A slow morph through images generated from Maurício Hora’s photographs of Providência.',
      },
    },
    {
      title: '2023, and diffusion',
      body: [
        'In 2023 I went back to his photographs with open source generative models, Stable Diffusion with ControlNet, and pushed them through style after style. The same building on the left, the same hill falling away to the right, and then Kandinsky, then watercolor, then cut paper, then Mestre Vitalino style, then something with Saturn in the sky. I wanted to make a book about the history and the future of favelas with him. Another project that I did not finish.',
      ],
      gallery: 'slides',
      reference: {
        src: '/images/mh/mh-o-dusk.webp',
        caption: 'The photograph every one of these was made from. By Maurício Hora.',
      },
      images: [
        ...Array.from({ length: 17 }, (_, i) => ({
          src: `/images/mh/mh-cn-${String(i + 1).padStart(2, '0')}.webp`,
          caption: 'Stable Diffusion with ControlNet',
        })),
      ],
    },
  ],
  closing:
    'We have been friends for over fifteen years and I would like the next fifteen to be busier. Once Mars College is properly structured, it’s my dream to bring Maurício and people from Providência to the desert for training, and send Martians to Casa Amarela.',
  also: {
    kicker: 'Where to find him',
    title: 'Maurício Hora',
    body: [
      'The unfinished 2020 article, his own photographs, the cultural center he founded with JR, and the project on this site that brought us together.',
    ],
    links: [
      { label: 'The 2020 draft, as a PDF', href: '/downloads/photography-and-ai-2020.pdf', external: true },
      { label: 'His photographs on Flickr', href: 'https://www.flickr.com/photos/mauriciohora', external: true },
      { label: 'Maurício Hora Fotografia', href: 'https://mauriciohora.wordpress.com/', external: true },
      { label: 'Casa Amarela, with JR', href: 'https://www.jr-art.net/news/jr-et-mauricio-hora-photographe-local-et-historien', external: true },
      { label: 'JR', href: 'https://www.jr-art.net/', external: true },
      { label: 'Visible Memories', href: '/threads/visible-memories' },
    ],
  },
};

// ---------------------------------------------------------------------------
// Gérard Quenum & Vanessa Rosa, Le Centre, Cotonou, 2017. Follows the original
// page: the exhibition text by Marion Hamard, the film, then the four parts of
// the show in the order they were hung.
// ---------------------------------------------------------------------------
export const gerardQuenum = {
  slug: 'gerard-quenum',
  kicker: 'Two-person exhibition · 2017',
  title: 'Gérard Quenum & Vanessa Rosa',
  hero: '/images/gq/gq-afro-1.webp',
  heroAlt: 'The Afro-Brésil mural in the sculpture garden at Le Centre, Cotonou.',
  lede:
    'Project developed with the artist Gérard Quenum during an art residency in Cotonou, at Le Centre cultural space, Benin, West Africa.',
  meta: [
    ['Where', 'Le Centre, Cotonou, Benin'],
    ['When', '30 September to 23 November 2017'],
    ['With', 'Gérard Quenum'],
    ['Made during', 'A one-month residency'],
  ],
  intro: [
    'This exhibition is an encounter between two artists with different references and artistic practices.',
    '“Dialogue” is a series of nine paintings, in which Gérard Quenum’s portraits are transformed by the omnipresence of patterns, the mark of Vanessa Rosa’s work. The portraits are repeated, the eyes intersect, only the outfits change. Primarily from Portuguese culture, spotted in the streets of Brazil by the artist, and Adinkra symbols from Ghana, these patterns bring a complexity to these characters. Is it the same person? Who are they?',
    'In a second part of the exhibition site, a documentary space presents the previous works of Vanessa Rosa as well as the different stages of the process of creation of the Afro-Brésil mural. On the occasion of this residency, the artists gifted the sculpture garden by creating a mural. Gérard Quenum’s catalogues are also presented.',
    'Voyage is an installation composed of a pile of recovered dolls. Absorbed, jagged, these dolls symbolize the suffering of the beings who lost their lives trying to cross the seas and oceans. Vanessa Rosa also presents two personal creations, revealing the complexity of her artistic creation.',
    'Text: Marion Hamard.',
  ],
  video: { vimeo: '256508273', caption: 'Exposition Gérard Quenum & Vanessa Rosa.' },
  sections: [
    {
      title: 'Dialogues',
      images: [
        { src: '/images/gq/gq-dial-1.webp' },
        { src: '/images/gq/gq-dial-2.webp' },
        { src: '/images/gq/gq-dial-3.webp' },
        { src: '/images/gq/gq-dial-4.webp' },
        { src: '/images/gq/gq-dial-5.webp' },
        { src: '/images/gq/gq-dial-6.webp' },
        { src: '/images/gq/gq-dial-7.webp' },
      ],
    },
    {
      title: 'Afro-Brésil',
      images: [
        { src: '/images/gq/gq-afro-1.webp' },
        { src: '/images/gq/gq-afro-2.webp' },
        { src: '/images/gq/gq-afro-3.webp' },
        { src: '/images/gq/gq-afro-4.webp' },
      ],
    },
    {
      title: 'Vanessa’s canvas',
      images: [
        { src: '/images/gq/gq-canvas-1.webp' },
        { src: '/images/gq/gq-canvas-2.webp' },
      ],
    },
    {
      title: 'Installation — La Mer',
      images: [{ src: '/images/gq/gq-mer-1.webp' }],
    },
  ],
  also: {
    kicker: 'Where it happened',
    title: 'Le Centre, Cotonou',
    body: [
      'An international residency and cultural space in Benin, run by Dominique Zinkpè. The show and the month that made it are on their site.',
    ],
    links: [
      { label: 'The exhibition at Le Centre', href: 'https://www.lecentre-benin.com/g%C3%A9rard-quenum-vanessa-rosa', external: true },
    ],
  },
};

// ---------------------------------------------------------------------------
// Three shows that used to live only on littlemartians.world. Text and pictures
// follow those pages; they now have a home here too.
// ---------------------------------------------------------------------------
export const christies = {
  slug: 'christies',
  kicker: 'Auction and exhibition · 2025',
  title: 'Augmented Intelligence, Christie’s',
  hero: '/images/ch/ch-02.webp',
  heroAlt:
    'Verdelia, a glazed ceramic head in a brass vitrine, beside her film on a screen at Christie’s.',
  lede:
    'Verdelia, Little Martian, at Christie’s Augmented Intelligence. 20 February to 5 March 2025, at Rockefeller Center, New York.',
  meta: [
    ['Where', 'Christie’s, Rockefeller Center, New York'],
    ['When', '20 February to 5 March 2025'],
    ['Work', 'Verdelia: ceramic sculpture with a film attached'],
    ['Sale', 'Augmented Intelligence'],
  ],
  intro: [
    'Augmented Intelligence was the first auction at a major house dedicated to AI art. It gathered work from early pioneers of the 1960s such as Harold Cohen through to Refik Anadol, Pindar Van Arman, Holly Herndon & Mat Dryhurst, Alexander Reben, Claire Silver, Sasha Stiles and others.',
    'The sale set out to explore human agency in the age of AI: robotics, GANs and interactive work alongside painting, sculpture, print and digital art. The exhibition stayed up at Rockefeller Center for the length of the online sale.',
    'Verdelia went as a physical sculpture with a digital film attached, and was sold.',
  ],
  videos: [
    { title: 'The film', youtube: '5w1JrowPvjo', caption: 'Little Martians at Christie’s Augmented Intelligence.' },
    { title: 'Little Martians & Abraham', youtube: 'yWZLU5njSbk', caption: 'The short film that went with the work.' },
  ],
  sections: [
    {
      title: 'Show documentation',
      gallery: 'slides',
      images: [
        { src: '/images/ch/ch-01.webp', caption: 'Verdelia in the vitrine, with her film behind her' },
        { src: '/images/ch/ch-02.webp', caption: 'The wall at Rockefeller Center' },
        { src: '/images/ch/ch-03.webp', caption: 'The sculpture, close' },
        { src: '/images/ch/ch-04.webp', caption: 'The Codex on the plinth' },
        { src: '/images/ch/ch-05.webp', caption: 'Verdelia' },
        { src: '/images/ch/ch-06.webp', caption: 'The room' },
        { src: '/images/ch/ch-07.webp', caption: 'Glaze under the gallery light' },
      ],
    },
  ],
  // the film that went with the work, and everywhere it has been selected.
  // Read from the festival record, so it cannot fall out of date.
  festivals: {
    title: 'Where Little Martians & Abraham has screened',
    note: 'The short film shown with the sculpture, and its festival record.',
    rows: festivalRows.filter((r) => r.film === 'Little Martians & Abraham'),
  },
  press: {
    title: 'Press about the show',
    groups: [
      {
        title: 'International',
        items: [
          { outlet: 'Euronews', title: 'Christie’s AI art auction sparks controversy amid artist protests', date: '22 February 2025', href: 'https://www.euronews.com/video/2025/02/22/christies-ai-art-auction-sparks-controversy-amid-artist-protests' },
          { outlet: 'Le Parisien', title: '« Du vol » : une première vente d’œuvres créées avec l’intelligence artificielle chez Christie’s très critiquée', date: '21 February 2025', href: 'https://www.leparisien.fr/high-tech/du-vol-une-premiere-vente-doeuvres-creees-avec-lintelligence-artificielle-chez-christies-tres-critiquee-21-02-2025-YGNAPQHZ4BHZBLGBPW5D7YKV64.php' },
          { outlet: 'The Conversation', title: 'Creative progress or mass theft? Why a major AI art auction is provoking wonder – and outrage', href: 'https://theconversation.com/creative-progress-or-mass-theft-why-a-major-ai-art-auction-is-provoking-wonder-and-outrage-250157' },
        ],
      },
      {
        title: 'Brazil',
        items: [
          { outlet: 'Veja', title: 'Artista brasileira inova com obra de IA em leilão de Nova York', date: '22 February 2025', href: 'https://veja.abril.com.br/coluna/veja-gente/artista-brasileira-inova-com-obra-de-ia-em-leilao-de-nova-york/' },
          { outlet: 'Época Negócios', title: 'Artista brasileira Vanessa Rosa participa de primeiro leilão da Christie’s dedicado à arte feita com IA', href: 'https://epocanegocios.globo.com/inteligencia-artificial/noticia/2025/02/artista-brasileira-vanessa-rosa-participa-de-primeiro-leilao-da-christies-dedicado-a-arte-feita-com-ia.ghtml' },
          { outlet: 'Portal Tela', title: 'Artista brasileira brilha em leilão da Christie’s com obra inovadora de inteligência artificial', date: '22 February 2025', href: 'https://www.portaltela.com/entretenimento/arte/2025/02/22/artista-brasileira-brilha-em-leilao-da-christies-com-obra-inovadora-de-inteligencia-artificial' },
        ],
      },
    ],
    more: { label: 'All the press', href: '/info#press' },
  },
  also: {
    kicker: 'The sale',
    title: 'Augmented Intelligence at Christie’s',
    body: ['The lot, on Christie’s own site.'],
    links: [
      { label: 'Christie’s', href: 'https://onlineonly.christies.com/s/augmented-intelligence/vanessa-rosa-b-1990-31/250113', external: true },
    ],
  },
};

export const foresight = {
  slug: 'foresight-buckeburg',
  kicker: 'Exhibition and performance · 2024',
  title: 'Vision Weekend, Schloss Bückeburg',
  hero: '/images/fb/fb-02.webp',
  heroAlt: 'Schloss Bückeburg seen from the park, hedges in front of it.',
  lede: 'Foresight Institute Vision Weekend, Schloss Bückeburg, 2024.',
  meta: [
    ['Where', 'Schloss Bückeburg, Germany'],
    ['When', '2024'],
    ['Host', 'Foresight Institute'],
    ['What', 'Installation and a face-painting performance'],
  ],
  intro: [
    'Foresight Institute’s Vision Weekends are their annual festivals. Held in two countries, over two weekends, people are invited to burst their tech silos and plan for flourishing long-term futures. It is a conference, an unconference, mentorship hours, curated one-to-ones, demos, satellite gatherings, cyberfuture dinners, tea services, costume closets, interactive art, secret dance parties and surprise experiences.',
    'Little Martians were installed in a hundred-year-old castle, for an audience spending the weekend arguing about the long term.',
  ],
  sections: [
    {
      title: 'The installation',
      gallery: 'slides',
      images: [
        { src: '/images/fb/fb-01.webp', caption: 'The salon, with the film and the ceramics' },
        { src: '/images/fb/fb-05.webp', caption: 'The room' },
        { src: '/images/fb/fb-06.webp', caption: 'Through the doorway' },
        { src: '/images/fb/fb-07.webp', caption: 'Visitors' },
        { src: '/images/fb/fb-03.webp', caption: 'Heads under the mirror' },
        { src: '/images/fb/fb-04.webp', caption: 'The cabinet' },
        { src: '/images/fb/fb-08.webp', caption: 'Glaze and gilt' },
        { src: '/images/fb/fb-09.webp', caption: 'The mantelpiece' },
        { src: '/images/fb/fb-10.webp', caption: 'In the gold light' },
        { src: '/images/fb/fb-11.webp', caption: 'And in the pink' },
        { src: '/images/fb/fb-12.webp', caption: 'One of them, close' },
        { src: '/images/fb/fb-13.webp', caption: 'The row' },
      ],
    },
    {
      title: 'Performance: painting people’s faces during the cyberfuture dinner',
      gallery: 'slides',
      images: [
        { src: '/images/fb/fb-14.webp', caption: 'Painting a face' },
        { src: '/images/fb/fb-15.webp', caption: 'Working' },
        { src: '/images/fb/fb-16.webp', caption: 'Finished' },
        { src: '/images/fb/fb-17.webp', caption: 'Finished' },
        { src: '/images/fb/fb-18.webp', caption: 'Finished' },
        { src: '/images/fb/fb-19.webp', caption: 'At the dinner' },
      ],
    },
  ],
  also: {
    kicker: 'The host',
    title: 'Foresight Institute',
    body: ['The institute that runs the Vision Weekends, on long-term flourishing and the technologies that might get us there.'],
    links: [{ label: 'foresight.org', href: 'https://foresight.org/', external: true }],
  },
};

export const immersive = {
  slug: 'immersive-sao-paulo',
  kicker: 'Immersive rooms · 2024 and 2025',
  title: 'Immersive rooms, São Paulo',
  hero: '/images/im/im-01.webp',
  heroAlt: 'A darkened room with Little Martians projected across the walls.',
  lede:
    'Two years running at the Fundação Bienal de São Paulo: projection filling a room, and Brazilian audiences meeting the work at home.',
  meta: [
    ['Where', 'Fundação Bienal de São Paulo'],
    ['When', '2024 and 2025'],
    ['What', 'Projected immersive rooms'],
    ['Events', 'NFT.Brasil, TokenNation Brasil'],
  ],
  intro: [
    'A selection of the shows the Little Martians have been part of in São Paulo, where the work is projected at the scale of a room rather than shown on a screen.',
  ],
  videos: [
    { title: 'Token Nation Brasil, 2025', youtube: 'JJ_Ug1mwCXw', caption: 'The room at Token Nation Brasil.' },
  ],
  sections: [
    {
      title: 'Token Nation Brasil, 2025',
      images: [{ src: '/images/im/im-01.webp' }],
    },
    {
      title: 'NFT Brasil, 2024',
      video: { youtube: 'pH6-xVUhpPQ', caption: 'Kweku, at NFT.Brasil.' },
      images: [{ src: '/images/im/im-02.webp' }],
    },
  ],
};

// ---------------------------------------------------------------------------
// Imaginary Tiles, the solo show at B[x]space in 2017. Follows the original
// page: Marjan Fadavi's statement, then the room.
// ---------------------------------------------------------------------------
export const imaginaryTiles = {
  slug: 'imaginary-tiles',
  kicker: 'Solo exhibition · 2017',
  title: 'Imaginary Tiles',
  hero: '/images/it/it-p1-d1.webp',
  heroAlt: 'Detail of a blue painting: tiled arches opening into a vaulted room.',
  lede: 'Solo exhibition at B[x]space. New York, March to April 2017.',
  meta: [
    ['Where', 'B[x]space, Brooklyn, New York'],
    ['When', 'March to April 2017'],
    ['Statement', 'Marjan Fadavi'],
    ['Media', 'Painting · laser-cut stencil'],
  ],
  intro: [
    'The exhibition statement was written by the Iranian, New York based artist Marjan Fadavi.',
  ],
  quote: {
    lines: [
      'Human beings are members of a whole',
      'In creation of one essence and soul',
      'If one member is afflicted with pain',
      'Other members uneasy will remain',
    ],
    by: 'Saadi Shirazi, 13th century Iran',
  },
  statement: [
    'I never escaped, I came for more being. And I did it. Here in the very city where I am banned from being now, I managed to be more.',
    'I’m no stranger to bans. I know how to play with them. What I was stranger to was that line.',
    'There is a line. It separates the rational from the paradoxical. I soon found myself on the other side. I was the complicated, the paradoxical, the confusing.',
    'But thanks to the line, I found strangers I felt closest with. All similar in our non similarities, according to the line. I studied, protested, worked, cooked, sang and danced with them. They’re all dancing hundreds of bans away every day.',
    'We, the residents of the other side, we the paradoxical, are all busy being now. But my heart is with the other side. It must be lonely there.',
    'Find your paradox, and you’re welcome here.',
  ],
  statementBy: 'Marjan Fadavi, 2017. Iran–US.',
  sections: [
    {
      title: 'The paintings',
      images: [
        { src: '/images/it/it-p1.webp', caption: 'Acrylic and spray on canvas' },
        { src: '/images/it/it-p2.webp', caption: 'The stairway' },
        { src: '/images/it/it-p3.webp', caption: 'Tiles over the skyline' },
        { src: '/images/it/it-p1-d1.webp', caption: 'Detail' },
        { src: '/images/it/it-p1-d3.webp', caption: 'Detail, with the painter’s hand' },
      ],
    },
    {
      title: 'The show',
      gallery: 'slides',
      images: [
        { src: '/images/it/it-01.webp' },
        { src: '/images/it/it-02.webp' },
        { src: '/images/it/it-03.webp' },
        { src: '/images/it/it-04.webp' },
        { src: '/images/it/it-05.webp' },
        { src: '/images/it/it-06.webp' },
        { src: '/images/it/it-07.webp' },
        { src: '/images/it/it-08.webp' },
      ],
    },
  ],
  also: {
    kicker: 'Where it belongs',
    title: 'The Silk Roads',
    body: [
      'Imaginary Tiles sits inside the blue-and-white years: trade routes followed backwards through porcelain and azulejo, and the geometry that travelled with them.',
    ],
    links: [{ label: 'The thread', href: '/threads/the-silk-roads' }],
  },
};

// ---------------------------------------------------------------------------
// MAD — Machine Aided Drawings, 2019 to 2021. Follows the original page: the
// six vases, the frame experiments, and the two sets of references behind them.
// ---------------------------------------------------------------------------
export const mad = {
  slug: 'mad',
  kicker: 'Drawings with a machine · 2019 to 2021',
  title: 'MAD — Machine Aided Drawings',
  hero: '/images/mad/mad-01.webp',
  heroAlt:
    'A pen-plotted drawing of a Qing Chinese vase standing on a tiled floor, inside an illusionary frame.',
  lede: 'Drawings and tiles created in collaboration with a drawing machine.',
  meta: [
    ['When', '2019 to 2021'],
    ['Made with', 'An AxiDraw pen plotter'],
    ['Media', 'Ink on paper'],
    ['Subject', 'A Qing vase, a tiled floor, and the frame around them'],
  ],
  intro: [
    'Six drawings of a Qing Chinese vase on a tiled floor with illusionary frames. They were all made with an AxiDraw, and each one came out different: while the machine worked I moved the paper, or the pen holder, under it.',
    'So the plotter is not a printer here. It holds one half of the drawing and I hold the other, and what lands on the page is whatever the two of us do to each other.',
  ],
  videos: [
    {
      title: 'The machine drawing',
      file: '/video/mad-drawing.mp4',
      poster: '/video/mad-drawing.webp',
      caption: 'The AxiDraw at work, with the paper moving under it.',
      alt: 'A pen plotter drawing a vase while the paper is shifted beneath it.',
    },
  ],
  sections: [
    {
      title: 'The six vases',
      gallery: 'slides',
      images: [
        { src: '/images/mad/mad-01.webp' },
        { src: '/images/mad/mad-02.webp' },
        { src: '/images/mad/mad-03.webp' },
        { src: '/images/mad/mad-05.webp' },
        { src: '/images/mad/mad-06.webp' },
      ],
    },
    {
      title: 'Playing with the image frame and space',
      images: [
        { src: '/images/mad/mad-07.webp' },
        { src: '/images/mad/mad-08.webp' },
      ],
    },
    {
      title: 'Inspired by M. C. Escher, Another World',
      images: [
        { src: '/images/mad/mad-09.webp' },
        { src: '/images/mad/mad-10.webp' },
        { src: '/images/mad/mad-11.webp' },
      ],
    },
    {
      title: 'Inspired by Sebastiano Serlio, Vredeman de Vries and Giovanni Bracelli',
      body: [
        'The mathematisation of visual representation: the moment European drawing decided space could be built out of rules, and the treatises that worked out how.',
      ],
      gallery: 'slides',
      images: [
        { src: '/images/mad/mad-12.webp' },
        { src: '/images/mad/mad-13.webp' },
        { src: '/images/mad/mad-14.webp' },
        { src: '/images/mad/mad-15.webp' },
        { src: '/images/mad/mad-16.webp' },
        { src: '/images/mad/mad-17.webp' },
        { src: '/images/mad/mad-18.webp' },
        { src: '/images/mad/mad-19.webp' },
      ],
    },
  ],
  also: {
    kicker: 'Where it belongs',
    title: 'Ethnomathematics & Ethnocomputing',
    body: [
      'A machine following rules to make an image is the same argument as the Sona drawings and the perspective treatises: geometry as a way of thinking, not a way of measuring.',
    ],
    links: [{ label: 'The thread', href: '/threads/ethnocomputing' }],
  },
};


// ---------------------------------------------------------------------------
// More projects: the smaller pieces that lived on va2rosa.com/Other-projects.
// ---------------------------------------------------------------------------
export const moreProjects = {
  slug: 'more-projects',
  kicker: 'Other work · 2009 to 2012',
  title: 'More projects',
  hero: '/images/op2/samba.webp',
  heroAlt: 'Flags made for the Embaixadores da Alegria samba school parade.',
  lede: 'Smaller pieces, and the ones that do not belong to any of the threads.',
  meta: [
    ['When', '2009 to 2012'],
    ['Where', 'Rio de Janeiro'],
    ['Media', 'Flags · mural · sculpture'],
  ],
  intro: [],
  sections: [
    {
      title: 'Samba Parade — Embaixadores da Alegria',
      body: [
        'Production of flags for a samba school parade, February 2012. Embaixadores da Alegria, the Ambassadors of Joy, is dedicated to promoting the rights of people with disabilities, and many of them parade with the group.',
      ],
      images: [{ src: '/images/op2/samba.webp' }],
    },
    {
      title: 'Artur Fidalgo Gallery',
      body: ['Mural exhibited at Artur Fidalgo Gallery, November 2012.'],
      images: [
        { src: '/images/op2/fidalgo-1.webp' },
        { src: '/images/op2/fidalgo-2.webp' },
        { src: '/images/op2/fidalgo-3.webp' },
      ],
    },
    {
      title: 'Frustrated attempt to escape dilution',
      body: ['Sculpture, 2009.'],
      images: [
        { src: '/images/op2/dilution-1.webp' },
        { src: '/images/op2/dilution-2.webp' },
      ],
    },
  ],
};
