const countries = require('../data/countries.json');

function getAllCountries() {
  return countries.map(({ name, flag }) => ({ name, flag }));
}

function getCountryDetails(name) {
  return countries.find(c => c.name.toLowerCase() === name.toLowerCase());
}

module.exports = { getAllCountries, getCountryDetails };