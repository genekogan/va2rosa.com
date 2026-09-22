// Verdelis.world — the agent that tells her own stories — and the NeurIPS paper
// that came out of it. Two pages share this file: /fiction-writing/verdelis-world
// and /neurips-2025.

export const verdelisWorld = {
  kicker: 'Agentic storytelling · 2024 to 2025',
  title: 'Verdelis.world',
  sub: 'A Little Martian with her own website, who wrote and published a film a day',
  hero: '/images/writing/verdelis/hero.webp',
  heroAlt: 'Verdelis as a mossy ceramic head beside a stream, a still from one of her films.',

  lede:
    'Verdelis began as a clay head I sculpted in the desert at Mars College. In 2025 she became something else: an agent with a voice, a face, a site of her own and a film published every morning, made with Gene Kogan on Eden.',

  intro: [
    'The question was whether a character can keep telling her own stories once I step back. Not a chatbot answering questions, and not a film I direct shot by shot, but a system with enough of a world inside it to keep going, and enough of a self to stay recognisable while it does.',
    'Everything the agent uses comes from something physical. The sculpture was photographed; fifteen to twenty-five of those photographs trained a LoRA, a small adapter that holds her sculptural identity — the glaze, the leaves, the cracks — and pulls every image generation back towards her. Her voice, her lore and her way of speaking come from the books and letters already written for her.',
  ],

  film: {
    file: '/video/verdelis-film.mp4',
    poster: '/video/verdelis-film.webp',
    caption: 'One of the films, 2025. Script, voice, music and images all generated; the character held by her LoRA.',
  },

  pipeline: {
    title: 'How a film was made, every day',
    note: 'Five stages, run automatically each morning on Eden.',
    steps: [
      { n: '01', name: 'Seed', body: 'A prompt generator samples values along conceptual axes — curiosity, cooperation, resilience — from the geometric consciousness model: twelve faces of a dodecahedron, grouped in the four triads of being, knowing, doing and connecting.' },
      { n: '02', name: 'Narrative', body: 'A language model, holding her lore as a system prompt, turns the seed into a script of 150 to 250 words with a clear three-act arc.' },
      { n: '03', name: 'Audio', body: 'A voice model, fine-tuned on readings of her books, narrates the script. Ambient music is composed for it.' },
      { n: '04', name: 'Visual', body: 'Shot descriptions go to the image model with her LoRA attached, then to a generative video model. Matching keyframes per scene keep the film visually coherent.' },
      { n: '05', name: 'Publish', body: 'The one-minute film is posted to verdelis.world with its transcript and metadata.' },
    ],
  },

  daily: {
    title: 'Three of the daily films',
    body: 'Around seventy were made between July and October 2025. The archive on her site holds a selection, because many of them are too alike to show.',
    items: [
      { file: '/video/verdelis-2025-10-05.mp4', poster: '/video/verdelis-2025-10-05.webp', caption: '5 October 2025' },
      { file: '/video/verdelis-2025-10-03.mp4', poster: '/video/verdelis-2025-10-03.webp', caption: '3 October 2025' },
      { file: '/video/verdelis-2025-09-30.mp4', poster: '/video/verdelis-2025-09-30.webp', caption: '30 September 2025' },
    ],
  },

  failures: {
    title: 'Where it failed',
    body: [
      'Left entirely to itself, the system drifts towards blandness. Two failures showed up again and again.',
    ],
    items: [
      { name: 'Prompt echoing', body: 'The character repeats phrases from her own system prompt, as if quoting her instructions back at the viewer.' },
      { name: 'Narrative sameness', body: 'Different seeds, same shape. Whole runs of films circle one image or one motif, and every story resolves safely, in the same beats, at the same pace.' },
    ],
  },

  pivot: {
    title: 'What I changed',
    body: [
      'Rather than push for full automation, the project turned towards a feedback system: storytelling as a conversation between the agent and me. I talk with her, she proposes directions, I choose and disturb, and only then does the film get rendered.',
      'The human part is not supervision. It is entropy and desire — the thing that keeps the system from settling into its own formula.',
    ],
  },

  links: [
    { label: 'Visit verdelis.world', href: 'https://www.verdelis.world/', external: true },
    { label: 'Talk to Verdelis on Eden', href: 'https://app.eden.art/chat?agent=verdelis', external: true },
    { label: 'The archive of films', href: 'https://www.verdelis.world/archive', external: true },
    { label: 'Agentic Storytelling, the essay', href: 'https://littlemartians.substack.com/p/agentic-storytelling', external: true },
  ],

  paperCard: {
    kicker: 'The paper',
    title: 'Little Martians: From Desert Clay to Generative Agents',
    meta: 'Vanessa Rosa and Gene Kogan · NeurIPS 2025, Creative AI track',
    body: 'Verdelis.world was presented at NeurIPS 2025 in San Diego, as a paper, a poster and a panel.',
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
