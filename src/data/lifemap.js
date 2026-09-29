// ---------------------------------------------------------------------------
// The map at the foot of /info: everywhere the work has been. It is built
// from the same records as the rest of the site — the curriculum, the press
// list — plus the places that only live in the project pages (the walls in
// Valparaíso, the stencils in Porto). Coordinates are rounded: a drawing, not
// a chart. Places named only by country are left off rather than guessed.
// ---------------------------------------------------------------------------

import { byYear, typeLabel } from './cv.js';
import { pressByYear } from './press.js';

// Named places. Several spellings of one city point at the same key, so a
// neighbourhood in Rio or Brooklyn joins the city's pin instead of stacking.
const P = {
  rio: { label: 'Rio de Janeiro', lat: -22.9, lon: -43.2 },
  nyc: { label: 'New York', lat: 40.7, lon: -74.0 },
  sp: { label: 'São Paulo', lat: -23.6, lon: -46.6 },
  bombay: { label: 'Bombay Beach, Mars College', lat: 33.35, lon: -115.73 },
  sf: { label: 'San Francisco', lat: 37.8, lon: -122.4 },
  berkeley: { label: 'Berkeley', lat: 37.9, lon: -122.3 },
  healdsburg: { label: 'Healdsburg', lat: 38.6, lon: -122.9 },
  sanjose: { label: 'San José', lat: 37.3, lon: -121.9 },
  la: { label: 'Los Angeles', lat: 34.1, lon: -118.2 },
  sandiego: { label: 'San Diego', lat: 32.7, lon: -117.2 },
  seattle: { label: 'Seattle', lat: 47.6, lon: -122.3 },
  miami: { label: 'Miami', lat: 25.8, lon: -80.2 },
  chicago: { label: 'Chicago', lat: 41.9, lon: -87.6 },
  boulder: { label: 'Boulder', lat: 40.0, lon: -105.3 },
  austin: { label: 'Austin', lat: 30.3, lon: -97.7 },
  annapolis: { label: 'Annapolis', lat: 39.0, lon: -76.5 },
  mexico: { label: 'Mexico City', lat: 19.4, lon: -99.1 },
  chiapas: { label: 'Chiapas', lat: 16.7, lon: -93.1 },
  brasilia: { label: 'Brasília', lat: -15.8, lon: -47.9 },
  salvador: { label: 'Salvador', lat: -13.0, lon: -38.5 },
  fortaleza: { label: 'Fortaleza', lat: -3.7, lon: -38.5 },
  macae: { label: 'Macaé', lat: -22.4, lon: -41.8 },
  campos: { label: 'Campos dos Goytacazes', lat: -21.8, lon: -41.3 },
  acre: { label: 'Acre, with the Huni Kuin', lat: -9.0, lon: -70.5 },
  asuncion: { label: 'Asunción', lat: -25.3, lon: -57.6 },
  santiago: { label: 'Santiago', lat: -33.4, lon: -70.6 },
  valparaiso: { label: 'Valparaíso', lat: -33.0, lon: -71.6 },
  concepcion: { label: 'Concepción', lat: -36.8, lon: -73.0 },
  lisbon: { label: 'Lisbon', lat: 38.7, lon: -9.1 },
  porto: { label: 'Porto', lat: 41.15, lon: -8.6 },
  elche: { label: 'Elche', lat: 38.3, lon: -0.7 },
  saintdenis: { label: 'Saint-Denis, Paris', lat: 48.9, lon: 2.4 },
  reims: { label: 'Reims', lat: 49.3, lon: 4.0 },
  joigny: { label: 'Château du Feÿ, Burgundy', lat: 48.0, lon: 3.4 },
  toulouse: { label: 'Toulouse', lat: 43.6, lon: 1.4 },
  cannes: { label: 'Cannes', lat: 43.6, lon: 7.0 },
  london: { label: 'London', lat: 51.5, lon: -0.1 },
  berlin: { label: 'Berlin', lat: 52.5, lon: 13.4 },
  munich: { label: 'Munich', lat: 48.1, lon: 11.6 },
  frankfurt: { label: 'Frankfurt', lat: 50.1, lon: 8.7 },
  feuchtwangen: { label: 'Feuchtwangen', lat: 49.2, lon: 10.3 },
  buckeburg: { label: 'Bückeburg', lat: 52.3, lon: 9.0 },
  basel: { label: 'Basel', lat: 47.6, lon: 7.6 },
  milan: { label: 'Milan', lat: 45.5, lon: 9.2 },
  monza: { label: 'Monza', lat: 45.6, lon: 9.3 },
  venice: { label: 'Venice', lat: 45.4, lon: 12.3 },
  caserta: { label: 'Caserta', lat: 41.1, lon: 14.3 },
  vienna: { label: 'Vienna', lat: 48.2, lon: 16.4 },
  bratislava: { label: 'Bratislava', lat: 48.1, lon: 17.1 },
  budapest: { label: 'Budapest', lat: 47.5, lon: 19.0 },
  opole: { label: 'Opole', lat: 50.7, lon: 17.9 },
  timisoara: { label: 'Timișoara', lat: 45.8, lon: 21.2 },
  belgrade: { label: 'Belgrade', lat: 44.8, lon: 20.5 },
  sofia: { label: 'Sofia', lat: 42.7, lon: 23.3 },
  larissa: { label: 'Larissa', lat: 39.6, lon: 22.4 },
  kyiv: { label: 'Kyiv', lat: 50.5, lon: 30.5 },
  reykjavik: { label: 'Reykjavík', lat: 64.1, lon: -21.9 },
  cotonou: { label: 'Cotonou', lat: 6.4, lon: 2.4 },
  johannesburg: { label: 'Johannesburg', lat: -26.2, lon: 28.0 },
  uae: { label: 'United Arab Emirates', lat: 25.2, lon: 55.3 },
  bangalore: { label: 'Bengaluru', lat: 13.0, lon: 77.6 },
  bangkok: { label: 'Bangkok', lat: 13.8, lon: 100.5 },
  kohlon: { label: 'Koh Lon, Thailand', lat: 7.8, lon: 98.4 },
  bali: { label: 'Bali', lat: -8.4, lon: 115.2 },
  bacolod: { label: 'Bacolod', lat: 10.7, lon: 123.0 },
  beijing: { label: 'Beijing', lat: 39.9, lon: 116.4 },
  tianjin: { label: 'Tianjin', lat: 39.1, lon: 117.2 },
  shanghai: { label: 'Shanghai', lat: 31.2, lon: 121.5 },
  seoul: { label: 'Seoul', lat: 37.6, lon: 127.0 },
  jeju: { label: 'Jeju', lat: 33.5, lon: 126.5 },
  sydney: { label: 'Sydney', lat: -33.9, lon: 151.2 },
  brisbane: { label: 'Brisbane, Queensland', lat: -27.5, lon: 153.0 },
};

// The city strings as the curriculum writes them, pointed at the places above.
const CITY = {
  'Rio de Janeiro, Brazil': ['rio'], 'Rio de Janeiro': ['rio'], 'Copacabana, Rio de Janeiro, Brazil': ['rio'],
  'Leblon, Rio de Janeiro': ['rio'], 'Jacarepaguá, Rio de Janeiro': ['rio'], 'Rua Camerino, Rio de Janeiro': ['rio'],
  'Pedra do Sal, Rio de Janeiro': ['rio'], 'Rio de Janeiro and New York': ['rio', 'nyc'],
  'New York': ['nyc'], 'Brooklyn, New York': ['nyc'], 'Bushwick, New York': ['nyc'], 'Lower East Side, New York': ['nyc'],
  'Long Island City, New York': ['nyc'], 'Long Island City, Queens': ['nyc'], 'Red Hook, Brooklyn': ['nyc'],
  'São Paulo, Brazil': ['sp'], 'São Paulo': ['sp'], 'FIESP, São Paulo, Brazil': ['sp'],
  'Bombay Beach, California': ['bombay'], 'Bombay Beach': ['bombay'],
  'San Francisco': ['sf'], 'San Francisco, California': ['sf'], 'Berkeley, California': ['berkeley'],
  'Raven Theater, Healdsburg, California': ['healdsburg'],
  'Los Angeles': ['la'], 'Los Angeles, California': ['la'], 'Seattle': ['seattle'],
  'Miami': ['miami'], 'Miami, United States': ['miami'], 'Miami, Florida': ['miami'],
  'Chicago': ['chicago'], 'Boulder, Colorado': ['boulder'], 'Austin, Texas': ['austin'], 'Annapolis, Maryland': ['annapolis'],
  'Mexico City': ['mexico'], 'Chiapas, Mexico': ['chiapas'],
  'Brasília, Brazil': ['brasilia'], 'Ceilândia, Federal District, Brazil': ['brasilia'],
  'Salvador, Bahia, Brazil': ['salvador'], 'Fortaleza, Brazil': ['fortaleza'], 'Macaé, Brazil': ['macae'],
  'Campos dos Goytacazes, Brazil': ['campos'], 'Acre, Brazil': ['acre'], 'Asunción, Paraguay': ['asuncion'],
  'Santiago, Chile': ['santiago'], 'Concepción, Chile': ['concepcion'],
  'Lisbon, Portugal': ['lisbon'], 'Lisbon': ['lisbon'], 'Elche, Spain': ['elche'],
  'Saint-Denis, France': ['saintdenis'], 'Saint-Denis, Île-de-France': ['saintdenis'],
  'Reims, France': ['reims'], 'Joigny, France': ['joigny'], 'Toulouse, France': ['toulouse'], 'Cannes, France': ['cannes'],
  'Berlin, Germany': ['berlin'], 'Munich, Germany': ['munich'], 'Frankfurt, Germany': ['frankfurt'],
  'Feuchtwangen, Germany': ['feuchtwangen'], 'Basel, Switzerland': ['basel'],
  'Milan, Italy': ['milan'], 'Monza, Italy': ['monza'], 'Venice, Italy': ['venice'], 'Caserta, Italy': ['caserta'],
  'Vienna, Budapest and Bratislava': ['vienna', 'budapest', 'bratislava'],
  'Opole, Poland': ['opole'], 'Timișoara, Romania': ['timisoara'], 'Timiș and Dumbrăvița, Romania': ['timisoara'],
  'Belgrade, Serbia': ['belgrade'], 'Sofia, Bulgaria': ['sofia'], 'Larissa, Greece': ['larissa'],
  'Kyiv, Ukraine': ['kyiv'], 'Reykjavík, Iceland': ['reykjavik'],
  'Cotonou, Benin': ['cotonou'], 'United Arab Emirates': ['uae'], 'Bangalore, India': ['bangalore'], 'Bengaluru, India': ['bangalore'],
  'Bangkok, Thailand': ['bangkok'], 'Koh Lon, Thailand': ['kohlon'], 'Bali, Indonesia': ['bali'],
  'Bacolod, Philippines': ['bacolod'], 'Beijing and Shanghai, China': ['beijing', 'shanghai'], 'Tianjin, China': ['tianjin'],
  'Seoul, South Korea': ['seoul'], 'Jeju Halla University, Jeju City, South Korea': ['jeju'],
  'Sydney, Australia': ['sydney'], 'Brisbane, Australia': ['brisbane'], 'Queensland, Australia': ['brisbane'],
};

// Rows whose place is in the venue rather than the city field.
const BY_TITLE = [
  [/NeurIPS/i, ['sandiego']],
  [/CVPR/i, ['seattle']],
  [/NVIDIA GTC|GTC 20/i, ['sanjose']],
  [/Foresight Institute Vision Weekend/i, ['buckeburg']],
];

// Press, pinned where the outlet is based. National, online and wire outlets
// are left off rather than given a city they do not really have.
const OUTLET = {
  'Veja Rio': ['rio'], 'Diário do Rio': ['rio'], 'O Globo': ['rio'], 'RioOnWatch': ['rio'],
  'Museu de Arte do Rio': ['rio'], 'Folha da Rua Larga': ['rio'], 'Correio da Manhã': ['rio'], 'TV Globo, Jornal da Noite': ['rio'],
  'Correio Braziliense': ['brasilia'],
  'Folha de S.Paulo': ['sp'], 'Veja': ['sp'], 'Época Negócios, Globo': ['sp'], 'Forbes Brasil': ['sp'], 'GQ Brasil': ['sp'],
  'TV Cultura': ['sp'], 'PublishNews': ['sp'], 'CartaCapital': ['sp'], 'Revista da Cultura': ['sp'],
  'Le Journal de Saint-Denis': ['saintdenis'],
  'Red Hook Star-Revue': ['nyc'], 'Street Art NYC': ['nyc'], 'StreetArtNYC': ['nyc'],
  'The Guardian': ['london'], 'KCRW Reports': ['la'], 'Art and Cake, Los Angeles': ['la'],
  'eNCA, South Africa': ['johannesburg'],
};

// What the record does not say but the project pages do. Anything the
// curriculum already has stays out of here, so no place is listed twice.
const EXTRA = [
  { at: 'rio', year: 2010, text: 'First street art, Morro da Conceição' },
  { at: 'rio', year: 2014, text: 'Pedra do Sal mural' },
  { at: 'rio', year: 2015, text: 'Tiles on the planters of Botafogo' },
  { at: 'berlin', year: 2010, text: 'Philosophers in the snow, street art' },
  { at: 'valparaiso', year: 2013, text: 'Street art' },
  { at: 'porto', year: 2015, text: 'Stencils, the start of Silk Roads' },
  { at: 'sp', year: 2017, text: 'Mural with Vinicius Caps' },
  { at: 'bombay', year: 2020, text: 'Mars College, every winter since' },
  { at: 'kohlon', year: 2018, text: 'Sketchbook, Thailand' },
];

const KIND = { ...typeLabel, exhibition: 'exhibition', solo: 'solo show', film: 'screening', publicart: 'public art' };

const pins = new Map();
const put = (keys, year, text) => {
  for (const k of keys) {
    const p = P[k];
    if (!p) continue;
    if (!pins.has(k)) pins.set(k, { ...p, items: [] });
    const line = `${year ?? ''}${year ? ' · ' : ''}${text}`;
    if (!pins.get(k).items.some((it) => it.line === line)) pins.get(k).items.push({ year: Number(year) || 0, line });
  }
};

for (const r of byYear) {
  const keys = CITY[(r.city || '').trim()] ?? BY_TITLE.find(([re]) => re.test(r.title))?.[1];
  if (!keys) continue;
  const kind = KIND[r.type] ? `, ${KIND[r.type]}` : '';
  put(keys, r.year, `${r.title}${kind}`);
}
for (const p of pressByYear) {
  const keys = OUTLET[p.outlet];
  if (keys) put(keys, p.year, `Press: ${p.outlet}`);
}
for (const e of EXTRA) put([e.at], e.year, e.text);

// newest first inside each pin; the busiest places drawn last, so on top
export const lifePins = [...pins.values()]
  .map((p) => ({ ...p, items: p.items.sort((a, b) => b.year - a.year).map((i) => i.line) }))
  .sort((a, b) => a.items.length - b.items.length);
