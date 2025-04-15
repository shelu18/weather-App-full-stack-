const express = require('express');
const router = express.Router();
const { fetchWeather } = require('../controllers/weatherController');

// Route: /api/weather/current?city=Delhi
router.get('/current', fetchWeather);

module.exports = router;
