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
        { src: '/images/fb/fb-17.webp', caption: 'Anders Sandberg, painted at the cyberfuture dinner' },
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

// ---------------------------------------------------------------------------
// Added 2026: the page follows Vanessa's own account of the project. The three
// lines set in the Verdelis face are hers; the font has no em dash, so those
// lines use her hyphens.
// ---------------------------------------------------------------------------
export const lmPage = {
  opening: [
    'When the 2020 pandemic hit I was already in Mars. Not so far as the planet Mars, but in a little part of the California Sonoran desert where some friends and I created an art community and R&D lab we call Mars. After all, if our technology could one day take some humans to Mars, we could just as well use it to try to inhabit the harsh parts of nowadays Earth. A high-tech, low-cost approach. It is an exercise in resilience and sustainability, with a lot of space for artistic madness and fun.',
    'Yet my first response to the Martian landscape was not to gravitate towards cutting-edge technology but, quite the contrary, to turn to one of the most time-honoured techniques known to mankind. I began to gather local clay, creating ceramics using rudimentary kilns I carved into the earth. As I grew more audacious, I experimented with an array of art clays and glazes, transforming my sculptures into three-dimensional digital entities via photogrammetry. Using artificial intelligence tools and 3D software, I crafted animations based on these sculptures. I found myself immersed in the creation of a sci-fi narrative about humans and other species undergoing mutation to adapt to a shifting environment. I decided to call my sculptures Little Martians.',
  ],
  marsHref: 'https://mars.college/',

  // the research, in the order it was written
  posts: {
    kicker: 'Written along the way',
    title: 'The research',
    titles: [
      'Ceramics with local clay',
      'Little Martians: from ceramics to 3D AI beings',
      'Little Martians and the Human Imaginarium',
      'In the Footsteps of Earthly Spirits',
      'Creating a Collective World',
      'A Scientific Framework for Cosmic Seeds',
      'Agentic Storytelling',
    ],
    dates: {
      'Ceramics with local clay': 'September 2021',
      'Little Martians: from ceramics to 3D AI beings': 'October 2021',
      'Little Martians and the Human Imaginarium': 'June 2023',
      'In the Footsteps of Earthly Spirits': 'October 2023',
      'Creating a Collective World': 'December 2023',
      'A Scientific Framework for Cosmic Seeds': 'July 2025',
      'Agentic Storytelling': 'January 2026',
    },
    href: '/research',
    hrefLabel: 'All the research',
  },

  hands: {
    image: '/images/lm/hands-cut.webp',
    imageAlt: 'Hands shaping a Little Martian head in clay.',
    quote: 'Imagining the future with our hands',
    sub: '- embodied future making -',
    href: 'https://littlemartians.substack.com/p/embodied-future-making',
  },

  story: [
    'The story slowly came to me. Little Martians are future beings, descended from all of Earth’s lifeforms, tending the extreme worlds and keeping our biological and cultural memory inside a vast network of simulations called the Imaginarium. Verdelis is part plant. Mycos is a fungal mind. Kweku is a pattern distributed through eight hundred kilometres of lava tube. In their perspective, we live inside their imagination.',
  ],
  bargain: {
    lead: 'By imagining beings who have already lived through our transitions, we access different vantage points.',
    body: 'Every Little Martian embodies a different solution, a different evolutionary path. Unable to resolve their differences, they strike a bargain: each will create a “temporal sculpture”, a vision of the optimal timeline between humanity’s past and their own present. They will invite other Little Martians to do the same, then present all visions in a Temporal Art Show, letting humans and Little Martians alike judge which future-paths are worth pursuing.',
  },

  origami: {
    image: '/images/lm/portal.webp',
    imageAlt: 'A library without end, its far wall opening into a door: the Imaginarium.',
    quote: 'Time-space as origami',
  },

  head: {
    image: '/images/lm/head-desert.webp',
    imageAlt: 'A ceramic Little Martian head lying on cracked desert ground.',
  },

  guide: [
    'The project became my guide to learning about computational biology, symbiogenesis, terraforming, and the history of artificial intelligence, opening a whole new world of art and science collaborations. It led me to work with NVIDIA, Christie’s, film and art festivals all over the world, scientists from the Foresight Institute and the California Institute of Machine Consciousness, and above all, Mars College.',
  ],

  reality: {
    quote: 'Imagination creates reality',
    lead: 'The futures we vividly imagine become the futures we build toward.',
  },

  pipeline: {
    kicker: 'How one is made',
    title: 'From clay to agent',
    steps: [
      'Hand-sculpted ceramics, with silicone moulds to let one head branch into many',
      '3D scanning, for the digital mesh',
      'A custom AI model trained on the character: LoRA, Flux, and whatever the newest character workflow is',
      'Image to video: Eden.art, Runway, Kling, and the older models before them',
      'AI voice and music: ElevenLabs, Suno',
      'Facial animation: Kling, Runway, Hedra',
      'Final assembly in After Effects and Premiere Pro',
      'Interactive agents on the Eden.art platform',
      'Website and simulations, written with Claude Code or Codex',
    ],
  },

  arium: [
    { video: '/video/lm-arium-run.mp4', poster: '/video/lm-arium-run.webp', caption: 'A run through the world, 2022.' },
    { video: '/video/lm-arium-2022.mp4', poster: '/video/lm-arium-2022.webp', caption: 'The second world, built for Pupila Dilatada 3.' },
  ],

  watchFirst: {
    kicker: 'Watch first',
    title: 'Little Martians: building an AI powered sci-fi world',
    youtube: 'TG16nfIx66o',
  },

  characters: {
    kicker: 'Meet them',
    title: 'The Little Martians, and where to find them',
    body: 'Each of them is also an agent you can talk to. They keep their own lore, their own voice and their own way of arguing; ask them anything, and the answer comes back in character.',
    href: 'https://www.littlemartians.world/talk-to-a-little-martian/',
    hrefLabel: 'Talk to a Little Martian',
    items: [
      { name: 'Verdelis', icon: '/images/lm/icons/verdelis.webp', body: 'Part plant, a gardener of Martian biodomes, and the one who cares most about humans.', href: 'https://www.littlemartians.world/verdelis/' },
      { name: 'Mycos', icon: '/images/lm/icons/mycos.webp', body: 'A fungal mind who spreads spores across the solar system and finds chaos a reasonable method.', href: 'https://www.littlemartians.world/mycos/' },
      { name: 'Kweku', icon: '/images/lm/icons/kweku.webp', body: 'A trickster, a pattern distributed through eight hundred kilometres of lava tube.', href: 'https://www.littlemartians.world/kweku-1/' },
      { name: 'Kalama', icon: '/images/lm/icons/kalama.webp', body: 'Fire wisdom and energy gradients: physics wants to live.', href: 'https://www.littlemartians.world/kalama/' },
      { name: 'Ada', icon: '/images/lm/icons/ada.webp', body: 'The cloud-lab mind of Venus, at home in an atmosphere nothing else can hold.', href: 'https://www.littlemartians.world/ada/' },
      { name: 'Shuijing', icon: '/images/lm/icons/shuijing.webp', body: 'A student of deep oceans, under ice, where the light never reaches.', href: 'https://www.littlemartians.world/shuijing/' },
      { name: 'The Human Imaginarium', icon: '/images/lm/icons/human-imaginarium.webp', body: 'The network of simulations where Earth’s biological and cultural memory is kept.', href: 'https://www.littlemartians.world/human-imaginarium/' },
      { name: 'Physical Reality', icon: '/images/lm/icons/physical-reality.webp', body: 'The other half of the argument: clay, kiln, glaze, and a thing you can hold.', href: 'https://www.littlemartians.world/physical-reality/' },
    ],
  },

  closing: {
    image: '/images/lm/ground.webp',
    imageAlt: 'Verdelis and Mycos underwater, from the duet.',
  },
};
