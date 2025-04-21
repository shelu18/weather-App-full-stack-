// routes/weatherRoutes.js

const express = require("express");
const router = express.Router();
const {
  fetchWeather,
  fetchForecast,
} = require("../controllers/weatherController");

router.get("/current", fetchWeather);
router.get("/forecast", fetchForecast);

module.exports = router;
