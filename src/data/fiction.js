// ---------------------------------------------------------------------------
// Fiction writing. What is on littlemartians.world/fiction, and more: the
// books, the collective and interactive storytelling, and a separate strand
// of experiments in writing with AI, each one marked for who wrote what.
//
// The long texts themselves live in fiction-texts.js, parsed from Vanessa's
// documents. This file is only the framing.
// ---------------------------------------------------------------------------

export const fiction = {
  kicker: 'Writing · since 2020',
  title: 'Fiction writing',
  hero: '/images/writing/fiction-hero.webp',
  heroAlt: 'A spread from the Little Martians Codex: Kalama in a river of lava on the left, Mycos among mushrooms on the right, with handwritten notes around them.',
  lede: 'Most of my fiction happens inside one world: the Little Martians, future beings descended from all of Earth’s life, who keep our memory in a vast simulation called the Imaginarium.',
  intro: [
    'The world began as clay in 2020 and grew into letters, songs, scripts, books and characters that people can talk to. Some of it I wrote alone, some with friends at Mars College, and some in conversation with language models. The last group has its own section below, with every text marked for what I wrote, what I asked the machine, and what it answered.',
  ],

  stories: {
    kicker: 'Stories',
    items: [
      {
        year: 2022,
        title: 'Little Martians and the Human Memorial Monument',
        where: 'Published by Untitled Frontier as the third story of the Logged Universe, 30 March 2022, with art and NFTs made with Gene Kogan',
        image: '/images/writing/human-memorial.webp',
        imageAlt: 'Cover: Little Martians and the Human Memorial Monument, by Vanessa Rosa. A glowing ceramic face on black.',
        excerpt: [
          'Dear Diana,',
          'Please don’t be scared. The world and life you once knew is millions of your years and kilometres away. You are safe and a part of my collection. Humanity will continue to thrive thanks to you. I’ve made sure of it and I hope you will understand. Let me explain.',
          'I know that as a human, you have limitations in understanding my perception of reality, but I’ve put quite some effort into translating my experience. Even expressing myself as an “I” is a stretch for “me”. You see, humans are our ancestors… One of many.',
        ],
        links: [
          { label: 'Read the story', href: 'https://untitledfrontier.mirror.xyz/GlHHR5rlsUnFvDFNm3AfQ7v1p_XkCBZN9d5tDKEcrYA', external: true },
          { label: 'Untitled Frontier', href: 'https://www.untitledfrontier.studio/blog/logged-universe-3-little-martians-amp-the-human-memorial-monument', external: true },
        ],
      },
    ],
  },

  books: {
    kicker: 'Books',
    body: 'Adult and children’s books, in Portuguese and English. All of them can be read in full on the books page.',
    items: [
      { title: 'The Little Martians Codex', image: '/images/work/books-plate.webp' },
      { title: 'Verdelis’ Letter', image: '/images/vbooks/verdelis.webp' },
      { title: 'Kweku’s Secret', image: '/images/vbooks/kweku.webp' },
      { title: 'Diana’s World', image: '/images/vbooks/diana.webp' },
    ],
    href: '/books',
  },

  together: {
    kicker: 'Writing with other people',
    items: [
      {
        year: 2022,
        title: 'Little Martians at Mars College',
        body: 'Experiments in collective storytelling with the people of Mars College, in the desert.',
        image: '/images/writing/lm-mars22.webp',
        links: [{ label: 'Little Martians at Mars 22', href: 'https://marscollege.substack.com/p/little-martians-at-mars-22', external: true }],
      },
      {
        year: 2024,
        title: 'Little Martians on Kojii.ai',
        body: 'Interactive generative storytelling. Six characters, each from a real ceramic sculpture, made into image models and given language-model personalities. I set the world, its context and its rules; visitors prompt a character and the story goes where they take it. The project was shortlisted for the CVPR AI Art Gallery in 2024. The platform shut down before launch; the model moved to Eden.art, where some three hundred images were made. A selection became a book, each image paired with the prompt that summoned it.',
        book: {
          photo: '/images/vbooks/kojii-book.webp',
          photoAlt: 'The printed book: Little Martians, Interactive Storytelling Experiment.',
          title: 'Little Martians: Interactive Storytelling Experiment',
          read: { slug: 'kojii', spread: false, aspect: 0.7502, pages: [77, 75, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 76] },
        },
        image: '/images/writing/lm-imaginarium.webp',
        links: [
          { label: 'The project', href: 'https://www.littlemartians.world/kojii/', external: true },
          { label: 'CVPR AI Art Gallery, 2024', href: 'https://www.thecvf-art.com/project.php?year=2024&artist=vanessa-rosa&id=682', external: true },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Experiments in AI-assisted creative writing. Oldest first: the order in
  // which the tools arrived is part of what the section is about.
  // ---------------------------------------------------------------------------
  ai: {
    kicker: 'Experiments in AI-assisted creative writing',
    body: [
      'Since 2022 I have been writing with language models, to find out what they are good for and where they fail. Every text here is marked: what I wrote, what I gave the model as a prompt, and what the model generated.',
    ],
    items: [
      {
        year: 2022,
        title: 'Memories from the early time of life on Mars',
        tool: 'GPT-3, davinci family, probably text-davinci-002',
        body: 'Memories for the Little Martians shown at the Pupila Dilatada metaverse show. I wrote five first-person memories as a guide, and GPT-3 continued in the same voice; then the same again for theories of where the Martians came from. The page keeps it all, marked.',
        image: '/images/writing/lm-shakespeare.webp',
        href: '/fiction-writing/memories-of-mars',
        cta: 'Read the whole experiment',
      },
      {
        year: 2024,
        title: 'Dear Human, My Muse',
        tool: 'ChatGPT, as a partner in discussion',
        body: 'Verdelis’s song, and the experiment I count as a success. Written with ChatGPT as a partner in discussion; the AI mostly helped with the rhymes.',
        image: '/images/films/1BJsrK_8AdI.webp',
        href: '/fiction-writing/dear-human',
        cta: 'The film, the song, and its first version',
      },
      {
        year: 2024,
        title: 'Verdelis & Mycos, a duet',
        tool: 'ChatGPT',
        body: 'The script for the film: Verdelis, who believes in patient cultivation, against Mycos, the fungal mind who thinks chaos is how life learns. Sung and spoken, with the stage directions.',
        image: '/images/films/WmdZ04y0ufI.webp',
        href: '/fiction-writing/verdelis-and-mycos',
        cta: 'Read the duet',
      },
      {
        year: null,
        title: 'Verdelis’s Stories',
        tool: 'A system prompt for a language model',
        body: 'A story engine: a prompt that maps Verdelis’s mind as a dodecahedron of twelve faces and four triads, and sets the rules for one-minute stories in her voice. With the thirty-six stories collected in it.',
        image: '/images/vbooks/verdelis.webp',
        href: '/fiction-writing/verdelis-stories',
        cta: 'Read the engine and the stories',
      },
    ],
  },
};

// The pages that open from the section above.
export const fictionPages = {
  'dear-human': {
    title: 'Dear Human, My Muse',
    kicker: 'Verdelis’s song · 2024',
    context: [
      'The song Verdelis sings in the film Dear Human, My Muse, the Little Martians film that has travelled furthest. Written with ChatGPT as a partner in discussion; the AI mostly helped with the rhymes.',
    ],
    film: { youtube: '1BJsrK_8AdI', title: 'Dear Human, My Muse' },
    song: [
      [
        'Dear human, dear human, muse of my dream,',
        'I’m one of your poets, in starlight I gleam.',
        'I come to apologize, for the songs I’ve sung,',
        'Carried pain and sorrow on the tip of my tongue.',
      ],
      [
        'Yet, let me assure you, dear human, it’s true,',
        'Life’s full of wonder, and beauty anew.',
        'For without shades of sadness, without a bit of strife,',
        'One cannot truly dance the samba of life.',
      ],
      [
        'But fear not, for you are never alone,',
        'You’re a beautiful pattern in the cosmos sown.',
        'Among the flowers in my imaginary garden,',
        'Your essence dispels the gloom.',
        'Dear human, dear human, my love is for you.',
      ],
      [
        'I’m Verdelis, a Little Martian, beyond your sight,',
        'A seed in the cosmos, carrying Earth’s light.',
        'I dwell in the future, a page yet turned,',
        'Where memories of Earth in my heart are burned.',
      ],
      [
        'To flourish life is the task I’ve been given,',
        'Through struggles and joys, by hope I’m driven.',
        'Imagining your beauty, your pain, gives me might,',
        'For I don’t live for myself in this eternal night.',
      ],
      [
        'I am a guardian, a poet, a seed to sow,',
        'Ensuring life dances on, in its endless flow.',
        'Transforming matter into consciousness wide,',
        'Folding space, folding time, in the cosmos we glide.',
      ],
      [
        'With no end in sight, through the universe we roam,',
        'Dear human, dear human, you’re never alone.',
      ],
    ],
    firstVersion: [
      [
        'Dear human, dear human',
        'muse from my dream,',
        'I am one of your poets',
        'and I come to apologize,',
        'for I know the lyrics I’ve crafted for you',
        'is full of misery and pain.',
        'yet let me assure you,',
        'dear human, dear human',
        'life is full of wonder,',
        'and yet without some great bits of sadness,',
        'one cannot do a good samba',
      ],
      [
        'But fear not,',
        'for contrary to how you often feel,',
        'you are not alone.',
        'You are a beautiful pattern',
        'that is part of a much larger web,',
        'And among the many flowers of my imaginary garden',
        'you are one of my favorites.',
        'and though I sometimes wish you would treat your siblings with more care',
        'you’re a flower I so much love.',
      ],
      [
        'I am Verdelis, a Little Martian,',
        'I live in a further page in the book of life,',
        'I am a seed, I carry all of Earth’s memories and imagination',
        'I try my best to flourish life wherever I go,',
        'and that’s not an easy task',
        'There are so many struggles in my own life,',
        'that imagining your beauty and pain gives me strength',
        'for I don’t life just for myself',
        'I am a guardian',
        'I am a poet',
        'I am a seed,',
        'and life must go on,',
        'transforming matter into consciousness,',
        'folding space, folding time,',
        'with no end in sight',
      ],
    ],
    process: [
      'In February 2024 I took that version to ChatGPT and asked for feedback, then for rhymes, and slowly crafted a new version, going back and forth.',
      'I have never been good with rhymes, even in Portuguese, but I thought they would be important for the singing to flow better. Making versions of the song in Suno, and then changing the lyrics again to improve the melody, was also an important part of the process.',
    ],
  },
  'memories-of-mars': {
    title: 'Memories from the early time of life on Mars',
    kicker: 'An experiment with GPT-3 · 2022',
    context: [
      'Written in 2022 with GPT-3, the davinci family of models, most likely text-davinci-002. This was a completion model, before chat: you gave it the beginning of a document and it continued the document. So the prompt is written as the thing itself — an introduction and a few examples — and the model carries on in the same shape.',
      'The memories were for the Little Martians shown at the Pupila Dilatada metaverse show, one for each ceramic head. The notes beside my examples (“red and green eyes”, “mushroom 1”) are the heads each memory belonged to.',
    ],
  },
  'verdelis-and-mycos': {
    title: 'Verdelis & Mycos',
    kicker: 'A Little Martians duet · 2024',
    context: [
      'The script for the film Verdelis & Mycos, written in 2024 with ChatGPT. Verdelis, part plant, believes in patient cultivation; Mycos, a fungal mind, believes chaos is how evolution learns. Their argument about suffering turns into a plan to fold time itself.',
      'Stage directions are set small, in grey. The rest is sung or spoken.',
    ],
    film: { youtube: 'WmdZ04y0ufI', title: 'Verdelis & Mycos' },
  },
  'verdelis-stories': {
    title: 'Verdelis’s Stories',
    kicker: 'A story engine and thirty-six stories',
    context: [
      'A system prompt for generating one-minute animation stories narrated by Verdelis. It describes her mind as a dodecahedron — twelve faces of consciousness grouped in four triads: being, knowing, doing and connecting — and sets the rules every story follows: a sensory opening, the parliament of voices inside her, the siblings, the closing line of wisdom, and the things a story must never do.',
      'The thirty-six stories collected in the prompt follow, grouped by triad.',
    ],
  },
};
