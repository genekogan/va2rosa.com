// ---------------------------------------------------------------------------
// The books page. Vanessa's own account, kept as she wrote it.
//
// Pictures come later: each book carries an `image` when there is one, and the
// page simply leaves the space out until then.
// ---------------------------------------------------------------------------

export const books = {
  kicker: 'Ongoing · since the 1990s',
  title: 'The love of making books',
  lede: 'When I was a kid, my mom, my sister and I learned to make books together.',
  hero: '/images/work/books-plate.webp',
  heroAlt:
    'Little Martians World: The Codex, by Verdelia, Librarian of the Moon. The bound cover held up against grass.',
  meta: [
    ['Publisher', 'Viajante do Tempo'],
    ['Role', 'Co-owner and art director'],
    ['Media', 'Editorial · illustration · art direction · print'],
    ['Since', 'Childhood, properly since 2010'],
  ],
  // right under the opening line: the book that started it
  opening: [
    {
      gallery: 'slides',
      images: [
        {
          src: '/images/caio/caio-1.webp',
          caption: 'Caio Zip em: Matemática — Que bicho é esse? By Regina Gonçalves. Rio de Janeiro, 2001.',
        },
        {
          src: '/images/caio/caio-2.webp',
          caption:
            'Illustrated by Diana Gonçalves de Almeida Rosa, 14 years old, and Vanessa Gonçalves de Almeida Rosa, 11.',
        },
      ],
    },
  ],
  story: [
    'As with many long stories, none of us really knows how it started. Books have always been magical and important in my family. My sister Diana and I liked to make little physical copies of special books for our dolls, back when she was 7 and I was 4. Later on, my mom started writing down the stories she was inventing for her elementary school students, and we became her commenters and editors. When she finally printed proper copies, we were the illustrators. Her stories, of course, were about time travelling. Filled with art, enigmas, military strategy and mathematics.',
    'In the 2000s there was a revolution in the book industry called the digital turn. Digital software, online retail and print on demand as an international service changed how books could be produced and distributed worldwide. Which meant that a middle-class Brazilian family could start selling books through the early years of social media. We stacked inventory in our living room, built a publishing company on our own, scaled it across the country through specialized government sales, worked with many authors and illustrators, eventually sold over a million books, and licensed international rights to mainland China and elsewhere. So I grew up making books with my family, all of us learning the job as we went.',
    'As it had to be the case, our company’s name is Viajante do Tempo, or Time Traveller in Portuguese.',
    'And I simply love books. Yet, after my sister’s passing, I came to see working for the company as my way of staying connected to my parents, of supporting their efforts, while my art practice was my space of personal freedom. I used to distinguish between the brilliance of children and the sacred affairs of grown-ups, like the high art I saw at contemporary art museums. But eventually I realized, as Italo Calvino argued in Italian Folktales, that ancient fairy tales, aka kids’ stories, are works of genius, with captivating cadence, metaphors for the meaning of life and cosmological theories.',
    'Only recently have I started fully integrating making books with my art practice, and I must confess I am very excited to create more.',
  ],
  titles: [
    {
      title: 'Diana’s World',
      year: '2020',
      body: 'A girl who loves to draw travels into paintings, the Italian Renaissance, Song China, Japan around 1700, accompanied by her dog Alice and a narrator who opens the doors and then lets her take her chances. I co-wrote it with my friend Claire Parizel and did the illustrations myself, with her advice. The protagonist is my sister Diana. Much of what became the Little Martians started here: the art history, the travelling between worlds, the simulation.',
    },
    {
      title: 'Verdelis’s Letter',
      year: 'Viajante do Tempo',
      body: 'The first Little Martians book. A letter arrives from a far future in which Mars has gardens, written by Verdelis, a curious being who is part plant, part AI, part human. It is a book about biodomes, symbiosis and genetic adaptation, but mostly it is a message of hope sent backwards in time to children who have every reason to be frightened. All the illustrations come from AI models trained on my ceramic sculptures.',
    },
    {
      title: 'Kweku’s Secret',
      year: 'Viajante do Tempo',
      body: 'Kweku, the trickster, broadcasting from the lava caves with an urgent revelation: patterns. African sand drawings, Indian kolams, ocean waves, neural networks; the same language everywhere. The book is largely a catastrophe involving an ancient pattern that turns things into broccoli, including Verdelis’s garden. Underneath the chaos it is the ethnomathematics I have been studying for years.',
    },
    {
      title: 'The Little Martians Codex',
      body: 'A spine for the universe, written in the voice of Verdelia, the librarian of the moon. It explains how the Little Martians are put together, what happened to Earth, who their goddess is, and why the distinction between organic and inorganic does not hold where they live. I printed the first copy and bound it by hand, Coptic stitch, painted boards, under the supervision of my friend Matt Melnicki. It is the first book I made as an art object and I would like to go much further into that.',
      image: '/images/work/books-plate.webp',
      imageAlt: 'The Codex, hand-bound, held up against grass.',
      // Pages rendered to images by scripts/render-book.py, so the reader
      // below the list is a gallery rather than a PDF viewer.
      read: {
        slug: 'codex',
        // a chosen handful, not the whole book: the cover, who the characters
        // are, the two spreads that carry the argument, the geometry, the
        // Imaginarium, Nyx, and Verdelia signing off
        spreads: [1, 2, 3, 5, 10, 11, 12, 16, 19, 23, 25, 30, 31],
        note: 'Thirteen spreads out of the book. Arrow keys, or swipe.',
      },
    },
    {
      title: 'The Book of Abraham.ai',
      body: 'My reading of the state of the art in Abraham, the autonomous artist project started by my love, Gene Kogan. Part history, part argument about what it means for an AI to have a practice of its own.',
    },
  ],
  closing: 'If you’d like to make a book with me, hit me up. I love partnerships.',
  links: [
    { label: 'Viajante do Tempo', href: 'https://viajantedotempo.com/', external: true },
  ],
};
