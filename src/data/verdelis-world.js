// Verdelis.world — the agent that tells her own stories — and the NeurIPS paper
// that came out of it. Two pages share this file: /fiction-writing/verdelis-world
// and /neurips-2025.

export const verdelisWorld = {
  kicker: 'Agentic storytelling · 2024 to 2025',
  title: 'Verdelis.world',
  sub: 'A Little Martian who publishes her own films',
  hero: '/images/writing/verdelis/hero.webp',
  heroAlt: 'Verdelis as a mossy ceramic head beside a stream, a still from one of her films.',

  lede:
    'Gene Kogan and I have been experimenting with agentic storytelling for years. The phrase can sound grand, but the simplest entry point is familiar: you give a language model a character, a context and a voice, and you ask it to speak as that character.',

  intro: [
    'If you have ever typed “talk like Shakespeare” into ChatGPT or Claude, you have touched the surface. That is impersonation, and it is deceptively shallow. A character voice is not the same thing as a character with continuity, a world with rules, and a narrative engine that can keep generating new stories without collapsing into clichés.',
    'What I care about is harder: building a world with enough internal structure — several characters, an evolutionary history, an implied physics, a philosophical underground — that it can continue beyond me. Ideally it becomes a simulation that can surprise its creator while still feeling true to itself.',
    'My process begins with sculpture. I find it essential to be grounded in physical reality while working with AIs. I start with handmade ceramic heads because I trust what my hands discover before my intellect has words for it. Then AI helps me expand the world outward with images, text, music and film, each medium adding corpus and constraints.',
    'Verdelis began as one of those clay heads, made in the desert at Mars College. Fired, photographed and distilled into a LoRA — a compact personality adapter that teaches an image model her textures, her cracks, her material signature — she became a character an automated system could keep drawing. We built all of this on Eden.art, the platform Gene co-founded with Xander Steenbrugge.',
  ],

  film: {
    file: '/video/verdelis-film.mp4',
    poster: '/video/verdelis-film.webp',
    caption: 'One of the films. Script, voice, music and images all generated; the character held steady by her LoRA.',
  },

  pipeline: {
    title: 'How the daily story generator works',
    note: 'Every day the system generates a short film end to end — script, voice, music, visuals, publishing.',
    steps: [
      { n: '01', name: 'Seed', body: 'We sample a small set of conceptual coordinates: curiosity, cooperation, resilience, and so on.' },
      { n: '02', name: 'Narrative', body: 'A language model turns those coordinates into a short script with a clear arc, around 150 to 250 words.' },
      { n: '03', name: 'Audio', body: 'A voice model narrates it; a generative audio model composes the music and ambience.' },
      { n: '04', name: 'Visual', body: 'Shot descriptions go to an image model with the Verdelis LoRA attached, and the keyframes are animated into a film.' },
      { n: '05', name: 'Publish', body: 'The system posts to the site by itself, with transcript and metadata.' },
    ],
    after: [
      'The design principle is simple: the LoRA enforces visual continuity, and the seeds are supposed to enforce narrative diversity. That “supposed to” is where the real research begins.',
      'In the paper we also described a geometric consciousness scaffold: a twelve-faced dodecahedron grouped into four triads — being, knowing, doing, connecting — used to generate those creative coordinates and append them to the lore prompt at runtime. It was my attempt to make identity manipulable as structure. Could we describe identity as a pattern? And if so, would a geometric shape help?',
    ],
  },

  daily: {
    title: 'Three of the daily films',
    body: 'Around seventy were made between July and October 2025. Her archive holds a selection; many of the others are too alike to show.',
    items: [
      { file: '/video/verdelis-2025-10-05.mp4', poster: '/video/verdelis-2025-10-05.webp', caption: '5 October 2025' },
      { file: '/video/verdelis-2025-10-03.mp4', poster: '/video/verdelis-2025-10-03.webp', caption: '3 October 2025' },
      { file: '/video/verdelis-2025-09-30.mp4', poster: '/video/verdelis-2025-09-30.webp', caption: '30 September 2025' },
    ],
  },

  failures: {
    title: 'What we learned the hard way: repetition',
    body: [
      'The most honest summary of our findings is that fully automated storytelling breaks down fast, because language models tend towards degeneration: blandness, repetition, formula. In Verdelis.world it showed up in two ways.',
    ],
    items: [
      { name: 'Prompt echoing', body: 'The character repeats key phrases and ideas from her own lore. Ironically, the more carefully you define a character, the more you risk trapping her in a loop of self-quotation.' },
      { name: 'Narrative sameness', body: 'Even when the output is not literally repeating, it rhymes too much: the same beats, the same moral arcs, the same safe story shapes.' },
    ],
    after: [
      'You can fight this with sampling, with structured randomness, with layered prompts and remixed seeds — we tried all of it, including my dodecahedron. Some variants did improve diversity, but usually at the cost of world consistency. How do you open enough entropy to stay alive, without snapping the spine of the world?',
    ],
  },

  pivot: {
    title: 'From autonomy to nurturing',
    body: [
      'Eventually we made a decision that changed the direction of the whole project. Instead of chasing fully automated stories, we moved towards feedback systems: storytelling as a dialogue between me and the agent.',
      'I am building a world while Gene is building the system. I talk with the agent and we develop a storyboard together; I choose among candidate directions, which is human taste as selection pressure; then the system renders the film. In this model the human becomes a source of entropy and desire, an intentional disturbance that keeps the simulation from converging into formula.',
      'I still very much prefer the films I make myself, but I see a lot of potential in this hybrid.',
      'Agentic storytelling, to me, is about building conditions where stories can keep happening: where characters can continue, worlds can evolve, and people can step into a living narrative ecosystem instead of consuming a finished product. Personally, I would like to create a world in which parts of my mind could live beyond me, and become something else.',
    ],
  },

  links: [
    { label: 'Visit verdelis.world', href: 'https://www.verdelis.world/', external: true },
    { label: 'Talk to Verdelis on Eden', href: 'https://app.eden.art/chat?agent=verdelis', external: true },
    { label: 'The archive of films', href: 'https://www.verdelis.world/archive', external: true },
    { label: 'Agentic Storytelling, the whole essay', href: 'https://littlemartians.substack.com/p/agentic-storytelling', external: true },
  ],

  paperCard: {
    kicker: 'The paper',
    title: 'Little Martians: From Desert Clay to Generative Agents',
    meta: 'Vanessa Rosa and Gene Kogan · NeurIPS 2025, Creative AI track',
    body: 'We presented Verdelis.world at NeurIPS 2025 as a paper and a poster, and took part in a panel curated by Luba Elliott on stories that emerge between actors.',
    href: '/neurips-2025',
    image: '/images/writing/neurips/poster.webp',
  },
};

export const neuripsPaper = {
  kicker: 'Paper · NeurIPS 2025',
  title: 'Little Martians: From Desert Clay to Generative Agents',
  authors: 'Vanessa Rosa and Gene Kogan',
  venue: 'NeurIPS 2025, Creative AI track · San Diego, December 2025',
  extra: 'Paper, poster, talk and panel',

  abstract:
    'Little Martians is a trans-media experiment in which physical ceramic sculptures become synthetic artists. Each character begins as a clay head, is fired in a kiln, photographed, and distilled into a LoRA that conditions generative AI systems. The pipeline bridges ancient craft and modern AI, rooting autonomous agents in material culture while enabling them to generate unlimited narrative, image and sound.',

  points: [
    'Local Sonoran clay, collected and filtered, hand-sculpted into small heads, then bisque-fired above 1000 °C. The cracking that happens when a silicone mould is pressed produces the archaeological variations that later show up in the generated images.',
    'Conceptual grounding: Lynn Margulis on symbiogenesis, Michael Levin on bioelectric pattern memory, and Harold Cohen’s AARON as proof that creativity can come out of explicit rules and decades of iteration; with von Neumann, Karl Sims, Jeremy England, Moravec and McCorduck.',
    'The appendix sets out the lightweight geometric consciousness prompt generator that seeds the daily films, so that they do not all come out the same.',
  ],

  read: { slug: 'neurips-paper', spread: false, aspect: 0.7727, pages: [1, 2, 3, 4], title: 'Little Martians: From Desert Clay to Generative Agents' },

  poster: {
    image: '/images/writing/neurips/poster.webp',
    alt: 'The NeurIPS poster: the pipeline from desert clay to ceramic sculpture to LoRA to film.',
    caption: 'The poster, printed for the session.',
  },

  photos: [
    { src: '/images/writing/neurips/talk.webp', caption: 'Presenting the work, NeurIPS 2025' },
    { src: '/images/writing/neurips/poster-session.webp', caption: 'The poster session, with the films playing' },
    { src: '/images/writing/neurips/panel.webp', caption: 'The Creative AI panel: Priya Prakash, Parag Mital, Manuel Flurin Hendry, Luba Elliott, Jie Zhang, Gottfried Haider, Vanessa Rosa and Marcelo Coelho' },
  ],

  links: [
    { label: 'Read the paper (PDF)', href: '/downloads/little-martians-neurips-2025-paper.pdf' },
    { label: 'The poster (PDF)', href: '/downloads/little-martians-neurips-2025-poster.pdf' },
    { label: 'On OpenReview', href: 'https://openreview.net/forum?id=iSCvOW2qiH', external: true },
    { label: 'The project: verdelis.world', href: '/fiction-writing/verdelis-world' },
    { label: 'Companion essay on Substack', href: 'https://littlemartians.substack.com/p/agentic-storytelling', external: true },
  ],
};
