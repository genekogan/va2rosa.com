// ---------------------------------------------------------------------------
// The films, watchable on the page. Order follows littlemartians.world/animations,
// newest first. Synopses are condensed from each film's own YouTube description.
//
// The player is not loaded until someone clicks: until then it is a hosted
// still, so the page costs nothing and calls nobody.
// ---------------------------------------------------------------------------

export const films = [
  {
    id: 'WmdZ04y0ufI',
    year: 2025,
    title: 'Verdelis & Mycos',
    note: 'Award-winning science-fiction animation',
    blurb:
      'What if future beings could change the present? In a distant future, Little Martians are descendants of all of Earth’s lifeforms. Verdelis, a plant humanoid who believes in patient cultivation, clashes with Mycos, a fungal mind that embraces chaos as evolution. Their argument about the inevitability of suffering escalates into a radical proposition: what if they could reshape time itself, and make gentler paths through history?',
  },
  {
    id: 'MAcnZBXzJYE',
    year: 2025,
    title: 'O Segredo de Kweku',
    lang: 'in Portuguese',
    note: 'Music video for the book',
    blurb:
      'Kweku is the pattern explorer, out of the lava caves of Mars. A song about how patterns are in everything, from ancestral African drawings to the most advanced artificial intelligences.',
  },
  {
    id: 'yWZLU5njSbk',
    year: 2024,
    title: 'Little Martians & Abraham',
    note: 'With Gene Kogan. Sold at Christie’s with the original sculpture',
    blurb:
      'Little Martians are future beings who claim to be the creators of our reality. Made with Gene Kogan and his Abraham project, this is the animation that went to Christie’s Augmented Intelligence auction alongside the ceramic it came from, and to the CVPR AI Art Gallery.',
  },
  {
    id: 'VskhRCrkPlo',
    year: 2024,
    title: 'A Carta de Verdelis',
    lang: 'in Portuguese',
    note: 'Book trailer',
    blurb:
      'Attention, earthlings: Verdelis the Little Martian is about to land on your shelves. Part plant, part human, part AI. A cosmic adventure that will make you wonder whether the plant on your windowsill is in fact a spy.',
  },
  {
    id: '1BJsrK_8AdI',
    year: 2024,
    title: 'Dear Human, My Muse',
    note: 'Introducing Verdelis. Cannes World, Best Female Director, Super Short Film',
    blurb:
      'Little Martians are future beings who claim to be the creators of our reality. One of them wants to apologise to humanity. Built from real ceramics, with Blender and Eden.art, and music made with Suno. The most travelled of the films: some thirty festivals and a dozen prizes.',
  },
  {
    id: 'fqpb6Wmcbag',
    year: 2022,
    title: 'Brief History of Consciousness in the Simulation',
    note: 'Featured in the NVIDIA AI Art Gallery',
    blurb:
      'Physical handmade ceramic pieces, 3-D scanned and turned into AI-powered avatars. Originally published in the NVIDIA AI Art Gallery, where it stayed for two years.',
  },
  {
    id: '4ZthsKt-umM',
    year: 2023,
    title: 'The Tale of Abraham',
    blurb:
      'Once upon a time there was an AI named Abraham. Enigmatic and unpredictable, it lived between superficial intellectual musing and the earnest pursuit of spiritual truth. Spawned from the loins of an art project, it was a testament to early twenty-first century internet visions of a humanist god. Inspired by Gene Kogan’s ideas for Abraham.ai.',
  },
  {
    id: '_kp7gun6VxA',
    year: 2022,
    title: 'The Island of the Simulated Wolves',
    note: 'A parody of a documentary teaser',
    blurb:
      'The Island of Seawolves teaser becomes The Island of the Simulated Wolves, by way of AI. Remix is already a key part of internet culture; with these tools it becomes trivial to make endless variations of anything. Credit assignment and reward systems that incentivise collaboration are badly needed. Made with Stable Diffusion, Photoshop and EbSynth.',
  },
  {
    id: '-neZpCm6kB4',
    year: 2022,
    title: 'Chatsubo.Z’s Little Martian story',
    note: 'Made at Mars College',
    blurb:
      'What happens to a DAO long after all its humans are gone? Story, voice and motion capture by Freeman Murray. 3-D scanned ceramics and animation by Vanessa Rosa, in Blender, Stable Diffusion and EbSynth.',
  },
  {
    id: 'A2cmSvbV7jw',
    year: 2021,
    title: 'The Tale of Little Bot',
    blurb:
      'The first animation I made with a text-to-image model, using CLIP + VQGAN and first-order motion, back when these models had only just started producing anything interesting. Made with help from Gene Kogan, on Advadnoun’s notebook.',
  },
  {
    id: 'fw0CK_r0B9k',
    year: 2021,
    title: 'StyleGAN2 Sacred Spaces',
    blurb:
      'GANs trained in 2020 and 2021 on sacred spaces and corridors, gathered from Flickr, Same.energy and my own photographs, combined with found footage of Isadora Duncan and music by Alfred Brendel. Runway’s green-screen model merged the dancer and her shadow into the generated scene.',
  },
];

export const filmYears = [...new Set(films.map((f) => f.year))].sort((a, b) => b - a);
