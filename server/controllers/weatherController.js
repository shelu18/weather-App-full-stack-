// controllers/weatherController.js

const {
  getCurrentWeather,
  getForecastWeather,
} = require("../Services/weatherService");

const fetchWeather = async (req, res) => {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: "City name is required" });
  }

  try {
    const weatherData = await getCurrentWeather(city);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const fetchForecast = async (req, res) => {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: "City name is required" });
  }

  try {
    const forecastData = await getForecastWeather(city);
    res.json(forecastData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  fetchWeather,
  fetchForecast,
};
