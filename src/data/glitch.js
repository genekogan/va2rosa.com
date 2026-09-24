// ---------------------------------------------------------------------------
// GLITCH, the ARTS+TECH residency at Château du Feÿ. Four editions, one page,
// told year by year. The films are small, silent and load only when asked for:
// each one shows a still until somebody presses play.
// ---------------------------------------------------------------------------

export const glitch = {
  slug: 'glitch',
  kicker: 'Residency · 2022 to now',
  title: 'Glitch ARTS+TECH Residency',
  hero: '/images/shows/glitch-chateau.webp',
  heroAlt: 'Château du Feÿ seen from the air, the courtyard and fountain in front of it.',
  lede: '2022 to now · Château du Feÿ, Burgundy, France',
  meta: [
    ['Where', 'Château du Feÿ, Burgundy, France'],
    ['When', 'Two weeks a year, since 2022'],
    ['Organised by', 'Primavera De Filippi'],
    ['With', 'Artists, technologists, writers and collectors'],
  ],
  intro: [
    'Two weeks in a château in Burgundy, once a year, with artists, technologists, writers and collectors who work across digital and physical media. I have taken part every year since 2022.',
    'Glitch is organized by Primavera De Filippi. Her work on copyright law, blockchain and code as law has been a massive inspiration for Gene and for me. So many people we met there ended up in the Mars ecosystem too, and the two communities keep pollinating each other.',
    'I’m especially inspired by her Plantoids and by strategies for turning artworks into living systems.',
  ],
  links: [
    { label: 'Glitch on Instagram', href: 'https://www.instagram.com/glitchresidency/', external: true },
    { label: 'Mars College', href: '/mars-college' },
  ],

  years: [
    {
      year: '2022',
      body: 'I filmed the château and the people in it, then put the footage through AI, frame by frame. The rooms kept their furniture and lost their physics.',
      media: [
        { video: '/video/glitch/g22-castle.mp4', poster: '/video/glitch/g22-castle.webp', caption: 'A walk through the castle, transformed.', wide: true },
        { video: '/video/glitch/g22-dinner.mp4', poster: '/video/glitch/g22-dinner.webp', caption: 'Dinner at the long table.', wide: true },
        { video: '/video/glitch/g22-mirai.mp4', poster: '/video/glitch/g22-mirai.webp', caption: 'Mirai, the resident dog.' },
        { video: '/video/glitch/g22-salon.mp4', poster: '/video/glitch/g22-salon.webp', caption: 'The salon, rearranging itself.' },
      ],
    },
    {
      year: '2023',
      body: 'My first interactive storytelling installation, made with Gene Kogan: a ceramic head, a screen, and a Little Martian answering whoever stood in front of it.',
      media: [
        { video: '/video/glitch/g23-installation.mp4', poster: '/video/glitch/g23-installation.webp', caption: 'The installation in the château.', wide: true },
        { video: '/video/glitch/g23-projection.mp4', poster: '/video/glitch/g23-projection.webp', caption: 'A Little Martian projected onto the wall.', wide: true },
      ],
    },
    {
      year: '2024',
      body: 'More sculptures, many painted bodies, a screening of Dear Human, My Muse, and the first Little Martians children’s book.',
      media: [
        { image: '/images/glitch/g24-heads.webp', caption: 'The heads laid out, with the film running behind them.' },
        { image: '/images/glitch/g24-mirror.webp', caption: 'One of them, on the gilt frame.' },
        { image: '/images/glitch/g24-hand.webp', caption: 'A painted hand, from the body painting.' },
        { video: '/video/glitch/g24-ceremony.mp4', poster: '/video/glitch/g24-ceremony.webp', caption: 'Lighting the candle, in the château kitchen.', wide: true },
      ],
    },
    {
      year: '2025',
      body: 'The first public screening of Verdelis & Mycos, and a Little Martian chocolate head eating ceremony as part of the final Glitch show.',
      media: [
        { video: '/video/glitch/g25-screening.mp4', poster: '/video/glitch/g25-screening.webp', caption: 'Verdelis & Mycos, shown for the first time.', wide: true },
        { video: '/video/glitch/g25-chocolate.mp4', poster: '/video/glitch/g25-chocolate.webp', caption: 'The chocolate heads, at the final show.', wide: true },
      ],
    },
  ],
};
