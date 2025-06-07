const express = require('express');
const router = express.Router();
const { getAllCountries, getCountryDetails } = require('../services/countryService');

router.get('/countries', async (req, res) => {
  const countries = await getAllCountries();
  res.json(countries);
});

router.get('/countries/:name', async (req, res) => {
  const country = await getCountryDetails(req.params.name);
  if (!country) return res.status(404).json({ message: 'Country not found' });
  res.json(country);
});

module.exports = router;