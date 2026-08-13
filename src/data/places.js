// ---------------------------------------------------------------------------
// Where the films have been shown, for the map. Latitude and longitude are
// rounded to the nearest tenth: this is a drawing, not a chart.
//
// The key is the `city` string exactly as it appears on a festival row, so the
// map is built from the same record as the list and cannot drift from it.
// Anything without an entry here simply does not get a pin.
//
// A value may be an array when one entry in the record covers more than one
// city: the film screened in each of them, so each gets its own pin.
// ---------------------------------------------------------------------------

export const places = {
  'Austin, Texas': { label: 'Austin', lat: 30.3, lon: -97.7 },
  'Bacolod, Philippines': { label: 'Bacolod', lat: 10.7, lon: 123.0 },
  'Bali, Indonesia': { label: 'Bali', lat: -8.4, lon: 115.2 },
  'Bangalore, India': { label: 'Bangalore', lat: 13.0, lon: 77.6 },
  'Bangkok, Thailand': { label: 'Bangkok', lat: 13.8, lon: 100.5 },
  'Beijing and Shanghai, China': [
    { label: 'Beijing', lat: 39.9, lon: 116.4 },
    { label: 'Shanghai', lat: 31.2, lon: 121.5 },
  ],
  'Belgrade, Serbia': { label: 'Belgrade', lat: 44.8, lon: 20.5 },
  'Berlin, Germany': { label: 'Berlin', lat: 52.5, lon: 13.4 },
  'Boulder, Colorado': { label: 'Boulder', lat: 40.0, lon: -105.3 },
  'Brisbane, Australia': { label: 'Brisbane', lat: -27.5, lon: 153.0 },
  'Campos dos Goytacazes, Brazil': { label: 'Campos dos Goytacazes', lat: -21.8, lon: -41.3 },
  'Cannes, France': { label: 'Cannes', lat: 43.6, lon: 7.0 },
  'Caserta, Italy': { label: 'Caserta', lat: 41.1, lon: 14.3 },
  'Chiapas, Mexico': { label: 'Chiapas', lat: 16.8, lon: -92.6 },
  Chicago: { label: 'Chicago', lat: 41.9, lon: -87.6 },
  'Elche, Spain': { label: 'Elche', lat: 38.3, lon: -0.7 },
  'FIESP, São Paulo, Brazil': { label: 'São Paulo', lat: -23.6, lon: -46.6 },
  'Feuchtwangen, Germany': { label: 'Feuchtwangen', lat: 49.2, lon: 10.3 },
  'Kyiv, Ukraine': { label: 'Kyiv', lat: 50.5, lon: 30.5 },
  'Larissa, Greece': { label: 'Larissa', lat: 39.6, lon: 22.4 },
  'Los Angeles': { label: 'Los Angeles', lat: 34.1, lon: -118.2 },
  'Mexico City': { label: 'Mexico City', lat: 19.4, lon: -99.1 },
  Miami: { label: 'Miami', lat: 25.8, lon: -80.2 },
  'Milan, Italy': { label: 'Milan', lat: 45.5, lon: 9.2 },
  'Monza, Italy': { label: 'Monza', lat: 45.6, lon: 9.3 },
  Netherlands: { label: 'Netherlands', lat: 52.1, lon: 5.3 },
  'New York': { label: 'New York', lat: 40.7, lon: -74.0 },
  'Opole, Poland': { label: 'Opole', lat: 50.7, lon: 17.9 },
  'Queensland, Australia': { label: 'Queensland', lat: -22.0, lon: 144.0 },
  'Reims, France': { label: 'Reims', lat: 49.3, lon: 4.0 },
  'Reykjavík, Iceland': { label: 'Reykjavík', lat: 64.1, lon: -21.9 },
  'San Francisco': { label: 'San Francisco', lat: 37.8, lon: -122.4 },
  Seattle: { label: 'Seattle', lat: 47.6, lon: -122.3 },
  'Seoul, South Korea': { label: 'Seoul', lat: 37.6, lon: 127.0 },
  'Sofia, Bulgaria': { label: 'Sofia', lat: 42.7, lon: 23.3 },
  'Sydney, Australia': { label: 'Sydney', lat: -33.9, lon: 151.2 },
  'Tianjin, China': { label: 'Tianjin', lat: 39.1, lon: 117.2 },
  'Timișoara, Romania': { label: 'Timișoara', lat: 45.8, lon: 21.2 },
  'Toulouse, France': { label: 'Toulouse', lat: 43.6, lon: 1.4 },
  'United Arab Emirates': { label: 'Dubai', lat: 25.2, lon: 55.3 },
  'Venice, Italy': { label: 'Venice', lat: 45.4, lon: 12.3 },
  'Vienna, Budapest and Bratislava': { label: 'Vienna, Budapest and Bratislava', lat: 47.9, lon: 17.6 },
  // screenings that are not in the festival record but belong on the map
  'Bombay Beach, California': { label: 'Bombay Beach', lat: 33.4, lon: -115.7 },
  'Salvador, Bahia, Brazil': { label: 'Salvador', lat: -12.97, lon: -38.5 },
  'Rio de Janeiro, Brazil': { label: 'Rio de Janeiro', lat: -22.9, lon: -43.2 },
};

// A couple of screenings live outside the festival list. They are pinned too.
export const extraPins = [
  { city: 'Bombay Beach, California', festival: 'Mars College AI Film Festival', year: 2023 },
  { city: 'Kyiv, Ukraine', festival: 'A screening in a bomb shelter', year: 2025 },
  { city: 'Salvador, Bahia, Brazil', festival: 'Artelligent', year: 2025 },
  { city: 'Rio de Janeiro, Brazil', festival: 'Meta Gallery', year: 2025 },
];
