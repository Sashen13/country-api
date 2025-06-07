const service = require('../services/countryService');

exports.getAllCountries = (req, res) => {
  const countries = service.getAllCountries();
  res.json(countries);
};

exports.getCountryDetails = (req, res) => {
  const { name } = req.params;
  const country = service.getCountryDetails(name);
  if (!country) return res.status(404).json({ error: 'Country not found' });

  const { name: n, capital, population } = country;
  res.json({ name: n, capital, population });
};