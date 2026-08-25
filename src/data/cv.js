// ---------------------------------------------------------------------------
// ONE dataset, several views:
//   /info            the Selected list, then the full filterable record
//   homepage "Now"   the rows with now: true
//   thread pages     rows matching that thread's slug
//
// type: exhibition | solo | talk | teaching | film | award | residency |
//       publication | publicart | education | affiliation
// Press lives in its own file, press.js.
//
// featured: true puts a row in the Selected list at the top of Info.
// Sources: Vanessa_Rosa_CV_2026.pdf, littlemartians.world/about,
// va2rosa.com/About-Vanessa-Rosa.
// ---------------------------------------------------------------------------

import { festivalRows } from './festivals.js';

export const cv = [
  ...festivalRows,
  // ——— Now and upcoming ———
  { year: 2027, month: 12, monthLabel: 'December–April', type: 'teaching', title: 'Preparing the new edition of Mars College', venue: 'Mars College', city: 'Bombay Beach, California', now: true, thread: 'mars-college' , href: 'https://mars.college/' },
  { year: 2026, month: 12, monthLabel: 'From 2 December', type: 'exhibition', title: 'Arte Generativa', venue: 'Fundação Itaú, invited artist. Little Martians: Dear Human, My Muse', city: 'São Paulo, Brazil', now: true, featured: true, thread: 'little-martians' , href: 'https://www.itaucultural.org.br/' },
  { year: 2026, month: 9, monthLabel: '18–27 September', type: 'film', title: 'Verdelis & Mycos', venue: 'The Galactic Imaginarium Film Festival. An annual hybrid event dedicated strictly to science fiction and fantasy films', city: 'Timiș and Dumbrăvița, Romania', now: true, thread: 'little-martians', href: 'https://festival.galactic.one' },
  { year: 2026, month: 9, monthLabel: 'September', type: 'film', title: 'Verdelis & Mycos', venue: 'Burano International Film Festival', city: 'Venice, Italy', now: true, thread: 'little-martians' , href: 'https://www.baiffcinema.eu/' },
  { year: 2026, month: 8, monthLabel: '9 August', type: 'exhibition', title: 'OURS', venue: 'Foundation for Future Aesthetics. An exhibition and salon evening for visions of the future', city: 'Lower East Side, New York', href: 'https://futureaesthetics.foundation/ours' },
  { year: 2026, month: 8, monthLabel: 'August', type: 'exhibition', title: 'Little Martians: Dear Human, My Muse', venue: 'FILE, Electronic Language International Festival, FIESP', city: 'São Paulo, Brazil', now: true, thread: 'little-martians' , href: 'https://file.org.br/' },

  // ——— Exhibitions and institutional recognition ———
  { year: 2026, type: 'exhibition', title: 'Machine Consciousness Conference (MC0001)', venue: 'Lighthaven. Little Martians Oracle, ceramic installation, gifted to the Center for the Interdisciplinary Study of Machine Consciousness', city: 'Berkeley, California', featured: true, thread: 'little-martians', lmSelected: true , href: 'https://machine-consciousness.ai/' },
  { year: 2026, type: 'exhibition', title: 'Bombay Beach Biennale: Saturn’s Theater of Minds', venue: 'Three-channel projection-mapped installation', city: 'Bombay Beach, California', thread: 'mars-college' , href: 'https://www.bombaybeachbiennale.org/' },
  { year: 2025, type: 'exhibition', title: 'Augmented Intelligence', venue: 'Christie’s, Rockefeller Center. The first auction at a major house dedicated to AI art. Little Martians & Abraham exhibited and sold', city: 'New York', featured: true, thread: 'little-martians', lmSelected: true , href: 'https://onlineonly.christies.com/s/augmented-intelligence/vanessa-rosa-b-1990-31/250113' },
  { year: 2025, type: 'exhibition', title: 'NeurIPS 2025, Creative AI Track', venue: 'Little Martians: From Desert Clay to Generative Agents, peer-selected paper and work, with Gene Kogan', city: '', featured: true, thread: 'little-martians', lmSelected: true , href: 'https://neurips.cc/virtual/2025/events/creative-ai-2025' },
  { year: 2025, type: 'exhibition', title: 'CVPR AI Art Gallery', venue: 'Little Martians: Historian of Consciousness, curated by Luba Elliott', city: '', thread: 'little-martians' , href: 'https://www.thecvf-art.com/archive.php?year=2025' },
  { year: 2024, type: 'exhibition', title: 'CVPR AI Art Gallery, shortlisted', venue: 'Little Martians, an experiment in interactive generative storytelling built on real ceramic pieces. IEEE/CVF Conference on Computer Vision and Pattern Recognition', city: '', featured: true, thread: 'little-martians' , href: 'https://www.thecvf-art.com/archive.php?year=2024' },
  { year: 2026, month: 6, type: 'talk', title: 'Embodied AI, Autonomous Artists, and the Future of Creative Machines', venue: 'TIAT, 1 June 2026. Experimental lectures with Gene Kogan on embodied machines, autonomous artists and machine creativity', city: 'San Francisco', thread: 'little-martians', href: 'https://luma.com/tiat-s3me', href2: 'https://www.tiat.place/', href2Label: 'TIAT' },
  { year: 2025, month: 6, type: 'talk', title: 'Little Martians: Da Cerâmica à Inteligência Artificial', venue: 'Meta Gallery, presentation and screening, June 2025', city: 'Rio de Janeiro, Brazil', thread: 'little-martians', href: 'https://www.correiodamanha.com.br/cultura/artes-plasticas/2025/06/206055-ceramica-encontra-inteligencia-artificial-na-obra-de-vanessa-rosa.html' },
  { year: 2025, type: 'exhibition', title: 'TokenNation Brasil', venue: 'Fundação Bienal de São Paulo', city: 'São Paulo, Brazil', thread: 'little-martians' , href: 'https://bienal.org.br/' },
  { year: 2025, type: 'exhibition', title: 'Paintboxed Tezos World Tour', venue: 'A collaboration between the Tezos Foundation, ArtMeta and Adrian Wilson’s Paintbox archive. Survey exhibition at the Digital Art Mile', city: 'Basel, Switzerland', thread: 'little-martians', href: 'https://www.rightclicksave.com/article/the-power-of-the-paintbox-interview', href2: 'https://www.digitalartmile.com/', href2Label: 'Digital Art Mile' },
  { year: 2023, type: 'exhibition', title: 'Featured Artist, NVIDIA AI Art Gallery', venue: 'One of four featured artists, March 2023 to March 2025', city: '', featured: true, thread: 'little-martians', lmSelected: true , href: 'https://www.nvidia.com/en-us/research/ai-art-gallery/artists/vanessa-rosa/' },
  { year: 2024, type: 'solo', title: 'Little Martians at Saturn', venue: 'Bombay Beach Biennale, solo exhibition', city: 'Bombay Beach, California', thread: 'little-martians' , href: 'https://www.bombaybeachbiennale.org/' },
  { year: 2024, type: 'exhibition', title: 'NFT.Brasil', venue: 'Fundação Bienal de São Paulo', city: 'São Paulo, Brazil', thread: 'little-martians' , href: 'https://www.nftbrasil.io/' },
  { year: 2024, type: 'exhibition', title: 'Foresight Institute Vision Weekend', venue: 'Bückeburg Castle', city: 'Germany', thread: 'little-martians', lmSelected: true , href: 'https://foresight.org/' },
  { year: 2024, type: 'exhibition', title: 'Foundation, Foundation', venue: 'Part of the Bombay Beach Biennale', city: 'Bombay Beach, California', thread: 'little-martians' , href: 'https://www.bombaybeachbiennale.org/' },
  { year: 2023, type: 'solo', title: 'Little Martians pop-up', venue: 'Re.gen.cy, solo exhibition', city: 'New York', thread: 'little-martians' , href: 'https://www.instagram.com/re_gen_cy_/' },
  { year: 2023, type: 'exhibition', title: 'Glitch ARTS+TECH Residency', venue: 'Château du Feÿ. Little Martians shown during the residency', city: 'Joigny, France', thread: 'little-martians' , href: 'https://www.instagram.com/glitchresidency/' },
  { year: 2023, type: 'exhibition', title: 'Pupila Dilatada 3', venue: 'Metaverse art show. A Little Martians world built on the Arium platform', city: 'Online', thread: 'little-martians' },
  { year: 2022, type: 'exhibition', title: 'Little Martians metaverse', venue: 'The first of two worlds built on the Arium platform', city: 'Online', thread: 'little-martians' },
  { year: 2021, type: 'exhibition', title: 'Pupila Dilatada', venue: 'Metaverse art show', city: 'Online', thread: 'little-martians' },
  { year: 2023, type: 'exhibition', title: 'Deforum', venue: 'Bright Moments Gallery', city: 'Los Angeles, California', thread: 'little-martians' , href: 'https://brightmoments.io/' },
  { year: 2022, type: 'exhibition', title: 'NYC Resistor Interactive Art Show', venue: '2022 and 2023', city: 'New York', thread: 'little-martians' , href: 'https://www.nycresistor.com/' },
  { year: 2022, type: 'exhibition', title: 'Simulated Worlds', venue: 'Gray Area Foundation for the Arts', city: 'San Francisco, California', featured: true, thread: 'little-martians', lmSelected: true , href: 'https://grayarea.org/event/simulated-worlds-participatory-world-building-with-ai/' },
  { year: 2022, type: 'exhibition', title: 'This Mural is a Time-Traveling Portal', venue: 'Xenoform Labs', city: 'San Francisco', thread: 'the-silk-roads' , href: 'https://xenoformlabs.com/' },
  { year: 2019, type: 'exhibition', title: 'Nhandepa', venue: 'MIS São Paulo, with Same Putumi and Verônica Natividade', city: 'São Paulo', featured: true, thread: 'same-putumi' , href: 'https://mis-sp.org.br/exposicao/nhandepa/' },
  { year: 2018, type: 'exhibition', title: 'Ethnocomputing Experiments', venue: 'Pioneer Works, with Wenqi Li', city: 'Brooklyn, New York', thread: 'ethnocomputing' , href: 'https://pioneerworks.org/' },
  { year: 2017, type: 'exhibition', title: 'Dialogues', venue: 'Le Centre. Two-person exhibition with Gérard Quenum, made during a one-month residency', city: 'Cotonou, Benin', thread: 'the-silk-roads', href: '/gerard-quenum', href2: 'https://www.lecentre-benin.com/g%C3%A9rard-quenum-vanessa-rosa', href2Label: 'Le Centre' },
  { year: 2017, type: 'solo', title: 'Imaginary Tiles', venue: 'B[x] Space, solo exhibition, March to April 2017. Statement by Marjan Fadavi', city: 'Bushwick, New York', thread: 'the-silk-roads' , href: '/imaginary-tiles' },
  { year: 2017, type: 'exhibition', title: 'Context Art Fair, and Terra Nova', venue: 'Haas Art Advisory', city: 'New York' },
  { year: 2016, type: 'exhibition', title: 'MURO International Art Festival', venue: 'Invited muralist', city: 'Lisbon, Portugal', thread: 'the-silk-roads' , href: 'https://www.lisboa.pt/cidade/cultura/galeria-de-arte-urbana' },
  { year: 2016, type: 'exhibition', title: 'STROKE Art Fair', venue: 'Invited artist, live painting with A7MA Gallery', city: 'Munich, Germany', thread: 'the-silk-roads' , href: 'https://stroke-artfair.com/' },
  { year: 2016, type: 'exhibition', title: 'Dialogue Failure', venue: '', city: 'New York', thread: 'the-silk-roads' },
  { year: 2013, type: 'exhibition', title: 'The Circle Show', venue: 'Urban Spree Gallery', city: 'Berlin, Germany' , href: 'https://urbanspree.com/' },
  { year: 2020, type: 'exhibition', title: 'Digital Art Month', venue: 'CADAF, Digital Art Fair, December', city: 'Miami, Florida' },
  { year: 2020, type: 'exhibition', title: 'Casa de Colecionador', venue: 'Galeria Artur Fidalgo, January', city: 'Rio de Janeiro, Brazil' },
  { year: 2020, type: 'exhibition', title: 'SP-Arte', venue: 'Invited artist with Galeria Artur Fidalgo', city: 'São Paulo, Brazil' },
  { year: 2019, type: 'exhibition', title: 'Act4Amazon', venue: 'Re:Gen:CY, September', city: 'New York' },
  { year: 2019, type: 'exhibition', title: 'Our Village', venue: 'If Not Us Then Who, September', city: 'New York' },
  { year: 2019, type: 'exhibition', title: 'Interactive Show', venue: 'NYC Resistor, April', city: 'Brooklyn, New York' , href: 'https://www.nycresistor.com/' },
  { year: 2017, type: 'exhibition', title: 'Múltiplo InComum', venue: 'A7MA Gallery, September', city: 'São Paulo, Brazil' },
  { year: 2015, type: 'exhibition', title: 'Brooklyn is the Future', venue: 'The Vasquez Building, April', city: 'Brooklyn, New York' },
  { year: 2014, type: 'exhibition', title: 'Cooperação', venue: 'Sesc Santa Luzia, September', city: 'Rio de Janeiro, Brazil' },
  { year: 2013, type: 'exhibition', title: 'Desarquitetura', venue: 'Centro Cultural Casa Amarela, April', city: 'Rio de Janeiro, Brazil' },
  { year: 2012, type: 'exhibition', title: 'Ver(a)Cidade', venue: 'Centro Cultural da Caixa Econômica Federal, October to December. Thirteen artists on the urban scene; Vanessa Rosa also produced the show', city: 'Rio de Janeiro, Brazil' , href: '/ver-a-cidade' },
  { year: 2012, type: 'exhibition', title: 'Mural commission and exhibition', venue: 'Galeria Artur Fidalgo, November', city: 'Rio de Janeiro, Brazil' , href: '/more-projects' },
  { year: 2012, type: 'exhibition', title: '63º Salão de Abril', venue: 'Galeria Antônio Bandeira, national art prize exhibition', city: 'Fortaleza, Brazil' },
  { year: 2012, type: 'exhibition', title: 'Olhares para o Céu', venue: 'Centro Cultural dos Correios', city: 'Rio de Janeiro, Brazil' },

  // ——— Films: awards ———
  { year: 2019, type: 'award', title: 'Artivism Challenge', venue: 'Promoted by Alpha’a Gallery', city: '' },
  { year: 2015, type: 'award', title: 'Altamente Recomendável, Brazilian National Foundation for Children’s and Young Adult Books (FNLIJ)', venue: 'For the illustrations of Brás, o pequeno Viajante, written by Paula Novaes', city: 'Brazil' },
  { year: 2024, type: 'award', title: 'Best Female Director, Super Short Film. Little Martians: Dear Human, My Muse', venue: 'Cannes World Film Festival', city: 'Cannes, France', featured: true, thread: 'little-martians', lmSelected: true , href: 'https://www.world-film-festival.com/en/official-results/' },
  { year: 2024, type: 'award', title: 'Global South Special Award', venue: 'Korea International AI Film Festival', city: 'Seoul, South Korea', thread: 'little-martians', lmSelected: true , href: 'https://www.gcon.or.kr/eng/aiff.html' },
  { year: 2024, type: 'award', title: 'Best Art Direction and Best Original Song', venue: 'International Avant-Garde Film Awards', city: 'New York', thread: 'little-martians' , href: 'https://iagfilmawards.com/best-art-direction-2024-little-martians' },
  { year: 2024, type: 'award', title: 'Best Sci-Fi or Fantasy Short Film Made with AI', venue: 'The Galactic Imaginarium Film Festival', city: 'Timișoara, Romania', thread: 'little-martians' , href: 'https://filmfreeway.com/TheGalacticImaginariumFilmFestival' },
  { year: 2024, type: 'award', title: 'Best Original Soundtrack', venue: 'CineTech Future Fest', city: 'Opole, Poland', thread: 'little-martians' , href: 'https://www.cinetechfuturefest.com/' },
  { year: 2024, type: 'award', title: 'Best AI Film', venue: 'Monza Film Fest', city: 'Monza, Italy', thread: 'little-martians' , href: 'https://monzafilmfest.com/' },
  { year: 2024, type: 'award', title: 'Best Original Idea, Reality Awards', venue: 'Reale Film Festival', city: 'Milan, Italy', thread: 'little-martians' , href: 'https://www.realefilmfestival.com/' },
  { year: 2024, type: 'award', title: 'Best Film', venue: 'Night of Shorts, and Night of Drama Shorts', city: 'Milan, Italy', thread: 'little-martians' , href: 'https://www.nightofshorts.com/' },
  { year: 2024, type: 'award', title: 'Best VFX', venue: 'Absurd Film Festival', city: 'Milan, Italy', thread: 'little-martians' , href: 'https://www.assurdofilmfestival.com/vecchie-edizioni-old-editions/' },
  { year: 2024, type: 'award', title: 'Honorable Mention, Best Animation', venue: 'Red Movie Awards', city: 'Reims, France', thread: 'little-martians' , href: 'https://www.redmovieawards.com/' },
  { year: 2024, type: 'award', title: 'Honorable Mention', venue: 'Chroma Art Film Festival', city: 'Miami, United States', thread: 'little-martians' , href: 'https://chromaartfilmfestival.org/23-selected-films/meet-the-artist-vanessa-rosa/' },
  { year: 2025, type: 'award', title: 'Short Animation Film Award', venue: 'Moondance International Film Festival', city: 'Boulder, Colorado', thread: 'little-martians' , href: 'https://www.moondancefilmfestival.com/' },
  { year: 2025, type: 'award', title: 'Best Musical. Verdelis & Mycos', venue: 'AI International Film Festival', city: '', thread: 'little-martians' , href: 'https://filmfreeway.com/AIInternationalFilmFestival' },
  { year: 2025, type: 'award', title: 'Best AI Film. Verdelis & Mycos', venue: 'Bangkok Movie Awards', city: 'Bangkok, Thailand', thread: 'little-martians' , href: 'https://www.bangkokmovieawards.com/' },
  { year: 2025, type: 'award', title: 'Animated Film Award. Verdelis & Mycos', venue: 'Dubai City Film Festival', city: 'United Arab Emirates', thread: 'little-martians' , href: 'https://filmfreeway.com/DubaiCityFilmFestival' },
  { year: 2026, type: 'award', title: 'Best Experimental Film Made with AI. Verdelis & Mycos', venue: 'Experimental Brasil', city: 'Campos dos Goytacazes, Brazil', thread: 'little-martians' , href: 'https://experimentalbrasiljournal.neocities.org/interviews#2026-2026-vanessa-rosa' },

  // ——— Films, and the rest of the festival run ———

  // ——— Talks, lectures and teaching ———
  { year: 2024, month: 10, type: 'talk', title: 'Panel of award winners', venue: 'Korea International AI Film Festival, October 2024', city: 'Seoul, South Korea', thread: 'little-martians' , href: 'https://www.gcon.or.kr/eng/aiff.html' },
  { year: 2024, month: 11, type: 'talk', title: 'Youth Ask AI about the Future', venue: '4th Asia-Pacific Young Leaders Forum, invited speaker, 28 November 2024. Organised by the Jeju Free International City Development Center, around a thousand participants', city: 'Jeju Halla University, Jeju City, South Korea', href: 'https://ylfjeju.kr/' },
  { year: 2022, month: 9, type: 'talk', title: 'Copyright Storm', venue: 'Global Summit on Responsible AI, 30-minute talk, 19 to 23 September 2022. An initiative of ITS Rio, the Nordic Centre for Internet & Society at BI Norwegian Business School, and the Berkman Klein Center at Harvard', city: 'Copacabana, Rio de Janeiro, Brazil', href: 'https://www.aiglobalsummit.com.br/en/palestrantes' },
  { year: 2020, month: 10, type: 'talk', title: 'Os Mundos de Diana: a children’s book journey through global art history', venue: 'Frankfurt Book Fair, author’s events, 15 October 2020', city: 'Frankfurt, Germany' },
  { year: 2015, month: 3, type: 'talk', title: 'Street Art, panel discussion', venue: 'Local Projects Art Space, March', city: 'New York' },
  { year: 2020, month: 3, type: 'talk', title: 'Algorithmic art and indigenous communities', venue: 'Processing Community Day NYC, March 2020', city: 'New York', thread: 'ethnocomputing' , href: 'https://day.processing.org/' },
  { year: 2019, month: 7, type: 'talk', title: 'Artist in residence talk', venue: 'NYC Resistor, 17 July 2019', city: 'Brooklyn, New York', href: 'https://www.nycresistor.com/2019/07/07/nyc-resistor-artist-in-residence-talk-vanessa-rosa-on-wed-jul-17/' },
  { year: 2019, month: 2, type: 'talk', title: 'Nhandepa, open debate', venue: 'Museum of Image and Sound (MIS), 16 February 2019', city: 'São Paulo, Brazil', thread: 'same-putumi' , href: 'https://mis-sp.org.br/exposicao/nhandepa/' },
  { year: 2025, type: 'talk', title: 'Little Martians: From Desert Clay to Generative Agents', venue: 'NeurIPS 2025, Creative AI track. Paper, poster and panel', city: '', thread: 'little-martians' , href: 'https://neurips.cc/virtual/2025/events/creative-ai-2025' },
  { year: 2024, type: 'talk', title: 'The Art of World Building: The Little Martians Project', venue: 'Foresight Institute and Protocol Labs, Edge Esmeralda', city: '', thread: 'little-martians' , href: 'https://www.youtube.com/watch?v=JV10RDZuu14' },
  { year: 2024, type: 'talk', title: 'Artists Exploring Creativity and Language with Generative AI', venue: 'NVIDIA GTC, panellist', city: '', thread: 'little-martians', lmSelected: true , href: 'https://www.nvidia.com/en-us/on-demand/session/gtcspring23-s51360/' },
  { year: 2023, type: 'talk', title: 'Custom World Building with AI Avatars: The Little Martians Sci-Fi Project', venue: 'NVIDIA GTC, featured session. Archived on NVIDIA On-Demand', city: '', thread: 'little-martians' , href: 'https://www.nvidia.com/en-us/on-demand/session/gtcspring23-s51360/' },
  { year: 2024, type: 'teaching', title: 'Guest instructor, Interactive Berlin', venue: 'School of Machines, Making & Make-Believe. Four-week summer intensive on creative AI, sculpture and worldbuilding', city: 'Berlin, Germany' , href: 'https://www.schoolofma.org/' },
  { year: 2024, type: 'teaching', title: 'AI filmmaking workshop', venue: 'Avaissance, Avalanche Foundation', city: '' },
  { year: 2022, type: 'teaching', title: 'Simulated Worlds: Participatory World-Building with AI', venue: 'Gray Area, workshop', city: 'San Francisco', thread: 'little-martians' , href: 'https://grayarea.org/event/simulated-worlds-participatory-world-building-with-ai/' },
  { year: 2020, type: 'talk', title: 'Making across cultures', venue: 'FabLearn Global and FabLearn Asia, educators’ panel', city: '', thread: 'same-putumi' , href: 'https://fablearn.org/' },
  { year: 2017, type: 'talk', title: 'Art, Parametric Design and Public Spaces', venue: 'Pennsylvania State University, with Verônica Natividade, hosted by Prof. José Pinto Duarte', city: '', thread: 'ethnocomputing' , href: 'https://stuckeman.psu.edu/' },
  { year: 2017, type: 'talk', title: 'Arte, imagens algorítmicas e diversidade cultural', venue: 'University of Lisbon, Faculty of Architecture, DCG lecture series', city: 'Lisbon, Portugal' , href: 'https://www.fa.ulisboa.pt/' },
  { year: 2016, type: 'talk', title: 'Proposições artísticas para a Zona Portuária do Rio de Janeiro', venue: 'University of Lisbon, Faculty of Architecture, DCG lecture series', city: 'Lisbon, Portugal', thread: 'visible-memories' , href: 'https://www.fa.ulisboa.pt/' },
  { year: 2022, type: 'teaching', title: 'Workshop: From Analog to AI', venue: 'Pioneer Works', city: 'Brooklyn, New York', thread: 'little-martians', lmSelected: true , href: 'https://pioneerworks.org/' },
  { year: 2017, type: 'teaching', title: 'Workshop: Laser-Cut Stencils', venue: 'Pioneer Works', city: 'Brooklyn, New York', thread: 'the-silk-roads' , href: 'https://pioneerworks.org/' },
  { year: 2019, type: 'teaching', title: 'Teaching artist', venue: 'Red Hook Art Project, free arts education for underserved youth', city: 'Brooklyn, New York' , href: 'https://www.redhookartproject.org/' },
  { year: 2017, month: 5, type: 'talk', title: 'Series of art talks in public high schools', venue: 'Organised by UrbanWalls Brazil, May 2017', city: 'Annapolis, Maryland', href: 'https://www.urbanwallsworld.com/' },
  { year: 2023, type: 'teaching', title: 'Workshops on AI art tools and creative workflows', venue: 'Eden.art, ongoing', city: '' , href: 'https://www.eden.art/' },

  // ——— Residencies and fellowships ———
  { year: 2020, type: 'teaching', title: 'Runs the residency at Mars College', venue: 'Each winter term at the off-grid experimental college for art, AI and creative technology. Profiled in The Guardian and on KCRW, 2026', city: 'Bombay Beach, California', featured: true, thread: 'mars-college' , href: 'https://mars.college/' },
  { year: 2020, type: 'residency', title: 'Brahman.ai', venue: 'March to July, extended through the first months of the pandemic', city: 'Bombay Beach, California' },
  { year: 2019, type: 'residency', title: 'Artist in residence, NYC Resistor', venue: 'May to July', city: 'Brooklyn, New York' , href: 'https://www.nycresistor.com/' },
  { year: 2014, type: 'residency', title: 'MACAO', venue: 'April', city: 'Milan, Italy' },
  { year: 2021, type: 'residency', title: 'Sculpture Space NYC', venue: '', city: 'Long Island City, New York' , href: 'https://www.sculpturespacenyc.com/' },
  { year: 2018, type: 'residency', title: 'Artist in residence, Pioneer Works', venue: 'Technology residency', city: 'Brooklyn, New York', featured: true, thread: 'the-silk-roads' , href: 'https://pioneerworks.org/' },
  { year: 2018, type: 'residency', title: 'Amazon residency with the Huni Kuin community', venue: 'One month living and collaborating with Huni Kuin artists and elders, the Same Putumi project', city: 'Acre, Brazil', featured: true, thread: 'same-putumi' , href: '/threads/same-putumi' },
  { year: 2018, type: 'residency', title: 'DINACON, Digital Naturalism Conference', venue: '', city: 'Koh Lon, Thailand' , href: 'https://www.dinacon.org/' },
  { year: 2017, type: 'residency', title: 'Le Centre', venue: 'One-month international residency', city: 'Cotonou, Benin', href: 'https://www.lecentre-benin.com/g%C3%A9rard-quenum-vanessa-rosa' },
  { year: 2017, type: 'residency', title: 'ITP Camp fellowship, New York University', venue: 'Tisch School of the Arts. Fellow and instructor, 2017 and 2026', city: 'New York' , href: 'https://itp.nyu.edu/camp/' },
  { year: 2017, type: 'residency', title: 'AnnexB', venue: '', city: 'Bushwick, New York', href: 'https://www.instagram.com/_annexb/' },
  { year: 2022, type: 'residency', title: 'Glitch ARTS+TECH Residency', venue: 'Château du Feÿ. Participant in the 2022, 2023, 2024 and 2025 editions', city: 'Joigny, France', featured: true, href: 'https://www.instagram.com/glitchresidency/', href2: 'https://www.chateaudufey.com/', href2Label: 'Château du Feÿ' },
  { year: 2014, type: 'residency', title: 'Transnational Dialogues', venue: 'Organised by European Alternatives. Cultural caravan and residency at MACAO', city: 'Milan, Italy' , href: 'https://transnationaldialogues.eu/' },

  // ——— Public art and community leadership ———
  { year: 2017, type: 'publicart', title: 'Pioneer Works perimeter mural', venue: '250 m² painting surrounding the Center for Art and Innovation', city: 'Red Hook, Brooklyn', featured: true, thread: 'the-silk-roads' , href: '/pioneer-works' },
  { year: 2016, type: 'publicart', title: 'Project coordinator, The Sankofa Project', venue: 'Quilombo of Pedra do Sal, during the Olympic Games', city: 'Rio de Janeiro', featured: true, thread: 'visible-memories' , href: 'https://www.rioonwatch.org/?p=31953' },
  { year: 2014, type: 'affiliation', title: 'Member, Zona Imaginária studio', venue: 'Shared studio with Maurício Hora at the Casa Amarela Art Center, 2014 to 2015. A low-income community initiative for the democratisation of art', city: 'Rio de Janeiro, Brazil', thread: 'mauricio-hora' , href: '/mauricio-hora' },
  { year: 2014, type: 'publicart', title: 'Commission for UN Women', venue: '', city: '' },
  { year: 2012, type: 'publicart', title: 'Coordinator, Arte, Rua & Pluralidade', venue: '500 m² mural directing 14 artists for the Roberto Marinho Foundation', city: 'Rio de Janeiro' , href: 'https://www.frm.org.br/' },
  { year: 2016, type: 'publicart', title: 'Refugee Nation', venue: 'A campaign by Amnesty International, August', city: 'Rio de Janeiro, Brazil' },
  { year: 2014, type: 'publicart', title: 'La Lucha Mapuche en el Mapocho', venue: 'Mural with Injusticia, supported by the Red de Apoyo a los Presos Políticos Mapuche, December', city: 'Santiago, Chile' , href: '/street-art' },
  { year: 2014, type: 'publicart', title: 'Há muitas noites na noite', venue: 'Time-lapse painting animations for the film by Silvio Tendler, 2014 and 2015', city: 'Rio de Janeiro, Brazil' , href: '/ha-muitas-noites' },
  { year: 2014, type: 'publicart', title: 'Galerio', venue: 'Collective mural project by EixoRio, with more than a hundred artists, April', city: 'Rio de Janeiro, Brazil' },
  { year: 2013, type: 'publicart', title: 'Festival CONCEGRAFF', venue: 'International graffiti and street art festival, collective mural, March', city: 'Concepción, Chile' , href: '/street-art' },
  { year: 2012, type: 'publicart', title: 'Festival Kolirius II', venue: 'International graffiti festival, collective mural, July', city: 'Macaé, Brazil' },
  { year: 2012, type: 'publicart', title: 'Embaixadores da Alegria', venue: 'Painting of the giant flags for the samba school carnival parade, February', city: 'Rio de Janeiro, Brazil' , href: '/more-projects' },
  { year: 2012, type: 'publicart', title: 'Flutuarte', venue: 'Quadrado da Urca and Gowanus Ballroom', city: 'Rio de Janeiro and New York' },
  { year: 2011, type: 'publicart', title: 'Les têtes de Saint-Denis', venue: 'Urban intervention with the Synesthésie art centre, January', city: 'Saint-Denis, Île-de-France' },
  { year: 2011, type: 'publicart', title: 'Coordinator, Rede Nami mural', venue: '80 m² mural with 8 women artists for the International Day for the Elimination of Violence against Women, Morro da Conceição', city: 'Rio de Janeiro' , href: 'https://redenami.com/' },
  { year: 2015, type: 'publicart', title: 'Blue Wall Project, GAU and Lisbon Municipality', venue: '', city: 'Lisbon', thread: 'the-silk-roads' , href: '/street-art' },
  { year: 2011, type: 'publicart', title: 'Public murals in Brazil, the United States, Portugal, Chile, France, Germany and Benin', venue: 'Including Santiago, Chile (2014) and Concepción, Chile (2013). Ongoing since 2011', city: '' , href: '/street-art' },
  { year: 2022, type: 'publicart', title: 'Penrose-tile stencils and body painting', venue: 'Mars College', city: 'Bombay Beach', thread: 'ethnocomputing' , href: 'https://mars.college/' },

  // ——— Publishing ———
  { year: 2010, type: 'publication', title: 'Co-founder and art director, Viajante do Tempo Editora', venue: 'Independent publishing house with more than 100 ISBNs. Selecting illustrators, acquiring titles, design coordination, covers and editing, and representing the house at the Frankfurt Book Fair (2013 and 2017), the Salon du Livre de Paris (2015) and the Bologna Children’s Book Fair (2014). Book design, covers and illustration direction. Represented at the Frankfurt Book Fair (2013, 2017), Bologna Children’s Book Fair (2014) and Salon du Livre de Paris (2015)', city: 'Brazil', featured: true , href: 'https://viajantedotempo.com/' },
  { year: 2013, type: 'publication', title: 'Luzia reluzia poesia', venue: 'Regina Gonçalves. Illustrated by Vanessa Rosa and Pedro Sarmento. Viajante do Tempo', city: 'Brazil' , href: 'https://viajantedotempo.com/produtos/luzia-reluzia-poesia/' },
  { year: 2014, type: 'publication', title: 'Brás, o pequeno Viajante', venue: 'Paula Novaes. Illustrated by Vanessa Rosa. Viajante do Tempo', city: 'Brazil' , href: 'https://viajantedotempo.com/produtos/bras-o-pequeno-viajante/' },
  { year: 2014, type: 'publication', title: 'As três vezes que Teotônio Rufino escapou do diabo', venue: 'Pedro Sarmento. Illustrated by Vanessa Rosa. Viajante do Tempo', city: 'Brazil' , href: 'https://viajantedotempo.com/produtos/as-tres-vezes-que-teotonio-rufino-escapou-do-diabo/' },
  { year: 2016, type: 'publication', title: 'Navio Negreiro no Mar do Branco do Olho', venue: 'Clovis Levi. Illustrated by Vanessa Rosa. Viajante do Tempo', city: 'Brazil' , href: 'https://viajantedotempo.com/produtos/navio-negreiro-no-mar-do-branco-do-olho/' },
  { year: 2016, type: 'publication', title: 'Deu Branco', venue: 'Regina Gonçalves. Illustrated by Vanessa Rosa and Pedro Sarmento. Viajante do Tempo', city: 'Brazil' , href: 'https://viajantedotempo.com/produtos/deu-branco/' },
  { year: 2020, type: 'publication', title: 'Os Mundos de Diana', venue: 'Written with Claire Parizel. Illustrated by Vanessa Rosa. Viajante do Tempo', city: 'Brazil' , href: 'https://viajantedotempo.com/produtos/os-mundos-de-diana/' },
  { year: 2020, type: 'publication', title: 'O Pequeno Príncipe brasileiro', venue: 'Paula Novaes. Illustrated by Vanessa Rosa. Viajante do Tempo', city: 'Brazil' , href: 'https://viajantedotempo.com/produtos/o-pequeno-principe-brasileiro/' },
  { year: 2020, type: 'publication', title: 'Este livro sente cócegas', venue: 'Regina Gonçalves. Illustrated by Vanessa Rosa. Viajante do Tempo', city: 'Brazil' , href: 'https://viajantedotempo.com/produtos/este-livro-sente-cocegas/' },
  { year: 2020, type: 'publication', title: 'Este livro tem medo de Grumm', venue: 'Regina Gonçalves. Illustrated by Regina Gonçalves and Vanessa Rosa. Viajante do Tempo', city: 'Brazil' , href: 'https://viajantedotempo.com/produtos/este-livro-tem-medo-de-grumm/' },
  { year: 2020, type: 'publication', title: 'Este livro está cheio de teias', venue: 'Regina Gonçalves. Illustrated by Regina Gonçalves and Vanessa Rosa. Viajante do Tempo', city: 'Brazil' , href: 'https://viajantedotempo.com/produtos/este-livro-esta-cheio-de-teias/' },
  { year: 2023, type: 'publication', title: 'Diana nos mundos das pintoras das Américas', venue: 'Written and illustrated by Vanessa Rosa. Viajante do Tempo', city: 'Brazil' , href: 'https://viajantedotempo.com/produtos/diana-nos-mundos-das-pintoras-das-americas/' },
  { year: 2025, type: 'publication', title: 'O segredo de Kweko', venue: 'Written and illustrated by Vanessa Rosa. Launched at the Rio Book Biennial, covered by Veja. Viajante do Tempo', city: 'Brazil' , href: 'https://viajantedotempo.com/produtos/o-segredo-de-kweko/' },

  // ——— Education ———
  { year: 2018, type: 'education', title: 'M.A., Design, Art & Technology', venue: 'Universidade Anhembi Morumbi. Advisor: Prof. Gilbertto Prado', city: 'São Paulo, Brazil' , href: 'https://www.anhembi.br/' },
  { year: 2012, type: 'education', title: 'B.A., Art History', venue: 'Universidade do Estado do Rio de Janeiro (UERJ)', city: 'Rio de Janeiro, Brazil' , href: 'https://www.uerj.br/' },
  { year: 2010, type: 'education', title: 'Philosophy and Visual Arts', venue: 'Université Paris 8, international exchange, 2010 to 2011', city: 'Saint-Denis, France' , href: 'https://www.univ-paris8.fr/' },


  // ——— Affiliations ———
  { year: 2011, type: 'affiliation', title: 'Artist and project coordinator, Rede Nami', venue: 'Feminist urban art network, 2011 to 2014. Murals, workshops and campaigns on women’s rights', city: 'Rio de Janeiro, Brazil' , href: 'https://redenami.com/' },
  { year: 2020, type: 'affiliation', title: 'Core member, Mars College', venue: '', city: 'Bombay Beach, California' , href: 'https://mars.college/' },
  { year: 2023, type: 'affiliation', title: 'Lead artist, Eden.art', venue: 'Creative AI platform and artist community', city: '' , href: 'https://www.eden.art/' },
  { year: 2023, type: 'affiliation', title: 'Principal, Human Imaginarium LLC', venue: '', city: 'United States' },
  { year: 2026, type: 'affiliation', title: 'Founding ambassador, Good Standing', venue: '', city: '' , href: 'https://goodstanding.co/' },
];

export const cvTypes = [
  { key: 'selected', label: 'Selected' },
  { key: 'all', label: 'Everything' },
  { key: 'exhibition', label: 'Exhibitions' },
  { key: 'solo', label: 'Solo shows' },
  { key: 'film', label: 'Film festivals' },
  { key: 'award', label: 'Awards' },
  { key: 'talk', label: 'Talks' },
  { key: 'teaching', label: 'Teaching' },
  { key: 'residency', label: 'Residencies' },
  { key: 'publicart', label: 'Public art' },
  { key: 'publication', label: 'Publishing' },
  { key: 'education', label: 'Education' },
  { key: 'affiliation', label: 'Affiliations' },
];

export const typeLabel = {
  exhibition: 'exhibition',
  solo: 'solo show',
  talk: 'talk',
  teaching: 'teaching',
  film: 'film',
  residency: 'residency',
  publication: 'publishing',
  publicart: 'public art',
  award: 'award',
  education: 'education',
  affiliation: 'affiliation',
};

export const byYear = [...cv].sort((a, b) => b.year - a.year);

// Marked with featured: true, and shown first via the Selected filter.
export const selected = byYear.filter((r) => r.featured);

// Upcoming is ordered soonest first, which is what a curator wants.
export const nowRows = cv
  .filter((r) => r.now)
  .sort((a, b) => a.year - b.year || (a.month ?? 0) - (b.month ?? 0));

export const cvForThread = (slug) => byYear.filter((r) => r.thread === slug);
