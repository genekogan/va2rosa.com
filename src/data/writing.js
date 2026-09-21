// ---------------------------------------------------------------------------
// EVERYTHING WRITTEN, for /research.
//
// Groups render in the order given below. Add a row and it appears.
// `href` is where the text lives; `file` is a PDF served from /downloads/.
// `note` carries translation credits and anything else worth stating plainly.
//
// No em dashes anywhere in this file, by request.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// The three that state the position, set before the paper. Each one also stays
// in its group further down, so the record below is still complete.
// ---------------------------------------------------------------------------

export const positions = [
  {
    year: 2021,
    title: 'Copyright Storm: authorship in the age of AI',
    venue: 'Medium, June 2021',
    image: '/images/writing/med-copyright.webp',
    imageAlt: 'From the Copyright Storm essay.',
    detail:
      'Written before the AI image boom of 2022. It explains how generative models would upend the creator economy, and that the best artists could do was to learn as much as they could about the AI models and the possibilities they open.',
    href: 'https://va2rosa.medium.com/copyright-storm-authorship-in-the-age-of-ai-baba554aa617',
  },
  {
    year: 2025,
    title: 'AI for Preserving Cultural Heritage',
    venue: 'Little Martians, Substack',
    image: '/images/writing/lm-heritage.webp',
    imageAlt: 'Ceramic work in progress.',
    detail:
      'I want AI to amplify the value of physical craft rather than obscure it. On the smell of the materials, the learning curve, and the gap between what you envision and what the clay allows.',
    href: 'https://littlemartians.substack.com/p/ai-for-preserving-cultural-heritage',
  },
  {
    year: 2019,
    title: 'Art, Ethnomathematics and the Digital Era',
    venue: 'Medium, August 2019. Fifteen minutes',
    image: '/images/writing/med-ethnomath.webp',
    imageAlt:
      'The Ethnocomputing Experiments installation, a Sona line drawing projected over a perspective painting.',
    detail:
      'The essay traces ethnomathematics from Paulus Gerdes back to Ubiratan D’Ambrosio in the 1970s, and to what shaped it: Paulo Freire’s pedagogy of the oppressed, and Oswald Spengler’s argument that a history of science has to be a history of cultures.',
    href: 'https://va2rosa.medium.com/art-ethnomathematics-and-the-digital-era-4bc30b0bf634',
  },
];

export const featured = {
  kicker: 'Paper',
  year: 2025,
  title: 'Little Martians: From Desert Clay to Generative Agents',
  authors: 'Vanessa Rosa and Gene Kogan',
  venue: 'NeurIPS 2025, Creative AI track',
  extra: 'Paper, poster and panel participation',
  abstract:
    'Little Martians is a trans-media experiment in which physical ceramic sculptures become synthetic artists. Each character begins as a clay head, is fired in a kiln, photographed, and distilled into a LoRA that conditions generative AI systems. The pipeline bridges ancient craft and modern AI, rooting autonomous agents in material culture while enabling them to generate unlimited narrative, image and sound.',
  points: [
    'Local Sonoran clay, collected and filtered, hand-sculpted into small heads, then bisque-fired above 1000 °C. Silicone moulds let one sculpture branch into new characters; the cracking that happens during pressing produces the archaeological variations that later show up in the generated images.',
    'Conceptual grounding: Lynn Margulis on symbiogenesis, Michael Levin on bioelectric pattern memory stored independently of DNA, and Harold Cohen’s AARON, first exhibited in 1973, as proof that creativity can come out of explicit rules and decades of iteration.',
    'Also drawing on von Neumann’s self-reproducing automata, Karl Sims’ evolving virtual creatures, Jeremy England’s statistical physics of self-organisation, Moravec and McCorduck.',
    'The appendix sets out a lightweight geometric consciousness prompt generator, used to seed stories that do not all come out the same.',
  ],
  images: [
    { src: '/images/writing/paper-clay.webp', caption: 'Raw desert clay, sculpted' },
    { src: '/images/writing/paper-ceramic.webp', caption: 'The same head, glazed and fired' },
    { src: '/images/writing/paper-agent.webp', caption: 'The character as a generative agent' },
  ],
  links: [
    { label: 'Read the paper (PDF)', href: 'https://www.dropbox.com/scl/fi/t9eyphfamlxpawlfw21n1/Little_Martians-2.pdf?rlkey=7y1y6mk9gzfjakmypnoirh93j&dl=0' },
    { label: 'The poster (PDF)', href: 'https://www.dropbox.com/scl/fi/u7yc069qkai59xq58upf7/poster_neurips2025_print.pdf?rlkey=72s2v6i68prplw1rrekqc501g&dl=0' },
    { label: 'Project page', href: 'https://www.littlemartians.world/neurips-2025' },
    { label: 'Companion essay on Substack', href: 'https://littlemartians.substack.com/p/agentic-storytelling' },
  ],
};

export const groups = [
  {
    key: 'academic',
    title: 'Academic writing',
    blurb:
      'Art history and design research, written in Portuguese between 2012 and 2018. The two long texts were translated into English in 2026 by Claude Fable, at my request; the translators’ notes inside each file set out the conventions used.',
    items: [
      {
        year: 2018,
        title: 'Art, Design and Mathematics: Images, Algorithms and Cultural Diversity',
        image: '/images/work/dissertation-cover.webp',
        imageAlt: 'The dissertation cover: layered stencilled patterns in red and grey with a black Adinkra symbol at the centre.',
        original: 'Arte, Design e Matemática: Imagens, Algoritmos e Diversidade Cultural',
        kind: 'Master’s dissertation',
        venue: 'Universidade Anhembi Morumbi, Master’s in Design, Art and Technology, São Paulo',
        detail:
          'Advisor: Prof. Gilbertto Prado. Examining board: Prof. Hermes Renato Hildebrand (PUC-SP) and Prof. Priscila Almeida Cunha Arantes (UAM). 152 pages, 58 figures.',
        note: 'English translation, 2026, by Claude Fable.',
        links: [
          { label: 'English translation (PDF)', href: 'https://drive.google.com/file/d/1JBe3nzAK2dq1o9Wzw5iDniZyysNzjDyU/view' },
          { label: 'Portuguese original (PDF)', href: 'https://drive.google.com/file/d/1Ec1ShXBwnn4YG547WjyV5j6YPMXKOX_D/view' },
        ],
      },
      {
        year: 2018,
        title: 'Thinking linear perspective beyond the Eurocentric narrative',
        image: '/images/work/ec-5.webp',
        imageAlt: 'A drawing built with one-point perspective over tile pattern.',
        original: 'Pensando a perspectiva linear para além da narrativa eurocêntrica',
        kind: 'Journal article',
        venue: 'Revista do Departamento de Arquitetura e Urbanismo, PUC-Rio, Year I, No. I. ISSN 2446-7340',
        detail:
          'Sets Erwin Panofsky’s essay on perspective against Hans Belting and George Saliba, for whom Arab optics were essential to the Italian Renaissance. The argument is that mathematical principles from one culture can be reinterpreted in another and produce something new to both, and that art history needs the history of science to see it.',
        note: 'Published in Portuguese.',
        links: [],
      },
      {
        year: 2016,
        title: 'On the contradictions of assigning the symbolic value known as art to images and gestures', image: '/images/work/ec-2.webp', imageAlt: 'An engraved ceramic vessel shown at MAD.',
        original: 'Sobre as contradições da atribuição do valor simbólico conhecido como arte a imagens e gestos',
        kind: 'Conference essay',
        venue: 'USO IMPRÓPRIO: Seminars in Contemporary Studies of the Arts, PPGCA',
        detail:
          'Written in the first person on purpose. Uses Jonathan Crary’s Techniques of the Observer against the standard account of modernism, and argues that the concept of art inherited from Renaissance Europe is too narrow to hold what images now do.',
        note: 'Published in Portuguese.',
        links: [],
      },
      {
        year: 2016,
        title: 'On the database and its effects on how we think about, and occupy, a space artistically', image: '/images/same/ece-3.webp', imageAlt: 'A continuous Sona line drawing projected over a perspective painting.',
        original: 'Sobre Database e seus impactos na forma de pensar, e ocupar, artisticamente um espaço',
        kind: 'Conference paper',
        venue: 'P&D Design, Universidade Anhembi Morumbi',
        detail:
          'Follows Lev Manovich’s database as symbolic form back through Panofsky to Ernst Cassirer, and asks what it means that the dominant cultural form of the computer age does not connect to any physical space.',
        note: 'Published in Portuguese.',
        links: [],
      },
      {
        year: 2012,
        title: 'Imagem&Ver(a)cidade: Urban Artworks and Their Digital Counterparts',
        image: '/images/vm/p2010-figures.webp',
        imageAlt: 'Life-size painted figures on a wall in Rio’s port zone.',
        kind: 'Undergraduate monograph',
        venue: 'Institute of Arts, UERJ, Bachelor in Art History, Rio de Janeiro',
        detail:
          'Advisor: Prof. Roberto Luis Torres Conduru. Critical reader: Prof. Rafael Cardoso. On Banksy and Blu, and on what happens to a street work once its photograph travels further than the wall ever will. The title is a pun that does not survive translation: veracidade (truthfulness), ver a cidade (to see the city), and cidade (the city).',
        note: 'English translation, 2026, by Claude Fable. The opening pages describe Urban Images: Looking at Morro da Conceição, the undergraduate fellowship project that became Visible Memories.',
        links: [
          { label: 'English translation (PDF)', href: 'https://drive.google.com/file/d/1S2m9iH4jP0zqn8r5r7BT2cfvDdRd0eMh/view' },
        ],
      },
      {
        year: 2018,
        title: 'Indigenous Amazonia and technology',
        image: '/images/same/imm-map.webp',
        imageAlt: 'A map of the upper Envira river region.',
        kind: 'Report',
        venue: 'Independent research practice, written after a month on the upper Envira',
        detail:
          'What technological exchange with Amazonian indigenous communities could look like if the communities led it, and what it becomes if they do not. It takes up the questions raised by MIT Media Lab’s Space Enabled group about democratising space technology for social justice, and asks what they would mean on the Envira. 14 pages.',
        note: '',
        links: [
          { label: 'Read it (PDF)', href: '/downloads/vanessa-rosa-amazonia-report.pdf' },
          { label: 'The collaboration', href: '/threads/same-putumi' },
        ],
      },
    ],
  },

  {
    key: 'lm',
    title: 'Little Martians, non-fiction',
    blurb:
      'The essays that work out the universe as it is being built. Most live on the Little Martians Substack; the earliest ones were written for Mars College.',
    items: [
      { year: 2026, title: 'The Little Martians Codex', image: '/images/writing/lm-codex.webp', kind: 'Essay', detail: 'On making the spine of a fictional universe, in the voice of Verdelia, librarian of the moon. The first copy was hand-bound with Matt Melnicki and shown at The Founding Assembly for Machine Consciousness Research, in the Uncanny Nova Phenomenon show curated by Aleksandra Smilek. The Codex is not published yet; ask and I will send a PDF.', links: [{ label: 'Read it', href: 'https://littlemartians.substack.com/p/the-little-martians-codex' }] },
      { year: 2026, title: 'Agentic Storytelling', image: '/images/writing/lm-agentic.webp', kind: 'Essay', detail: 'You give a language model a character, a context and a voice, and you ask it to speak as that character. Gene Kogan and I have been at this for years. Companion to the NeurIPS paper above.', links: [{ label: 'Read it', href: 'https://littlemartians.substack.com/p/agentic-storytelling' }] },
      { year: 2025, title: 'AI for Preserving Cultural Heritage', image: '/images/writing/lm-heritage.webp', kind: 'Essay', detail: 'I want AI to amplify the value of physical craft rather than obscure it. On the smell of the materials, the learning curve, and the gap between what you envision and what the clay allows.', links: [{ label: 'Read it', href: 'https://littlemartians.substack.com/p/ai-for-preserving-cultural-heritage' }] },
      { year: 2025, title: 'A Scientific Framework for Cosmic Seeds', image: '/images/writing/lm-cosmic.webp', kind: 'Essay', detail: 'Little Martians as infrastructure-level beings: von Neumann probes, but organic and conscious, keeping Earth’s heritage in the Imaginarium.', links: [{ label: 'Read it', href: 'https://littlemartians.substack.com/p/a-scientific-framework-for-cosmic' }] },
      { year: 2025, title: 'Embodied Future-Making', image: '/images/writing/lm-embodied.webp', kind: 'Essay', detail: 'The methodology. Teaching clay to remember the future, in a studio in the Sonoran desert.', links: [{ label: 'Read it', href: 'https://littlemartians.substack.com/p/embodied-future-making' }] },
      { year: 2023, title: 'Creating a Collective World', image: '/images/writing/lm-collective.webp', kind: 'Essay', detail: 'On remix culture, and what it means for a fictional universe to be built by more than one person.', links: [{ label: 'Read it', href: 'https://littlemartians.substack.com/p/creating-a-collective-world' }] },
      { year: 2023, title: 'In the Footsteps of Earthly Spirits', image: '/images/writing/lm-spirits.webp', kind: 'Essay', detail: 'The Maize Gods, the Xapiri of the Yanomami, and what anthropomorphism does for our relationship to a forest.', links: [{ label: 'Read it', href: 'https://littlemartians.substack.com/p/in-the-footsteps-of-earthly-spirits' }] },
      { year: 2023, title: 'Exploring Our Digital Selves', image: '/images/writing/lm-digital.webp', kind: 'Essay', detail: 'If you could upload your mind and edit it on the way in, what would you keep?', links: [{ label: 'Read it', href: 'https://littlemartians.substack.com/p/exploring-our-digital-selves' }] },
      { year: 2023, title: 'AI Shakespeare', image: '/images/writing/lm-shakespeare.webp', kind: 'Essay', detail: 'Authorship, and how a work extends past its author. Out of one made-in-China Shakespeare bust, several new characters were born.', links: [{ label: 'Read it', href: 'https://littlemartians.substack.com/p/ai-shakespeare' }] },
      { year: 2023, title: 'Little Martians and the Human Imaginarium', image: '/images/writing/lm-imaginarium.webp', kind: 'Essay', detail: 'Tales from a future simulation. How the concept moved from Human Memorial to Human Imaginarium.', links: [{ label: 'Read it', href: 'https://littlemartians.substack.com/p/little-martians-and-the-human-imaginarium' }] },
      { year: 2022, title: 'Little Martians at Mars 22', image: '/images/writing/lm-mars22.webp', kind: 'Essay', detail: 'A ceramics class at BBAC in Bombay Beach where everyone sculpted their own Little Martian.', links: [{ label: 'Read it', href: 'https://marscollege.substack.com/p/little-martians-at-mars-22' }] },
      { year: 2022, title: 'Little Martians: from ceramics to 3D AI beings', image: '/images/writing/lm-ceramics3d.webp', kind: 'Essay', detail: 'Clay is one of the oldest technologies we have, and a very good heat shield. Could AI breathe life into clay-based humans?', links: [{ label: 'Read it', href: 'https://marscollege.substack.com/p/little-martians-from-ceramics-to' }] },
      { year: 2022, title: 'Ceramics with local clay', image: '/images/writing/lm-localclay.webp', kind: 'Essay', detail: 'Digging and processing clay from the ground at Bombay Beach.', links: [{ label: 'Read it', href: 'https://marscollege.substack.com/p/ceramics-with-local-clay' }] },
    ],
  },

  {
    key: 'essays',
    title: 'Essays elsewhere',
    blurb: 'Written on Medium between 2019 and 2021, before the Little Martians Substack took over.',
    items: [
      {
        year: 2019,
        title: 'Art, Ethnomathematics and the Digital Era',
        image: '/images/writing/med-ethnomath.webp',
        imageAlt: 'The Ethnocomputing Experiments installation, a Sona line drawing projected over a perspective painting.',
        kind: 'Essay',
        venue: 'Medium, August 2019. Fifteen minutes',
        detail:
          'The essay traces ethnomathematics from Paulus Gerdes back to Ubiratan D’Ambrosio in the 1970s, and to what shaped it: Paulo Freire’s pedagogy of the oppressed, and Oswald Spengler’s argument that a history of science has to be a history of cultures. These ideas fed several works, above all Ethnocomputing Experiments, made with Wenqi Li in 2018.',
        links: [{ label: 'Read it', href: 'https://va2rosa.medium.com/art-ethnomathematics-and-the-digital-era-4bc30b0bf634' }],
      },
      {
        year: 2021,
        title: 'Copyright Storm: authorship in the age of AI',
        image: '/images/writing/med-copyright.webp',
        imageAlt: 'From the Copyright Storm essay.',
        kind: 'Essay',
        venue: 'Medium, June 2021',
        detail:
          'Written before the AI image boom of 2022. It explains how generative models would upend the creator economy, and that the best artists could do was to learn as much as they could about the AI models and the possibilities they open.',
        links: [{ label: 'Read it', href: 'https://va2rosa.medium.com/copyright-storm-authorship-in-the-age-of-ai-baba554aa617' }],
      },
      {
        year: 2019,
        title: 'The Silk Roads',
        image: '/images/writing/med-silkroads.webp',
        imageAlt: 'The Pioneer Works mural in Red Hook.',
        kind: 'Essay',
        venue: 'Medium, December 2019',
        detail:
          'A personal account of the development of an artistic research, from the tiles to the Pioneer Works wall. Also published in Portuguese as Rotas da Seda.',
        links: [
          { label: 'Read it', href: 'https://va2rosa.medium.com/the-silk-roads-bdc0618b9f8' },
          { label: 'Em português', href: 'https://va2rosa.medium.com/rotas-da-seda-243aba1aeb8a' },
        ],
      },
      {
        year: 2019,
        title: 'Act4Amazon Instagram filter',
        image: '/images/writing/med-act4amazon.webp',
        imageAlt: 'The Act4Amazon Instagram filter.',
        kind: 'Project note',
        venue: 'Medium, September 2019',
        detail:
          'A filter made with the Indian technologist and artist Harshit Agrawal, in response to the Amazon fires. Also published in Portuguese.',
        links: [
          { label: 'Read it', href: 'https://va2rosa.medium.com/act4amazon-instagram-filter-602fc9b97b03' },
          { label: 'Em português', href: 'https://va2rosa.medium.com/filtro-de-instagram-act4amazon-27863616d1c4' },
        ],
      },
    ],
  },

  {
    key: 'talks',
    title: 'Talks',
    blurb: '',
    items: [
      { year: 2025, title: 'Little Martians: From Desert Clay to Generative Agents', kind: 'Paper and panel', image: '/images/writing/paper-ceramic.webp', imageAlt: 'A glazed ceramic Little Martian head.', venue: 'NeurIPS 2025, Creative AI track', detail: '', links: [] },
      {
        year: 2024,
        title: 'The Art of World Building: The Little Martians Project',
        image: '/images/writing/talk-foresight.webp',
        imageAlt: 'Still from the talk at Edge Esmeralda.',
        kind: 'Talk',
        venue: 'Foresight Institute and Protocol Labs, Edge Esmeralda',
        detail:
          'I walked through the Little Martians world, and Gene Kogan introduced Abraham.ai in the same session.',
        links: [{ label: 'Watch it', href: 'https://www.youtube.com/watch?v=JV10RDZuu14' }],
      },
      { year: 2024, title: 'Artists Exploring Creativity and Language with Generative AI', kind: 'Talk', image: '/images/writing/lm-agentic.webp', imageAlt: 'From the Agentic Storytelling essay.', venue: 'NVIDIA GTC', detail: '', links: [] },
      { year: 2023, title: 'NVIDIA GTC', kind: 'Talk', image: '/images/writing/lm-imaginarium.webp', imageAlt: 'From the Human Imaginarium essay.', venue: 'NVIDIA', detail: '', links: [] },
      { year: 2020, title: 'Making across cultures',
        image: '/images/same/weave.webp',
        imageAlt: 'A Huni Kuin woven textile.', kind: 'Educators’ panel', venue: 'FabLearn Global 2020, and again at FabLearn Asia 2020', detail: 'Indigenous patterns, algorithmic design and digital fabrication with high-schoolers at Colégio Magno, São Paulo.', links: [{ label: 'The project', href: '/threads/same-putumi/research-and-education' }] },
      { year: 2017, title: 'Art, Parametric Design and Public Spaces', kind: 'Talk', image: '/images/work/ec-1.webp', imageAlt: 'Parametric pattern studies.', venue: 'Penn State, with Verônica Natividade', detail: '', links: [] },
    ],
  },
];

// A note the page carries about what is still missing.
export const pending =
  'More texts are on their way, including older academic articles. This list will grow.';
