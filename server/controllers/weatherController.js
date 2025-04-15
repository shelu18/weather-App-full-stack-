const { getCurrentWeather } = require('../Services/weatherService');

const fetchWeather = async (req, res) => {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: 'City name is required' });
  }

  try {
    const weatherData = await getCurrentWeather(city);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { fetchWeather };
