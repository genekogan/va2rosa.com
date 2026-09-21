// ---------------------------------------------------------------------------
// The Little Martians page. The world has its own site; this is the way in
// from here, and the place where the record lives.
//
// Almost nothing is duplicated: the films come from films.js, the Codex from
// books.js, the shows from works.js, and the record from cv.js and press.js.
// What is written here is only what is not written anywhere else.
// ---------------------------------------------------------------------------

export const lm = {
  intro: [
    'Little Martians began as clay. Every character starts as a ceramic head I shape and glaze by hand, then 3-D scan and hand over to generative models. Nothing is generated from nothing: the model is given a body that already existed, and the body keeps the marks of having been made.',
    'They are future beings, descended from all of Earth’s lifeforms, tending the extreme worlds and keeping our biological and cultural memory inside a vast network of simulations called the Imaginarium. Verdelis is part plant. Mycos is a fungal mind. Kweku is a pattern distributed through eight hundred kilometres of lava tube. They claim to have made our reality, and one of them would like to apologise for it.',
    'The project has run since 2020, and it is how I test every tool as it arrives: ceramics, photogrammetry, diffusion models, language models, agents. It has become films, books, installations, an auction lot at Christie’s, an on-chain collection and a season of episodes in production.',
  ],
  links: [
    { label: 'Enter littlemartians.world', href: 'https://littlemartians.world', external: true },
    { label: 'The Substack', href: 'https://littlemartians.substack.com/', external: true },
  ],

  // The films are the loudest part of the project, so they open the page.
  films: {
    kicker: 'Watch',
    title: 'The films',
    body: [
      'The films are where the clay learns to move. They have travelled some fifty festivals across four continents, and taken a couple of dozen prizes along the way, including Best Female Director for a Super Short at Cannes World Film Festival.',
      'Three of them are below. The rest, with every festival and every prize, are on the screenings page.',
    ],
    featured: ['WmdZ04y0ufI', '1BJsrK_8AdI', 'yWZLU5njSbk'],
    href: '/film-festivals',
    hrefLabel: 'All the films, and everywhere they have been',
  },

  // Three shows written out properly. The rest are the grid underneath.
  shows: [
    {
      title: 'Augmented Intelligence, Christie’s',
      where: 'Rockefeller Center, New York · 20 February to 5 March 2025',
      body: [
        'Verdelia went to the first auction at a major house dedicated entirely to AI art. She was sold as a physical ceramic sculpture with the film attached to it, which is the whole argument of the project in one lot: the object is not a by-product of the animation, and the animation is not a substitute for the object.',
      ],
      href: '/christies',
      images: [
        { src: '/images/ch/ch-02.webp', caption: 'Verdelia at Christie’s, Rockefeller Center' },
        { src: '/images/ch/ch-01.webp' },
        { src: '/images/ch/ch-03.webp' },
        { src: '/images/ch/ch-04.webp' },
        { src: '/images/ch/ch-05.webp' },
        { src: '/images/ch/ch-06.webp' },
        { src: '/images/ch/ch-07.webp' },
      ],
    },
    {
      title: 'Vision Weekend, Foresight Institute',
      where: 'Schloss Bückeburg, Germany · 2024',
      body: [
        'Little Martians installed inside a castle, for an audience that spends its weekends arguing about the long-term future. It was the right room for a species that exists to make a point about what survives. Over the cyberfuture dinner I painted the guests’ faces.',
      ],
      href: '/foresight-buckeburg',
      images: [
        { src: '/images/fb/fb-02.webp', caption: 'The installation at Schloss Bückeburg' },
        { src: '/images/fb/fb-03.webp' },
        { src: '/images/fb/fb-05.webp' },
        { src: '/images/fb/fb-07.webp' },
        { src: '/images/fb/fb-09.webp' },
        { src: '/images/fb/fb-13.webp' },
        { src: '/images/fb/fb-15.webp', caption: 'Painting faces during the cyberfuture dinner' },
        { src: '/images/fb/fb-17.webp' },
      ],
    },
    {
      title: 'Immersive rooms, São Paulo',
      where: 'Fundação Bienal de São Paulo · 2024 and 2025',
      body: [
        'Two years running at the Bienal foundation: NFT.Brasil in 2024, TokenNation Brasil in 2025. Projection filling a whole room, and, more importantly, Brazilian audiences meeting the work at home rather than reading about it from abroad.',
      ],
      href: '/immersive-sao-paulo',
      video: { youtube: 'JJ_Ug1mwCXw', caption: 'The immersive room in São Paulo.' },
      images: [
        { src: '/images/im/im-01.webp', caption: 'Token Nation Brasil, 2025' },
        { src: '/images/im/im-02.webp', caption: 'NFT Brasil, 2024' },
      ],
    },
  ],

  // Two shows that had no physical room at all.
  metaverse: {
    kicker: 'And two worlds with no room',
    title: 'The Arium metaverses',
    body: [
      'Twice I built the Little Martians a world to be visited rather than a wall to be hung on, both on the Arium platform. The first went up in 2022. The second, in 2023, was made for Pupila Dilatada 3, a metaverse art show I had also taken part in back in 2021.',
      'A browser, a set of coordinates, and other visitors moving around the same space at the same time. For a species that keeps Earth’s memory inside a network of simulations, a room you walk into through a URL is not a gimmick. It is the closest thing to the Imaginarium I can actually build.',
    ],
  },

  // The on-chain collection, which is a publication rather than a show.
  onchain: {
    kicker: 'And on chain',
    title: 'The on-chain SVG Little Martians',
    body: [
      'In 2022 the Little Martians were written into a collection that lives entirely on chain: every character drawn as an SVG stored in the contract itself, with no server and no image file anywhere. Simon de la Rouviere of Untitled Frontier wrote up how it was put together.',
    ],
    links: [
      {
        label: 'Crafting the on-chain SVG Little Martians',
        href: 'https://www.untitledfrontier.studio/blog/crafting-the-on-chain-svg-little-martians',
        external: true,
      },
    ],
  },

  // The record at the foot of the page. Selected opens; the tabs open it up.
  record: {
    note:
      'Opens on a selection. The tabs open up the whole record: every screening, every show, the talks, the prizes and the press.',
  },
};
