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
    carrier: 'The painted bodies, human scale',
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
      'Sankofa Project. Damião Braga, Quilombo leader. Coordination and research: Vanessa Rosa, Felipe Carvalho. Architecture: Verônica Natividade (PUC). Artists: Joyce Oliveira, Pedro Carneiro, Diego Deus, Thiago Haule, Vitor Vanes. Architecture students: Camila Rodriguez, Eduardo Romano, Marcos Chaves, Rafael Magioli. Producer: Monica Combatente. Filming and documentation: Pajé Produções. Production support: Zona Imaginária.',
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
    carrier: 'A shared studio, learning about favelas and community',
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
    places: 'Lisbon · Munich · New York · Red Hook · Rio · Porto · Salvador',
    status: 'Concluded, 2020',
    carrier: 'Following the blue and white tiles',
    media: 'Acrylic, spray, laser-cut stencil, projection',
    related: ['ethnocomputing', 'same-putumi'],
    lede:
      'A personal account on the development of an artistic research.',
    thesis:
      'To talk about world history is to deal with this network: domination, reinvention, appropriation, destruction, resistance, combination, influence, creation.',

    // The essay, as published on Medium, with the work set into it.
    story: [
      {
        title: 'Azulejos…',
        body: [
          'In downtown Rio de Janeiro there are many blue and white tiles over old buildings, which we call Portuguese “azulejos”. For a long time, I thought all “azulejos” should be blue and white, or at least a little blue, because after all, “azulejos” has the Portuguese word for blue as part of its linguistic root. Like many of my fellow countrymen, I found most of the recent ordinary architecture terribly uglier than the ancient one, hence the tiles represented a certain nostalgia.',
          'Painting on the streets in Rio de Janeiro, and in much of Latin America, have something really free to it. It can be extremely dangerous, public spaces often feel like nobody’s land, but more often than not, if you talk nicely and get to know the people around you, painting on the street means spending long hours during the day working in front of a small crowd of passers-by, with coffee served by the corner resident and probably a good conversation. Someone will stop to tell you about their own life while watching you paint. Unlikely encounters happen and there is beautiful potential for discoveries about the other worlds hidden within our city — if one is open to listen.',
        ],
        video: { vimeo: '195309979', caption: 'Azulejos Imaginários. The reel for the series.' },
      },
      {
        title: 'The stencils',
        body: [
          'Back in 2011, I saw an artist decorating the background of her mural with a small stencil that mimicked an azulejo. I began to imagine paintings made of stencil-like tiles, but distorted with volume because I never liked flat shapes. My paintings always used a slightly watery or sprinkled technique, I like dissolving forms, a rather ghostly dynamic reality, which hides something else, which could be something else. I wanted to create fake spaces, simply because I had always loved perspective drawings, as much as I love history. I felt that the tiles were a beautiful element of the city, something that could be reinterpreted over the dull generic contemporary architecture. But I never had the patience to cut stencils, and for the level of detail I wanted, doing it by hand would be crazy.',
          'I discovered the laser cutting technique in 2013 in Berlin, but only started using it in 2015 in New York and Lisbon. Since I understood that I could not only work remotely but also pursue projects anywhere on the globe, I had a hard time maintaining a monogamous relationship with a city. The last few years, I have been jumping between art residencies and other alternative projects. I have often been to the US and Europe, but also to Acre, Chile, Paraguay, Benin, Thailand, China, always due to a network of artists, thinkers and organisations that liked my work, or those I admired and had the initiative of introducing myself. I love Rio but I’m not faithful, even if I could never stay away for a whole year. I always come back. I hope.',
        ],
        images: [
          { src: '/images/sr2/laser-1.webp', caption: 'One of the first laser-cut stencils' },
          { src: '/images/sr2/laser-2.webp' },
          { src: '/images/sr2/porto-1.webp', caption: 'Porto, northern Portugal, 2015' },
        ],
      },
      {
        title: 'Where the blue comes from',
        body: [
          'People in New York looked at my tile-like paintings and asked me about Moorish art, about Morocco, if I was Muslim. And that made a lot of sense, because Portugal never ceased to be kinda Moorish. Researching the history of azulejos, we find that King Manuel fell in love with the ceramics and interior decorations of Islamic Spain in the late 15th century, so he decided to do something similar in his Sintra based palace. Ancient Portugal has a huge aesthetic affinity with the Islamic world. The word “azulejo” has its origin in the Arabic azzelij and meant small polished stone. Therefore, “azulejo” has nothing to do with the Portuguese word for blue, “azul”, though it looks so much like it does.',
          'As for the blue and white, it comes from Chinese influence, and the Portuguese were not even the first to master this ceramics technique in Europe; the Germans and then the Dutch were. China imported cobalt oxide from Persia, a pigment known and used by many groups for different products since antiquity. Such material had far more accurate and intense colour results on ceramics than others. I always like to think about the evolution around the technique of doing things: often symbolism is created on material limitations. It was not necessarily the love for blue that spread this kind of production, at least in its beginning. From China, the taste for blue and white porcelain spread all over Asia — or maybe it didn’t really start with China. Sometimes it’s difficult to know who was who, who started what, why things moved in a certain direction.',
        ],
      },
      {
        title: 'Funtunfunefu Denkyemfunefu',
        body: [
          'The most powerful symbol I have ever seen about humanity, about the relationship between groups, is the Adinkra pictogram from Ashanti culture, part of present-day Ghana, called Funtunfunefu Denkyemfunefu. It depicts two siamese crocodiles who share the same stomach and yet fight each other over food. A symbol about the difficulties of democracy, or the need for unity beyond our many borders.',
          'These are not simple relationships, these cultural exchanges. They are not peaceful. To talk about world history is to deal with this network: domination, reinvention, appropriation, destruction, resistance, combination, influence, creation. And deal with our personal position in the midst of it all. Our innumerable internal contradictions. What is not missing at all in this process are doubts. It is really important to learn how to breathe.',
        ],
      },
      {
        title: 'The Blue Wall Project, Lisbon, 2015',
        body: [
          'My tiles paintings have turned into this series that I call “Silk Roads”, named after historian Peter Frankopan’s book on world history, which focuses on Central Asia. In the first painting of the series I paid a tribute to Dr. Nise da Silveira, because the organisation that invited me to paint a psychiatric hospital in Lisbon, the Urban Art Gallery, asked for a face in the composition — and Nise, a great Brazilian doctor who developed the art therapy field and fought for the recognition of schizophrenic artists, seemed to me clearly the best option.',
          'From GAU, Galeria de Arte Urbana da Câmara Municipal de Lisboa. Most of the photographs are by José Vicente.',
        ],
        video: { youtube: 'O6a29zJ0Gu4', caption: 'The Blue Wall Project, Lisbon.' },
        gallery: 'slides',
        images: [
          { src: '/images/sr2/blue-1.webp' },
          { src: '/images/sr2/blue-2.webp' },
          { src: '/images/sr2/blue-3.webp' },
          { src: '/images/sr2/blue-4.webp' },
          { src: '/images/sr2/blue-5.webp' },
          { src: '/images/sr2/blue-6.webp' },
          { src: '/images/sr2/blue-7.webp' },
          { src: '/images/sr2/blue-8.webp' },
        ],
      },
      {
        title: 'Rio de Janeiro, Botafogo, 2015',
        body: ['Back in Rio, I tried to mix the tiles with my paintings about the daily life of the city.'],
        gallery: 'slides',
        images: [
          { src: '/images/sr2/rio-1.webp' },
          { src: '/images/sr2/rio-2.webp' },
          { src: '/images/sr2/rio-3.webp' },
          { src: '/images/sr2/rio-4.webp' },
          { src: '/images/sr2/rio-5.webp' },
        ],
      },
      {
        title: 'New York, 2015 and 2016',
        body: [
          'Painted at Arts Orgs and Local Projects Gallery in Queens, and at the Living Gallery and Little Skips coffee shop in Brooklyn.',
        ],
        gallery: 'slides',
        images: [
          { src: '/images/sr2/ny-1.webp' },
          { src: '/images/sr2/ny-2.webp' },
          { src: '/images/sr2/ny-3.webp' },
          { src: '/images/sr2/ny-4.webp' },
          { src: '/images/sr2/ny-5.webp' },
        ],
      },
      {
        title: 'Falha de Diálogo — Choque Festival, São Paulo, 2016',
        body: [
          'In November 2016, the same week Trump won the American presidency, a project called Choque Festival brought street art to the headquarters of a São Paulo military police squad — the Tropa de Choque. I had been told it would be a politically engaged festival, raising police violence in Brazil, and I had worked with the producer before, so I went.',
          'I first thought about making a work about violence and the need for empathy: maybe if our police had a bit more empathy for the people they are meant to protect, they would kill less. But when I understood how the event was actually being run, I stopped painting, urged other artists to drop out by telling them what I was seeing, and went back to the police headquarters to paint over my own work and film the process.',
          'That erasure gave the piece a new meaning. Dialogue, however necessary, is not easy. At Choque Festival, whatever the original intent, there was not enough of it. Of the fifteen announced artists, six finished their murals.',
        ],
        gallery: 'slides',
        images: [
          { src: '/images/choque/choque-1.webp', caption: 'The corridor, painted' },
          {
            src: '/images/choque/choque-2.webp',
            caption:
              'Writing over it: “Este corredor já foi mosteiro, trincheira, prisão, escola de aperfeiçoamento, sede de tropa de elite.” This corridor has already been a monastery, a trench, a prison, a training school, and the headquarters of an elite squad.',
          },
          { src: '/images/choque/choque-3.webp', caption: 'And then painted out' },
        ],
        more: {
          label: 'What happened, written for Vandalog',
          href: 'https://blog.vandalog.com/2016/12/21/choque-festival-street-art-or-just-marketing/',
        },
      },
      {
        title: 'Muro Art Festival, Lisbon, 2016',
        body: [
          'Invited by the curator Ana Vilar Bravo. Photographs by José Vicente and Bruno da Cunha, both of GAU — CAM Lisboa.',
        ],
        gallery: 'slides',
        images: [
          { src: '/images/sr2/muro-1.webp' },
          { src: '/images/sr2/muro-2.webp' },
          { src: '/images/sr2/muro-3.webp' },
          { src: '/images/sr2/muro-4.webp' },
        ],
      },
      {
        title: 'Stroke Art Fair, Munich, 2016',
        gallery: 'slides',
        images: [
          { src: '/images/sr2/munich-1.webp' },
          { src: '/images/sr2/munich-2.webp' },
          { src: '/images/sr2/munich-3.webp' },
        ],
      },
      {
        title: 'A workshop at MAM Bahia, 2015',
        body: ['Made during a LIBRE gathering, the independent publishers’ association of Brazil, at the Museum of Modern Art in Salvador.'],
        images: [
          { src: '/images/sr2/mam-1.webp' },
          { src: '/images/sr2/mam-2.webp' },
        ],
      },
      {
        title: 'New York, 2017',
        body: [
          'In NYC 2017, during the AnnexB residency, with Islamophobia growing and people being barred from entering the US, I did a solo show in which I combined the tiles with Islamic art and invited an Iranian friend, Marjan Fadavi, to write the text for the exhibition.',
        ],
        more: { label: 'Imaginary Tiles, the solo show', href: '/imaginary-tiles' },
      },
      {
        title: 'Then the machines',
        body: [
          'Then I applied for a scholarship at NYU’s Interactive Technology Program and started using projection mapping on paintings, as well as going deeper in my studies on algorithmic design and ethnomathematics. Such research became a show with an immersive interactive installation at Babycastles in Manhattan, so I invited Wenqi Li to develop the project with me, alongside Verônica Natividade, with whom I was already talking about algorithmic design pedagogical methodologies that included world references, especially fractal design in Africa.',
          'In the midst of this whirlwind, I got invited to do a huge mural project for Pioneer Works — it was such a pleasure to be able to give my tiles paintings a much larger canvas.',
        ],
        more: { label: 'The Infinity Game', href: '/infinity-game' },
      },
      {
        title: 'The technique itself',
        body: [
          'It’s also a pleasure to develop the technique itself. I always loved to draw, I spent years studying oil painting, live model, then muralism, but laser cutting brought other possibilities for painting. I started designing the stencils to give the impression of perspective, then I combined them in countless ways so that I could fool people’s eyes into creating perspectives that are much deeper and more dynamic than the stencil shapes. Another technique that helps with the depth effect is the shading: the many patterns are too much information to process, and this allows light and shadow to guide the composition.',
          'I became fascinated with the possibilities of computer aided design. Working with patterns inspired me to study the history of algorithmic design. Which brings us to another whole debate about ethnomathematics and generative art: how art based on clear rules of composition, such as geometric patterns, has been produced by cultural groups around the world for millennia. For many in the Islamic world, and in some ways also for the Brazilian indigenous Huni Kuin I have known, figurative images are illusive, so to represent the harmony and beauty of the divine we must turn to patterns. It is striking to realise the complexity that these art practices have achieved — for example, the similarity between some Islamic compositions and the atomic structures of quasi-crystals.',
        ],
        more: { label: 'The ethnomathematics thread', href: '/threads/ethnocomputing' },
      },
      {
        title: 'On canvas and on paper',
        body: [
          'The same stencils, off the wall: canvases, works on paper and prints, where the perspective can be built slowly instead of at the speed of the weather.',
        ],
        gallery: 'slides',
        images: [
          { src: '/images/srcanvas/canvas-1.webp', caption: 'Shown at Context Art Fair, 2017' },
          { src: '/images/srcanvas/canvas-2.webp', caption: 'An arch, built out of tiles' },
          { src: '/images/srcanvas/canvas-3.webp', caption: 'Azulejos, entrance, 2015' },
          { src: '/images/srcanvas/canvas-4.webp', caption: 'On paper' },
          { src: '/images/srcanvas/canvas-5.webp', caption: 'The print made for Stroke, Munich' },
          { src: '/images/srcanvas/studio-1.webp', caption: 'In the studio, 2017' },
        ],
      },
      {
        title: 'Diana',
        body: [
          'The work is also very personal. I had had in mind painting tiles since 2011, but I only started doing it in 2015, after the most important person in my life, my sister, died suddenly. She was a programmer, but she also drew, sang, we learned to paint together, and my childhood dream was to develop a comic book series with her. I think much of my latest interest in new technologies is related to Diana’s life as a programmer, this strange world which I scorned and understood next to nothing.',
          'Painting in shades of blue, thinking of passages, portals, looking at temples around the world for inspiration, has also become part of my process of accepting our mortality, of restructuring when something so fundamental is simply no longer there. And the work also brought new paths by itself: when we paint on the street the paintings take a life far beyond what could be controlled, so the biggest work I did in this series, the one at Pioneer Works, was taken over by the garden plants. Life simply finds its way, bursts into the midst of this melancholic blue, a blue that thinks about the history of mankind, smiles and weeps.',
        ],
        more: { label: 'The Pioneer Works fence', href: '/pioneer-works' },
      },
      {
        title: 'History as a kind of spirituality',
        body: [
          'For me, to think of history and philosophy is as close to spirituality as I have. It’s about being part of a process, history as human collective intelligence. Even if chaotic and to some extent cyclical. It’s about not creating alone. How we are a continuity of each other, a continuity of nature, of the world, even if we create barriers.',
          'Trying to understand how things are built, to understand even the one that hurts me, gives me some relief from the distressing situation of the current moment. It helps me to have the lightness to think of alternatives — calm down, the world was once different and could change again — to think about human exchanges, their joys, pains and violence as part of a process that I can’t really understand, it is far too complex, but I can at least admire and try to contribute by creating images with what I was able to see. It is an internal need, it calms me and helps me to look with some distance, to have some hope. It is a pleasure to be able to be enchanted by the world, even with its pains, and to return something that I believe has a good energy, a good contribution for others.',
        ],
      },
    ],

    strands: [],
    exhibited: [
      { years: '2015', text: 'The Blue Wall Project, GAU and the Lisbon Municipality' },
      { years: '2015', text: 'Paintings in Botafogo, Rio de Janeiro' },
      { years: '2015', text: 'Workshop at MAM Bahia, during a LIBRE gathering, Salvador' },
      { years: '2015–2016', text: 'Paintings in Queens and Brooklyn, New York' },
      { years: '2016', text: 'Falha de Diálogo, Choque Festival, São Paulo. Participated, then withdrew and erased the work' },
      { years: '2016', text: 'Muro Art Festival, Lisbon, curated by Ana Vilar Bravo' },
      { years: '2016', text: 'Stroke Art Fair, Munich' },
      { years: '2017', text: 'Imaginary Tiles, solo exhibition at B[x]space, New York' },
      { years: '2017', text: 'The Infinity Game, Babycastles, New York' },
      { years: '2017', text: 'The perimeter mural at Pioneer Works, Red Hook, Brooklyn' },
    ],
    reading: [
      'Frankopan, Peter. <em>The Silk Roads: A New History of the World</em>. Bloomsbury, 2015.',
    ],
    credits:
      'Photographs by José Vicente and Bruno da Cunha (GAU — CAM Lisboa). The Blue Wall Project for GAU, Galeria de Arte Urbana da Câmara Municipal de Lisboa. Muro Art Festival curated by Ana Vilar Bravo. The Infinity Game with Wenqi Li and Verônica Natividade.',
    external: 'https://va2rosa.medium.com/the-silk-roads-bdc0618b9f8',
    gallery: [],
    hero: '/images/sr2/blue-3.webp',
    heroAlt: 'A blue-and-white tiled wall painted with laser-cut stencils, Lisbon.',
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
    places: 'Rio de Janeiro · São Paulo · New York · Upper Envira · Mars',
    status: 'Ongoing',
    carrier: 'The pattern, and the rule that makes it',
    media: 'Laser-cut stencil · parametric design · painting · installation · writing',
    related: ['the-silk-roads', 'same-putumi', 'little-martians'],
    summary: [
      'A weave is a program. It has a grammar, a compiler and a lineage of engineers, and almost none of them appear in any history of computing.',
      'The research runs from Islamic sacred geometry and African fractals through a master’s dissertation to a Little Martian who is a pattern rather than a body.',
    ],
    lede: 'From the Silk Roads tiles to a trickster living in the lava tubes of Mars.',
    thesis: 'In love with patterns.',

    story: [
      {
        title: 'Where it started',
        body: [
          'This research evolved while I was creating the Silk Roads paintings. I was designing stencils for computer aided design and manufacture, spending my time with laser cutters in hackerspaces, discussing poetic computation and algorithmic art. As a historian, I was intrigued to realise that the generative art my coder friends loved had a long lineage in art history, a lineage barely mentioned in mainstream art history.',
          'Starting from tiles and Islamic sacred geometry, I eventually learned about Ron Eglash’s research on African Fractals. This was my opening into the world of ethnomathematics, and the core inspiration for the research sustaining the Sankofa Project during the Rio de Janeiro 2016 Olympic Games.',
        ],
        more: { label: 'The Silk Roads', href: '/threads/the-silk-roads' },
      },
      {
        title: 'The Sankofa Project, 2016',
        body: [
          'I have written quite a bit about that experience, including a report presented at an academic conference during my master’s at Anhembi Morumbi.',
        ],
        video: { youtube: '2kS57onacbM', caption: 'The Sankofa Project, filmed by eNCA, South Africa.' },
        gallery: 'slides',
        images: [
          { src: '/images/vm/p2016-wall.webp', caption: 'The finished wall, Pedra do Sal, 2016' },
          { src: '/images/vm/p2016-panels.webp', caption: 'Adinkra symbols and parametric stencil patterns' },
          { src: '/images/vm/p2016-grasshopper.webp', caption: 'Yoruba and Adinkra patterns described as parametric code in Grasshopper, and cut as stencils' },
          { src: '/images/vm/p2016-stencil.webp', caption: 'Spraying through a laser-cut stencil' },
          { src: '/images/vm/p2016-panel-joyce.webp', caption: 'One of the painted panels' },
          { src: '/images/vm/p2016-stencils.webp', caption: 'The stencil making process' },
        ],
        links: [
          { label: 'The report', href: 'https://drive.google.com/file/d/195pFG3AxN8oD_IBrDUfwdBE56oC81tzm/view?usp=sharing' },
          { label: 'The whole project', href: '/threads/visible-memories' },
        ],
      },
      {
        title: 'Paulus Gerdes',
        body: [
          'Later on I discovered Paulus Gerdes’ research, and he became another main influence. A Dutch mathematician who became Mozambican, he took up ethnomathematics because after independence nobody wanted to teach maths: it felt like the coloniser’s property. He went looking for it in markets and basket weaves and in the Cokwe sona, the monolinear sand drawings from Angola.',
          'One of them tells the story of a chicken escaping a hunter by zigzagging at changing frequencies, drawn as a single continuous line. By the end of Gerdes’s explanation it is a matrix system, and then a set of circulant matrices he built himself from the same logic.',
          'A weave is a program. It has a grammar, a compiler and a lineage of engineers, and none of them appear in any history of computing.',
        ],
        images: [
          { src: '/images/ecx/sona.webp', caption: 'A Cokwe sona: the chicken and the hunter, drawn as one continuous line' },
        ],
        more: {
          label: 'An article written after Gerdes',
          href: 'https://va2rosa.medium.com/art-ethnomathematics-and-the-digital-era-4bc30b0bf634',
        },
      },
      {
        title: 'Dialogues, with Gérard Quenum, 2017',
        body: [
          'A month at Le Centre in Cotonou, Benin, working with the sculptor Gérard Quenum. What came out of it was a series of nine paintings in which his portraits are overrun by pattern: azulejo motifs of Portuguese descent that I had been collecting off Brazilian walls, and Adinkra symbols from Ghana, laid over the same face again and again. The portrait repeats, the eyes meet, only the cloth changes. Is it the same person?',
          'It was the first time I put the research to work on somebody else’s images rather than my own, and the first time the patterns crossed the Atlantic in the direction they had originally come from.',
        ],
        gallery: 'slides',
        images: [
          { src: '/images/gq/gq-dial-1.webp', caption: 'From the Dialogues series, 2017' },
          { src: '/images/gq/gq-dial-3.webp' },
          { src: '/images/gq/gq-dial-5.webp' },
          { src: '/images/gq/gq-dial-7.webp' },
          { src: '/images/gq/gq-afro-1.webp', caption: 'Afro-Brésil, painted in the sculpture garden at Le Centre' },
        ],
        more: { label: 'The whole exhibition', href: '/gerard-quenum' },
      },
      {
        title: 'Ethnocomputing Experiments, with Wenqi Li',
        body: [
          'Chokwe sona patterns redrawn in Processing along the heritage algorithm that produced them, projected over a painting built from Vredeman de Vries’ seventeenth-century treatise on linear perspective. Two mathematical ways of handling a line, put in one room.',
        ],
        gallery: 'slides',
        images: [
          { src: '/images/ecx/night-1.webp', caption: 'Ethnocomputing Experiments, Pioneer Works, Brooklyn, 2018' },
          { src: '/images/ecx/night-2.webp' },
          { src: '/images/ecx/night-3.webp' },
          { src: '/images/ecx/night-4.webp' },
          { src: '/images/ecx/vries.webp', caption: 'The painting is built from Vredeman de Vries’ 1604 treatise on linear perspective' },
          { src: '/images/ecx/detail-1.webp', caption: 'The sona line, drawn in Processing along the algorithm that produced it' },
          { src: '/images/ecx/detail-2.webp' },
          { src: '/images/ecx/detail-3.webp' },
          { src: '/images/ecx/day-1.webp', caption: 'The same room in daylight' },
          { src: '/images/ecx/open-1.webp', caption: 'Opening night' },
          { src: '/images/ecx/open-2.webp' },
          { src: '/images/ecx/open-3.webp' },
          { src: '/images/ecx/artists.webp', caption: 'With Wenqi Li' },
        ],
        more: { label: 'The whole project', href: '/ethnocomputing-experiments' },
      },
      {
        title: 'The dissertation, 2018',
        body: [
          'Art, Design and Mathematics: Images, Algorithms and Cultural Diversity. Arte, Design e Matemática: Imagens, Algoritmos e Diversidade Cultural. Master’s dissertation, Universidade Anhembi Morumbi, Master’s in Design, Art and Technology, São Paulo. Advisor: Prof. Gilbertto Prado. Examining board: Prof. Hermes Renato Hildebrand (PUC-SP) and Prof. Priscila Almeida Cunha Arantes (UAM). 152 pages, 58 figures.',
          'This dissertation discusses the issue of algorithms mainly from their characteristics as a representational model: in other words, as a tool to create images. It is an artist-oriented approach, how it is possible to express oneself through algorithms, but also designer-oriented, how one can project with them.',
          'First, we try to understand the specificity of algorithmic images within the history of representation, why they mean a paradigm shift in relation to previous representational models, their place within the congruence of art history, or rather history of images, with the history of science. Second, it is assumed that it is essential to discuss trends in imagery and technology development through an approach that focuses on cultural diversity, considering such an approach a political necessity to comment on and, as far as possible, influence the changes that are occurring globally.',
          'Therefore a combination of several fields of knowledge, articulated around concepts such as representational models, algorithms, the mathematization of the world and cultural diversity, are presented. The research is also based on empirical experience, narrated in the second section of the last chapter with a case study. This research hopes to contribute to the expansion of studies on design and on algorithmic processes of image and object creation that are based on a broad and multicultural view of mathematics. This is an ethical and historical contribution to such studies.',
        ],
        images: [
          {
            src: '/images/work/dissertation-cover.webp',
            caption: 'Arte, Design e Matemática: Imagens, Algoritmos e Diversidade Cultural. Universidade Anhembi Morumbi, São Paulo, 2018.',
          },
        ],
        links: [
          { label: 'English translation (PDF)', href: 'https://drive.google.com/file/d/1JBe3nzAK2dq1o9Wzw5iDniZyysNzjDyU/view' },
          { label: 'Portuguese original (PDF)', href: 'https://drive.google.com/file/d/1Ec1ShXBwnn4YG547WjyV5j6YPMXKOX_D/view' },
        ],
      },
      {
        title: 'Same Putumi',
        body: [
          'In 2018 I spent a month with Same Putumi on the upper Envira river in Acre. What brought us together was a love of patterns. For the Huni Kuin, geometric design is sacred and completely ordinary at once; they love to add patterns to everything they can.',
        ],
        images: [{ src: '/images/same/hero.webp', caption: 'A Huni Kuin pattern cast by sunlight through a laser-cut stencil' }],
        more: { label: 'The collaboration', href: '/threads/same-putumi' },
      },
      {
        title: 'Then latent space',
        body: [
          'Linear perspective is about six hundred years old. Computer-aided design is about sixty. Latent space is barely ten, and it belongs to the same family. A diffusion model holds a space of relations where every image is a position. It is fascinating to try to understand how these models encode reality, how they connect structures of meaning beneath every human language and beyond, changing our understanding of ourselves.',
        ],
        video: { youtube: 'fw0CK_r0B9k', caption: 'StyleGAN2 Sacred Spaces.' },
        more: { label: 'Copyright Storm: authorship in the age of AI', href: 'https://va2rosa.medium.com/copyright-storm-authorship-in-the-age-of-ai-baba554aa617' },
      },
      {
        title: 'Kweku',
        body: [
          'For years this lived in a dissertation, some murals and an installation. Then Kweku showed up. One of my characters, a Little Martian, is distributed as a fractal pattern of bacterial mats and AI substrate through eight hundred kilometres of lava tubes under Tharsis. Any single stretch of tunnel is a fragment of Kweku. The face they project when talking to a human dissolves when the conversation ends.',
          'Kweku is the pattern, not the matter, and Kweku is a trickster with a bugbot companion called Data, whom they once taught a single pattern without a stop condition, which is how Verdelis’s irises turned into broccoli.',
          '“Step right up, humans! I am Kweku, the Little Martian, live from the lava caves of Mars, on a mission of cosmic importance, to share a secret that could totally save your planet!”',
          'Kweku doesn’t explain themself. They are happy to be misunderstood for a while, because they know the listener will catch up if the pattern is good enough.',
          'Kweku is still a character in development. I have been feeding him my ethnomathematics research, and I plan to make more pattern based art and educational projects with him.',
        ],
        video: { youtube: 'JJ_Ug1mwCXw', caption: 'The immersive show.' },
        images: [{ src: '/images/vbooks/kweku.webp', caption: 'O Segredo de Kweku' }],
      },
    ],

    strands: [],
    exhibited: [
      { years: '2016', text: 'The Sankofa Project, Quilombo of Pedra do Sal, during the Olympic Games' },
      { years: '2017', text: 'The Infinity Game, Babycastles, New York, with Wenqi Li and Verônica Natividade' },
      { years: '2017', text: 'Dialogues, two-person exhibition with Gérard Quenum, Le Centre, Cotonou, Benin' },
      { years: '2018', text: 'Ethnocomputing Experiments, Pioneer Works, Brooklyn, with Wenqi Li' },
      { years: '2018', text: 'Master’s dissertation, Universidade Anhembi Morumbi, São Paulo' },
      { years: '2018–2019', text: 'The collaboration with Same Putumi, upper Envira river, Acre' },
      { years: '2025–present', text: 'Kweku, a Little Martian made of pattern' },
    ],
    reading: [
      'Eglash, Ron. <em>African Fractals: Modern Computing and Indigenous Design</em>. Rutgers UP, 1999.',
      'Gerdes, Paulus. <em>Geometry from Africa</em>, and <em>Da etnomatemática a arte-design e matrizes cíclicas</em>.',
    ],
    credits:
      'Dialogues with Gérard Quenum. Ethnocomputing Experiments and The Infinity Game with Wenqi Li; The Infinity Game also with Verônica Natividade. The Sankofa Project with Damião Braga, Felipe Carvalho and Verônica Natividade. Same Putumi, co-author of everything on the Envira.',
    gallery: [],
    hero: '/images/work/ethnocomputing-hero-symbol.webp',
    heroAlt: 'Layered stencilled patterns in red and grey with a black Adinkra symbol at the centre: the cover of the dissertation.',
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
    carrier: 'Life in the Amazon rainforest',
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
    carrier: 'Building a community, from scratch, every year',
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
    hasPage: false,
    href: '/threads/little-martians', // its own page
    title: 'Little Martians',
    years: '2020–present',
    start: 2020, end: null,
    state: 'ongoing',
    collection: 'worlds',
    places: 'Bombay Beach · São Paulo · elsewhere',
    status: 'Ongoing',
    carrier: 'Future species communicates with our present',
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
    carrier: 'Learning to see and to be present',
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
    carrier: 'Magical objects',
    underlay: true,
  },
];
