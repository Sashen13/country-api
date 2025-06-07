jest.mock('../../data/countries.json', () => [
  {
    name: 'France',
    flag: 'https://flagcdn.com/fr.svg',
    capital: 'Paris',
    population: 67000000,
  },
  {
    name: 'Germany',
    flag: 'https://flagcdn.com/de.svg',
    capital: 'Berlin',
    population: 83000000,
  }
], { virtual: true });

const { getAllCountries, getCountryDetails } = require('../../services/countryService');

describe('Country Service', () => {
  test('getAllCountries should return array with name and flag only', async () => {
  const countries = await getAllCountries();

  // Check it's an array and not empty
  expect(Array.isArray(countries)).toBe(true);
  expect(countries.length).toBeGreaterThan(1);

  // Check first few countries have the expected keys and flag URL format
  for (const c of countries) {
    expect(c).toHaveProperty('name');
    expect(c).toHaveProperty('flag');
    expect(typeof c.flag).toBe('string');
    expect(c.flag).toMatch(/^https?:\/\/.+/);
  }

  // Optionally check specific countries exist
  const france = countries.find(c => c.name === 'France');
  expect(france).toBeDefined();
  expect(france.flag).toMatch(/^https?:\/\/.+/);

  const germany = countries.find(c => c.name === 'Germany');
  expect(germany).toBeDefined();
  expect(germany.flag).toMatch(/^https?:\/\/.+/);
});

test('getCountryDetails should return correct details (case-insensitive)', async () => {
  const france = await getCountryDetails('france');
  expect(france).toMatchObject({
    name: 'France',
    capital: 'Paris',
    population: 67000000,
  });
  expect(typeof france.flag).toBe('string');
  expect(france.flag).toMatch(/^https?:\/\/.+/);

  const germany = await getCountryDetails('GERMANY');
  expect(germany).toMatchObject({
    name: 'Germany',
    capital: 'Berlin',
    population: 83000000,
  });
  expect(typeof germany.flag).toBe('string');
  expect(germany.flag).toMatch(/^https?:\/\/.+/);
});


  test('getCountryDetails should return undefined for unknown country', async () => {
    const result = await getCountryDetails('Atlantis');
    expect(result).toBeUndefined();
  });
});