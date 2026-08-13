// ---------------------------------------------------------------------------
// The complete festival record for the films, taken from
// littlemartians.world/film-festivals. These rows feed the Films filter on
// /info and the /film-festivals page.
//
// `outcome` is the festival's own wording: award, finalist, semi-finalist,
// quarter-finalist, nominee, honorable mention, or official selection.
// Where the source page gives no year, the film's own year is used.
// ---------------------------------------------------------------------------

export const FESTIVAL_SITES = {
  'FICMA, Festival Internacional de Cine con Medios Alternativos': 'https://ficmafest.org/',
  'FILE, Electronic Language International Festival': 'https://file.org.br/',
  'AA29 Video Project': 'https://www.instagram.com/aa29_video_project_festival_/',
  'Beyond Filmfestival': 'https://www.beyond-filmfestival.com/en/',
  'Tianjin International Academic Film Festival': 'https://tiaff.my.canvasite.cn/',
  'The Galactic Imaginarium Film Festival': 'https://filmfreeway.com/TheGalacticImaginariumFilmFestival',
  'Dubai City Film Festival': 'https://filmfreeway.com/DubaiCityFilmFestival',
  'AI International Film Festival': 'https://filmfreeway.com/AIInternationalFilmFestival',
  'Experimental Brasil': 'https://experimentalbrasiljournal.neocities.org/interviews#2026-2026-vanessa-rosa',
  'Experimenta Brasil': 'https://www.experimentabrasil.com.br/',
  'AI Artist': 'https://aiartistfestival.com/',
  'Bangkok Movie Awards': 'https://www.bangkokmovieawards.com/',
  'Shapeshift Festival': 'https://shapeshiftfestival.com/',
  'MetaCannes Film3 Festival': 'https://www.metacannes.com/',
  'Bakunawa Fest': 'https://www.bakunawafest.com/',
  'Seoul International AI Film Festival': 'https://www.seoulaiff.com/',
  'Dasein AI Film Festival': 'https://www.daseinfilmfestival.com/past-winners',
  'BAIFF, Burano Artificial Intelligence Film Festival': 'https://www.baiffcinema.eu/',
  'Cannes World Film Festival': 'https://www.world-film-festival.com/en/official-results/',
  'Korea International AI Film Festival': 'https://www.gcon.or.kr/eng/aiff.html',
  'International Avant-Garde Film Awards': 'https://iagfilmawards.com/best-art-direction-2024-little-martians',
  'CineTech Future Fest': 'https://www.cinetechfuturefest.com/',
  'Reale Film Festival': 'https://www.realefilmfestival.com/',
  'Monza Film Fest': 'https://monzafilmfest.com/',
  'Night of Shorts': 'https://www.nightofshorts.com/',
  'Night of Drama Shorts': 'https://www.nightofshorts.com/',
  'Absurd Film Festival': 'https://www.assurdofilmfestival.com/vecchie-edizioni-old-editions/',
  'Moondance International Film Festival': 'https://www.moondancefilmfestival.com/',
  'Reel Intelligence': 'https://www.reel-intelligence.org/news/unveiling-the-universe-of-little-martians-vanessa-rosas-ai-enhanced-storytelling',
  'ORION International Film Festival': 'https://orioniff.com/',
  'Austin AI Film Festival': 'https://www.austinaifilmfestival.com/',
  'Neu Wave AI Film Festival': 'https://filmfreeway.com/aineuwavefilmfestival',
  'YETI FilmFest': 'https://www.yetifilmfest.com/',
  'Red Movie Awards': 'https://www.redmovieawards.com/',
  'Chroma Art Film Festival': 'https://chromaartfilmfestival.org/23-selected-films/meet-the-artist-vanessa-rosa/',
  'Blue Danube Film Festival': 'https://www.bluedanubefilmfestival.com/',
  'Chicago AI Film Festival': 'https://www.chicagoaifilmfestival.com/',
  'Indie Shorts Mag Short Film Festival': 'https://www.indieshortsmag.com/',
  'LA Independent Women Film Awards': 'https://www.laindependentwomenfilmawards.com/',
  'The Seattle AI Film Festival': 'https://www.seattleaifilmfestival.com/',
  'ROS Film Festival': 'https://rosfilmfestival.com/',
  'Bali International AI Film Festival': 'https://balifilmfestival.com/',
};


// A page about the film itself always beats the festival's front door.
// Keyed 'festival :: film', so one festival can point to different pages for
// different films. Falls back to FESTIVAL_SITES when there is no entry here.
export const FILM_PAGES = {
  'FILE, Electronic Language International Festival :: Little Martians: Dear Human, My Muse':
    'https://file.org.br/file-sao-paulo-2026/',
  'BAIFF, Burano Artificial Intelligence Film Festival :: Little Martians: Dear Human, My Muse':
    'https://www.baiffcinema.eu/movies/little-martians-dear-human-my-muse/',
  'MetaCannes Film3 Festival :: Verdelis & Mycos':
    'https://festival.film3.io/2026-program/verdelis-and-mycos',
  'Bakunawa Fest :: Verdelis & Mycos':
    'https://www.bakunawafest.com/onlinefilms-aiprogram12',
  'ORION International Film Festival :: Little Martians: Dear Human, My Muse':
    'https://orioniff.com/films--awards-2025.html',
  'ROS Film Festival :: Brief History of Consciousness in the Simulation':
    'https://rosfilmfestival.com/viernes-24-de-noviembre/',
  'Absurd Film Festival :: Little Martians: Dear Human, My Muse':
    'https://www.assurdofilmfestival.com/vecchie-edizioni-old-editions/',
  'Korea International AI Film Festival :: Little Martians: Dear Human, My Muse':
    'https://www.gcon.or.kr/eng/aiff.html',
  'Dasein AI Film Festival :: Verdelis & Mycos':
    'https://www.daseinfilmfestival.com/past-winners',
  'International Avant-Garde Film Awards :: Little Martians: Dear Human, My Muse':
    'https://iagfilmawards.com/best-art-direction-2024-little-martians',
  'Chroma Art Film Festival :: Little Martians: Dear Human, My Muse':
    'https://chromaartfilmfestival.org/23-selected-films/meet-the-artist-vanessa-rosa/',
  'Reel Intelligence :: Little Martians: Dear Human, My Muse':
    'https://www.reel-intelligence.org/news/unveiling-the-universe-of-little-martians-vanessa-rosas-ai-enhanced-storytelling',
  'Experimental Brasil :: Verdelis & Mycos':
    'https://experimentalbrasiljournal.neocities.org/interviews#2026-2026-vanessa-rosa',
};


const VM = 'Verdelis & Mycos';
const DH = 'Little Martians: Dear Human, My Muse';
const LA = 'Little Martians & Abraham';
const BH = 'Brief History of Consciousness in the Simulation';

// Which festivals matter, chosen by Vanessa. This is a judgement, not a rule:
// a selection at a festival she rates can outrank a monthly prize elsewhere.
// Keyed 'year|festival|film|outcome', because one festival can list the same
// film twice. Awards have their own filter on the page.
const SELECTED = new Set([
  // wins worth leading with
  `2024|Cannes World Film Festival|${DH}|Best Female Director, Super Short Film`,
  `2024|Korea International AI Film Festival|${DH}`,
  // festivals that matter whether or not they gave a prize
  `2025|Shapeshift Festival|${DH}`,
  `2026|FILE, Electronic Language International Festival|${DH}`,
]);

const r = (year, film, festival, outcome, city) => ({
  featured:
    SELECTED.has(`${year}|${festival}|${film}`) ||
    SELECTED.has(`${year}|${festival}|${film}|${outcome}`),
  year,
  type: 'film',
  film,
  outcome,
  title: festival,
  venue: [film, outcome].filter(Boolean).join('. '),
  city: city ?? '',
  thread: 'little-martians',
  href: FILM_PAGES[`${festival} :: ${film}`] ?? FESTIVAL_SITES[festival],
});

export const festivalRows = [
  // ——— Verdelis & Mycos ———
  r(2026, VM, 'Experimental Brasil', 'Best Experimental Film Made with AI', 'Campos dos Goytacazes, Brazil'),
  r(2026, VM, 'AI Artist', 'Official selection', 'Beijing and Shanghai, China'),
  r(2026, VM, 'BAIFF, Burano Artificial Intelligence Film Festival', 'Official selection', 'Venice, Italy'),
  r(2026, VM, 'Shapeshift Festival', 'Official selection', 'Sofia, Bulgaria'),
  r(2026, VM, 'MetaCannes Film3 Festival', 'Official selection', 'Cannes, France'),
  r(2025, VM, 'AI International Film Festival', 'Best Musical', ''),
  r(2025, VM, 'Bangkok Movie Awards', 'Best AI Film', 'Bangkok, Thailand'),
  r(2025, VM, 'Dubai City Film Festival', 'Animated Film Award', 'United Arab Emirates'),
  r(2025, VM, 'Bali International AI Film Festival', 'Finalist', 'Bali, Indonesia'),
  r(2025, VM, 'Tianjin International Academic Film Festival', 'Semi-finalist', 'Tianjin, China'),
  r(2025, VM, 'Hollywood AI Short Film Awards', 'Quarter-finalist', 'Los Angeles'),
  r(2025, VM, 'AI Film Awards, Vertical Edition', 'Honorable mention', ''),
  r(2025, VM, 'Bakunawa Fest', 'Official selection', 'Bacolod, Philippines'),
  r(2025, VM, 'Seoul International AI Film Festival', 'Official selection', 'Seoul, South Korea'),
  r(2025, VM, 'Dasein AI Film Festival', 'Official selection', 'San Francisco'),
  r(2025, VM, 'New Technologies AI Film Festival', 'Official selection', 'Kyiv, Ukraine'),
  r(2025, VM, 'AI Video Awards, Dutch AI Week', 'Official selection', 'Netherlands'),

  // ——— Little Martians: Dear Human, My Muse ———
  r(2026, DH, 'FILE, Electronic Language International Festival', 'Official selection, animation programme', 'FIESP, São Paulo, Brazil'),
  r(2024, DH, 'Cannes World Film Festival', 'Best Female Director, Super Short Film', 'Cannes, France'),
  r(2024, DH, 'Korea International AI Film Festival', 'Global South Special Award', 'Seoul, South Korea'),
  r(2024, DH, 'International Avant-Garde Film Awards', 'Best Art Direction, and Best Original Song', 'New York'),
  r(2024, DH, 'CineTech Future Fest', 'Best Original Soundtrack, and Best Short Film with AI', 'Opole, Poland'),
  r(2024, DH, 'Reale Film Festival', 'Best Original Idea, bimonthly award', 'Milan, Italy'),
  r(2024, DH, 'Monza Film Fest', 'Best AI Film', 'Monza, Italy'),
  r(2024, DH, 'Night of Shorts', 'Best Film', 'Milan, Italy'),
  r(2024, DH, 'Night of Drama Shorts', 'Best Film', 'Milan, Italy'),
  r(2024, DH, 'Absurd Film Festival', 'Best VFX, monthly award', 'Milan, Italy'),
  r(2024, DH, 'The Galactic Imaginarium Film Festival', 'Best Sci-Fi or Fantasy Short Film Made with AI', 'Timișoara, Romania'),
  r(2025, DH, 'Moondance International Film Festival', 'Short Animation Film Award', 'Boulder, Colorado'),
  r(2025, DH, 'Reel Intelligence', 'Finalist, AI Short Film', 'Sydney, Australia'),
  r(2024, DH, 'Qld XR Festival', 'Finalist, Best in Creative AI', 'Brisbane, Australia'),
  r(2024, DH, 'AA29 Video Project', 'Finalist, music video', 'Caserta, Italy'),
  r(2024, DH, 'Cannes World Film Festival', 'Finalist, Best Artificial Intelligence Film', 'Cannes, France'),
  r(2025, DH, 'ORION International Film Festival', 'Finalist, Best AI Film', 'Berlin, Germany'),
  r(2025, DH, 'Austin AI Film Festival', 'Semi-finalist, Best Experimental', 'Austin, Texas'),
  r(2024, DH, 'Neu Wave AI Film Festival', 'Semi-finalist', 'Los Angeles'),
  r(2024, DH, 'AI Film Awards', 'Nominee, AI Short Film', ''),
  r(2024, DH, 'YETI FilmFest', 'Nominee, animation', 'Reykjavík, Iceland'),
  r(2024, DH, 'Meta Morph AI Film Award', 'Nominee, AI Evolution Award', ''),
  r(2024, DH, 'Red Movie Awards', 'Honorable mention, Best Animation', 'Reims, France'),
  r(2024, DH, 'Chroma Art Film Festival', 'Honorable mention, AI-driven films', 'Miami'),
  r(2025, DH, 'Shapeshift Festival', 'Official selection, art and technology film', 'Sofia, Bulgaria'),
  r(2025, DH, 'Sofia World Film Festival', 'Official selection', 'Sofia, Bulgaria'),
  r(2025, DH, 'Beyond Filmfestival', 'Official selection, utopian films', 'Feuchtwangen, Germany'),
  r(2024, DH, 'Larissa Lumina AI Short Film Festival', 'Official selection, narratives', 'Larissa, Greece'),
  r(2024, DH, 'AMT International Film Festival', 'Official selection, AI and experimental', 'New York'),
  r(2024, DH, 'Blue Danube Film Festival', 'Official selection, animation', 'Vienna, Budapest and Bratislava'),
  r(2024, DH, 'BAIFF, Burano Artificial Intelligence Film Festival', 'Official selection, music video, and animation and fantasy', 'Venice, Italy'),
  r(2024, DH, 'AI Artist', 'Official selection', 'Beijing and Shanghai, China'),
  r(2024, DH, 'Bengaluru International Short Film Festival', 'Official selection, animation', 'Bangalore, India'),
  r(2024, DH, 'ONED Art and Experimental Film Festival', 'Official selection', 'Toulouse, France'),
  r(2024, DH, 'Chicago AI Film Festival', 'Official selection, trailer and concept', 'Chicago'),
  r(2024, DH, 'Indie Shorts Mag Short Film Festival', 'Official selection', ''),
  r(2024, DH, 'Las Flores Web3 Film Festival', 'Official selection', 'Mexico City'),
  r(2024, DH, 'LA Independent Women Film Awards', 'Official selection, animation', 'Los Angeles'),
  r(2024, DH, 'FICMA, Festival Internacional de Cine con Medios Alternativos', 'Official selection, experimental short', 'Mexico City'),
  r(2024, DH, 'Cosmo Genetics Film Festival', 'Official selection, science and technology', 'Chiapas, Mexico'),
  r(2024, DH, 'Tiny Mountains Festival', 'Official selection, tiny world films', 'Queensland, Australia'),

  // ——— Little Martians & Abraham ———
  r(2025, LA, 'Neu Wave AI Film Festival', 'Finalist', 'Los Angeles'),
  r(2025, LA, 'AI Film Fest Serbia', 'Semi-finalist', 'Belgrade, Serbia'),
  r(2025, LA, 'Experimenta Brasil', 'Official selection, Best Experimental Film Made with AI', 'Campos dos Goytacazes, Brazil'),
  r(2025, LA, 'The Seattle AI Film Festival', 'Official selection, Best Experimental Short', 'Seattle'),
  r(2025, LA, 'BAIFF, Burano Artificial Intelligence Film Festival', 'Official selection, animation', 'Venice, Italy'),

  // ——— Brief History of Consciousness in the Simulation ———
  r(2023, BH, 'ROS Film Festival', 'Official selection', 'Elche, Spain'),
  r(2023, BH, 'Chroma Art Film Festival', 'Official selection, AI-driven films', 'Miami'),
];

// The films themselves, kept for the /film-festivals page.
export const filmography = [
  { year: 2026, title: 'Little Martians: Season One', note: 'Seven episodes, in production' },
  { year: 2025, title: VM, note: 'Short film' },
  { year: 2025, title: LA, note: 'Short film, with Gene Kogan. Sold at Christie’s with the original sculpture' },
  { year: 2024, title: DH, note: 'Animated from hand-built ceramic sculptures with 3-D animation and generative models' },
  { year: 2023, title: BH, note: 'One of four featured works in the NVIDIA AI Art Gallery, 2023 to 2025' },
];
