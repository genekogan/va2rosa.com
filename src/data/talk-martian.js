// ---------------------------------------------------------------------------
// The first Little Martians interactive storytelling experiment, 2023: an app
// at app.mars.college, made with Gene Kogan on Eden. Four phone recordings,
// each asking a different character the same question.
// ---------------------------------------------------------------------------

export const talkMartian = {
  slug: 'talk-to-a-little-martian',
  kicker: 'Interactive storytelling · 2023',
  title: 'Talk to a Little Martian',
  lede: 'The first Little Martians interactive storytelling experiment, made with Gene Kogan in 2023.',
  intro: [
    'An experimental app based on language models with personas, running on Eden. You typed a question and a voice answered as the character, while their video kept repeating on a loop. The previous answers stayed on screen as text, the character’s memory.',
    'It was very novel at the time, though we promoted it little. These are the first Little Martians interactive storytelling experiments.',
    'Below, four characters answer the same question: how did humans become Martians?',
  ],
  // the order she showed them: Nebulana first, she was the first one made
  videos: [
    { name: 'Nebulana', note: 'The first Little Martian I made, and the one I presented at most of the events.', file: '/video/talk/nebulana.mp4', poster: '/video/talk/nebulana.webp' },
    { name: 'Mycologus', file: '/video/talk/mycologus.mp4', poster: '/video/talk/mycologus.webp' },
    { name: 'Cabloclus', file: '/video/talk/cabloclus.mp4', poster: '/video/talk/cabloclus.webp' },
    { name: 'Lumis', file: '/video/talk/lumis.mp4', poster: '/video/talk/lumis.webp' },
  ],
  shown: [
    { year: 2023, where: 'Deforum, Bright Moments Gallery', place: 'Venice Beach, Los Angeles' },
    { year: 2023, where: 'Little Martians pop-up, Re:Gen:Cy', place: 'Brooklyn, New York', href: '/little-martians-popup' },
    { year: 2023, where: 'Synesthesia festival, The Garden, August', place: 'Ponte de Lima, Portugal', href: 'https://modo.pt/happenings-synesthesia' },
    { year: 2023, where: 'Glitch ARTS+TECH Residency', place: 'Château du Feÿ, Burgundy', href: '/glitch' },
  ],
  links: [
    { label: 'Where it went next: Verdelis.world', href: '/fiction-writing/verdelis-world' },
    { label: 'The Little Martians', href: '/threads/little-martians' },
    { label: 'Eden', href: 'https://eden.art', external: true },
  ],
};
