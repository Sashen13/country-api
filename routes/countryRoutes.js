const express = require('express');
const router = express.Router();
const controller = require('../controllers/countryController');

router.get('/countries', controller.getAllCountries);
router.get('/countries/:name', controller.getCountryDetails);

module.exports = router;