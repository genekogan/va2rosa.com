// ---------------------------------------------------------------------------
// SAME PUTUMI: a collaboration with its own set of pages.
//
// Main page:  /threads/same-putumi
// Sub-pages:  /threads/same-putumi/<slug>
//
// Text here follows your original pages on va2rosa.com, tightened but not
// rewritten, plus material from the 2018 Amazonia report.
//
// NOTE: Same Putumi is a woman: "a healer and religious woman leader", in
// your own words in the report. Earlier drafts on this site got that wrong.
// ---------------------------------------------------------------------------

export const samePutumi = {
  slug: 'same-putumi',
  title: 'Same Putumi',
  years: '2018–2020',
  places: 'Upper Envira river, Acre · São Paulo',
  status: 'Complete · co-authored',
  media: 'Jenipapo, airbrush, laser-cut stencil, photography, projection mapping',
  hero: '/images/same/hero.webp',
  heroAlt:
    'A Huni Kuin pattern cast by sunlight through a laser-cut stencil across a face framed by white feathers.',

  coauthor:
    'Everything on these pages is co-authored with Same Putumi: Huni Kuin artist, artisan, healer and religious leader, mother of six, and founder of the Nhandepa Institute.',

  lede:
    'In 2018 Same Putumi and I were introduced through friends in São Paulo, at an event where she was a guest speaker. Shortly afterwards I went to her region on the upper Envira river to exchange knowledge and design projects together. The residency lasted a month, and the partnership outlasted it.',

  thesis:
    'What brought us together was a love of patterns.',

  intro: [
    'Same Putumi is part of the Huni Kuin, a Brazilian and Peruvian indigenous group living in the Amazonian forest. She is an artist, an artisan, a healer and a religious leader, a mother of six, and she often travels to São Paulo to perform at cultural events.',
    'Geometric design is sacred to the Huni Kuin and inseparable from daily life. They paint their faces with patterns continually, and use them on their objects, their clothes and anything else that will take them. In ritual, under ayahuasca, they see patterns everywhere.',
    'I had come to patterns from history. Portuguese tiles first, then their debt to Islamic art, then the relationship with Chinese ornament, and from there an interest in how patterns travel the world. We met somewhere in the middle.',
    'Both of us have looked for ways to put traditional technique together with new technology. Same has collaborated with electronic musicians, singing in her ancestral language over a live set. I turn patterns into animations, or cut them into stencils for painting. In the villages we used those stencils for body painting with traditional pigments, and for photographic and projection experiments. In February 2019 we produced an installation for the Museum of Image and Sound in São Paulo, with the artist Verônica Natividade.',
  ],

  report: {
    title: 'Indigenous Amazonia and technology',
    subtitle: 'An independent essay written after the first immersion',
    date: 'October 2018',
    href: '/downloads/vanessa-rosa-amazonia-report.pdf',
    pages: 14,
    summary:
      'Independent research, written after the month on the Envira because it seemed important, not because any institution asked for it. What technological exchange with Amazonian indigenous communities could look like if it were led by the communities themselves, and what it becomes if it is not. It takes up the questions raised by MIT Media Lab’s Space Enabled group about democratising space technology for social justice.',
    points: [
      'Acre stands out in the Brazilian Amazon for its indigenous rights record. Since the 1970s indigenous leaders and rubber tappers organised together as the “forest peoples”. Nearly half the state is protected forest; 15% is Indigenous Territory, home to around 18,000 people from the Pano, Aruak and Arawá language families.',
      'The Huni Kuin belong to the Pano family and are the most populous group in the state, roughly 8,000 people. Some villages are seven days by boat from the nearest town.',
      'Same asked for help developing a multimedia laboratory in her village, a compact field lab that could support her own research into medicinal plants, and legitimise Huni Kuin knowledge as relevant to the wider scientific community. There is still very little biological and medical research led by Brazilian indigenous groups; an American held a patent over an ayahuasca composition from 1981 before indigenous organisations discovered and contested it.',
      'In the Huni Kuin knowledge system, the study of medicinal plants is not separable from abstract drawing or from ritual. A laboratory would also have to be a place for artistic and spiritual practice.',
      'Ethnocomputing, the study of the interactions between computation and culture, is the theoretical frame. Ron Eglash and Nettrice Gaskins have shown a pedagogy built on the algorithmic properties of cultural patterns; for a people whose central cultural activity is abstract drawing, that is a way into programming that starts from what they already know.',
      'The alternative is worse than nothing: technological transfer without symbolic intermediation is simply a new version of cultural colonialism.',
    ],
  },

  // ---------------------------------------------------------------------
  projects: [
    {
      slug: 'first-immersion',
      video: { vimeo: '330351390', caption: 'The first immersion, filmed on the upper Envira.' },
      title: 'The first immersion',
      years: 'September 2018',
      place: 'Upper Envira river, Acre',
      hero: '/images/same/imm-1.webp',
      heroAlt: 'A Huni Kuin pattern cast by sunlight through a stencil onto a face, in the forest.',
      lede:
        'A month living among the Huni Kuin of the upper Envira, invited by Same Putumi, to understand the region first and design anything only after that.',
      body: [
        'In September 2018 I lived for a month with an indigenous group of Huni Kuin, also known as Kashinawa, based on the upper part of the Envira river in Acre, in the western Amazon. I was invited by Same Putumi, a healer and religious woman leader who often travels to São Paulo for cultural events.',
        'The purpose of the trip was to understand Same’s region well enough to build projects with her rather than for her. I spent the month living with Same and twenty other people from her village, and together we travelled to other villages along the river. I also visited the institutional spaces of indigenous organisations in Rio Branco, the state capital.',
        'The Envira runs between Peru and Brazil and is remarkable for the ethnic diversity along it: at least seven ethnicities, in dozens of villages of twenty to six hundred people, at very different degrees of contact with non-indigenous society. The closer to the source, the more self-sufficient the community; near the source live groups with no contact at all.',
      ],
      sections: [
        {
          title: 'Photographs with laser-cut stencils and sunlight',
          body:
            'I brought stencils cut from patterns Same had chosen. Laid against skin in direct sun, the stencil stops being a tool for painting and becomes a way of letting the place itself expose the image. The pattern is not applied. It is cast.',
          images: ['/images/same/imm-2.webp', '/images/same/imm-3.webp', '/images/same/imm-4.webp'],
        },
        {
          title: 'Body painting with jenipapo, stencils and airbrush',
          body:
            'Jenipapo is the traditional fruit pigment; the airbrush and the laser-cut stencil are not. Put together they paint the same patterns faster and at a scale the hand would take days to reach, which is exactly the kind of exchange both of us were interested in.',
          images: ['/images/same/imm-5.webp', '/images/same/imm-6.webp', '/images/same/imm-7.webp'],
        },
        {
          title: 'The river and the region',
          body:
            'Most of the Envira population speaks Portuguese, is organised through legal associations, and many are Christianised, often as a syncretism that values traditional practice rather than replacing it. A more recent wave of evangelisation is different, and according to the indigenous leaders I spoke with it tracks directly with political persecution of the people working to preserve native practice.',
          images: ['/images/same/imm-map.webp'],
        },
      ],
    },

    {
      slug: 'katxanawa',
      video: { vimeo: '333577290', caption: 'Katxanawa: the pattern projected into the forest.' },
      title: 'Katxanawa, video mapping',
      years: '2019',
      place: 'Upper Envira river, Acre',
      hero: '/images/same/kat-1.webp',
      heroAlt: 'Huni Kuin patterns projected in blue light across forest vegetation at night.',
      lede:
        'Katxanawa is a traditional Huni Kuin song asking for abundance and luck. We built a projection around Same singing it.',
      body: [
        'The Huni Kuin are an ancient Amazonian people living between Brazil and Peru. This piece exists to honour that culture and to give visibility to a group that fights hard for its rights and remains very vulnerable.',
        'Recognising pattern is one of the most elementary human activities. A forest built out of patterns is a metaphor for our attempt to make the underlying logic of nature visible, and recent 3-D simulation follows exactly the same principle, translating spatial perception into a geometric complex until it produces the illusion of reality.',
        'So the proposal Same and I were developing tries to overturn the idea that indigenous cultures stand opposed to a technological understanding of the world. The opposite is true: ancestral cultures still have a great deal to offer in systems of knowledge and experimentation.',
      ],
      sections: [
        {
          title: 'Projection in the forest',
          body:
            'A computer, a small projector, cameras and a portable battery were enough to run projection mapping in the middle of the forest. The response was immediate and entirely consistent with a desire to cover every available surface in abstract design. They asked me to bring more equipment and teach them to use it.',
          images: ['/images/same/kat-2.webp'],
        },
      ],
      credits:
        'A project by Same Putumi and Vanessa Rosa. Voice: Same Putumi. Video editing: Julio Stotz. Music: Vinicius Braga.',
    },

    {
      slug: 'nhandepa',
      video: { vimeo: '330341392', caption: 'Nhandepa, the installation at MIS São Paulo.' },
      title: 'Nhandepa, the exhibition',
      years: '14 February to 10 March 2019',
      place: 'Museum of Image and Sound, São Paulo',
      hero: '/images/same/nha-hero.webp',
      heroAlt: 'The darkened installation at MIS São Paulo, with projected leaves glowing in blue.',
      lede:
        'Nhandepa combines Nhanderu, a Guarani divinity, with Epa Kuxipa, a Huni Kuin one. The name is an argument: that different indigenous groups need to recognise one another and work together.',
      body: [
        'The exhibition ran at the Museum of Image and Sound in São Paulo, curated by Milton Guran and Monica Maia. The artists were Danilo Arenas, showing photographs from his 2016 immersion with the Huni Kuin, and Same Putumi and Vanessa Rosa, who made the immersive installation.',
        'Our reference was Paulus Gerdes’s book The Circle and the Square, a catalogue of weaving patterns from five continents. Same Putumi chose five patterns, found among groups in Southeast Asia and across Native American cultures. I made paintings merging those patterns with photographs Same had taken, then animated light over the paintings with projection mapping.',
        'The infinity boxes, where the medicinal leaves Same had brought from the Envira were displayed, were co-designed with the architect Verônica Natividade. The paintings, the projection and the rest of the installation are mine and Same’s.',
      ],
      sections: [
        {
          title: 'The entrance wall',
          body: 'The five chosen patterns, set out as a wall of symbols before you enter the dark.',
          images: ['/images/same/nha-1.webp', '/images/same/nha-2.webp', '/images/same/nha-3.webp'],
        },
        {
          title: 'The installation',
          body:
            'Paintings under projection, so the pattern moves. In the dark the surface stops behaving like a painting and starts behaving like a forest at night.',
          images: ['/images/same/nha-4.webp', '/images/same/nha-5.webp', '/images/same/nha-6.webp'],
        },
        {
          title: 'The paintings, with the lights on',
          body:
            'Without the projection the room is black and white: botanical drawing, the five woven patterns, and Same among the leaves. This is the surface the light was played over.',
          images: [
            '/images/same/nha-lit-01.webp',
            '/images/same/nha-lit-02.webp',
            '/images/same/nha-lit-03.webp',
            '/images/same/nha-lit-04.webp',
            '/images/same/nha-lit-08.webp',
            '/images/same/nha-lit-09.webp',
            '/images/same/nha-lit-07.webp',
            '/images/same/nha-lit-05.webp',
            '/images/same/nha-lit-06.webp',
          ],
        },
        {
          title: 'The infinity boxes',
          body: 'Medicinal leaves brought from the Envira, held in mirrored boxes that have no end. Co-designed with Verônica Natividade.',
          images: ['/images/same/nha-7.webp', '/images/same/nha-8.webp'],
        },
      ],
      credits:
        'Curators: Milton Guran and Monica Maia. Artists: Danilo Arenas; Same Putumi and Vanessa Rosa. Infinity boxes: co-designed by Vanessa Rosa and Verônica Natividade. Museum of Image and Sound, São Paulo.',
    },

    {
      slug: 'research-and-education',
      video: { youtube: 'RTzbgLk9rfU', caption: 'At the Magno Tesserino school, on the upper Envira.' },
      title: 'Research & education',
      years: '2020',
      place: 'São Paulo · FabLearn Global and FabLearn Asia',
      hero: '/images/same/weave.webp',
      heroAlt: 'A Huni Kuin woven textile with a repeating geometric pattern in red, black and white.',
      lede:
        'Taking the pattern work into a classroom: indigenous design, algorithmic design and digital fabrication, for high-school students in São Paulo.',
      body: [
        'We collaborated with Colégio Magno in São Paulo to connect indigenous patterns, algorithmic design and digital fabrication for high-schoolers.',
        'The project was presented at FabLearn Global 2020 as part of the educators’ panel “Making across cultures”, and again at FabLearn Asia 2020.',
        'This is the part of the collaboration that follows the ethnocomputing argument all the way to where it is meant to land. A pedagogy built on the algorithmic properties of cultural patterns gives a student a way into programming that begins with something they already recognise, and it works in both directions, in a São Paulo classroom and in a village on the Envira.',
      ],
      sections: [
        {
          title: 'At the school',
          body: 'Photographs from the Magno school project.',
          images: [
            '/images/same/magno-00.webp',
            '/images/same/magno-01.webp',
            '/images/same/magno-02.webp',
            '/images/same/magno-03.webp',
            '/images/same/magno-04.webp',
            '/images/same/magno-07.webp',
          ],
        },
      ],
      credits: 'With Colégio Magno, São Paulo. Presented at FabLearn Global 2020 and FabLearn Asia 2020.',
    },

    {
      slug: 'prints',
      title: 'Prints',
      years: '2019',
      place: 'Artur Fidalgo Gallery, Rio de Janeiro',
      hero: '/images/same/print-1.webp',
      heroAlt: 'A black-and-white print of a face surrounded by dense pattern and foliage.',
      lede:
        'High-quality prints based on the main painting from the Nhandepa installation, each with small changes added by hand.',
      body: [
        'An edition of ten, held at Artur Fidalgo Gallery. Every print carries manual additions, so no two are identical, which is the same principle as the stencil work: the machine supplies the repetition, the hand supplies the error.',
      ],
      sections: [
        { title: '', body: '', images: ['/images/same/print-2.webp', '/images/same/print-portrait.webp'] },
      ],
      credits: 'Edition of 10. Available at Artur Fidalgo Gallery.',
    },

    {
      slug: 'ethnocomputing-experiments',
      title: 'Ethnocomputing Experiments',
      years: 'April 2018',
      place: 'Pioneer Works, New York',
      hero: '/images/same/ec-hero.webp',
      heroAlt:
        'A large illuminated panel showing a white line drawing of stairways and arches overlaid with a continuous Sona pattern.',
      lede:
        'Two systems of representing the world, both mathematical in their treatment of line, projected onto one another.',
      body: [
        'Presented at Pioneer Works for Second Sundays on 8 April 2018 and open to visitors until 22 April.',
        'A set of Angolan traditional patterns known as Sona, from the Chokwe people, recreated in Processing, following the heritage algorithm embedded in the originals, which were made as finger drawings in sand while a story was told aloud.',
        'We chose one pattern to project over a painting inspired by an early seventeenth-century treatise on linear perspective by the Dutch artist Vredeman de Vries. The pattern tells the story of a wild chicken running from a hunter: the line is the path the bird takes as it fools him and exhausts him, before returning to its hidden home, which sits exactly where the run began.',
        'The main inspiration is the academic work of Paulus Gerdes, the Dutch–Mozambican author who was a prominent figure in ethnomathematics, alongside Ron Eglash’s work on ethnocomputing and heritage algorithms.',
      ],
      sections: [
        {
          title: 'The two systems',
          body:
            'A Sona drawing and a perspective treatise are both attempts to hold space in a line. Putting one on top of the other makes the difference between them visible without ranking them.',
          images: ['/images/same/ece-1.webp', '/images/same/ece-2.webp', '/images/same/ece-3.webp'],
        },
        {
          title: 'Installed',
          body: '',
          images: ['/images/same/ece-4.webp', '/images/same/ece-5.webp', '/images/same/ece-6.webp', '/images/same/ece-7.webp'],
        },
      ],
      credits:
        'A project by Vanessa Rosa and Wenqi Li. Presented at Pioneer Works, Second Sundays, April 2018. Not co-authored with Same Putumi. It sits here because it is where the ethnocomputing research began.',
      notWithSame: true,
    },
  ],
};

export const sameProject = (slug) => samePutumi.projects.find((p) => p.slug === slug);
