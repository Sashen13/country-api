const fs = require('fs');
const path = require('path');
const axios = require('axios');

const countriesPath = path.join(__dirname, '../data/countries.json');

function loadCountries() {
  const raw = fs.readFileSync(countriesPath, 'utf-8');
  return JSON.parse(raw);
}

async function getFlagFromAPI(name) {
  try {
    const res = await axios.get(`https://restcountries.com/v3.1/name/${encodeURIComponent(name)}?fullText=true`);
    return res.data[0]?.flags?.svg || res.data[0]?.flags?.png || null;
  } catch (err) {
    console.warn(`⚠️ Could not fetch flag for ${name}:`, err.response?.status || err.message);
    return null;
  }
}

async function getAllCountries() {
  let countries = loadCountries();
  let updated = false;

  for (const country of countries) {
    if (!country.flag) {
      const flag = await getFlagFromAPI(country.name);
      if (flag) {
        country.flag = flag;
        updated = true;
      }
    }
  }

  if (updated) {
    fs.writeFileSync(countriesPath, JSON.stringify(countries, null, 2));
    console.log('Countries.json updated with new flag data.');
  }

  return countries.map(({ name, flag }) => ({ name, flag }));
}

async function getCountryDetails(name) {
  const countries = loadCountries();
  return countries.find(c => c.name.toLowerCase() === name.toLowerCase());
}

module.exports = {
  getAllCountries,
  getCountryDetails
};