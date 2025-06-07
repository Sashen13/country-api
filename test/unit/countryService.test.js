const { getAllCountries, getCountryDetails } = require('../../services/countryService');

jest.mock('../../data/countries.json', () => ([
  {
    name: 'France',
    flag: '🇫🇷',
    capital: 'Paris',
    population: 67000000
  },
  {
    name: 'Germany',
    flag: '🇩🇪',
    capital: 'Berlin',
    population: 83000000
  }
]));

describe('Country Service', () => {
  test('getAllCountries should return array with name and flag only', () => {
    const countries = getAllCountries();
    expect(countries).toEqual([
      { name: 'France', flag: '🇫🇷' },
      { name: 'Germany', flag: '🇩🇪' }
    ]);
  });

  test('getCountryDetails should return correct details (case-insensitive)', () => {
    const france = getCountryDetails('france');
    expect(france).toEqual({
      name: 'France',
      flag: '🇫🇷',
      capital: 'Paris',
      population: 67000000
    });

    const germany = getCountryDetails('GERMANY');
    expect(germany).toEqual({
      name: 'Germany',
      flag: '🇩🇪',
      capital: 'Berlin',
      population: 83000000
    });
  });

  test('getCountryDetails should return undefined for unknown country', () => {
    const result = getCountryDetails('Atlantis');
    expect(result).toBeUndefined();
  });
});