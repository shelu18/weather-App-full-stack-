const axios = require('axios');

const getCurrentWeather = async (city) => {
  const API_KEY = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};
// Services/weatherService.js



// this function fetches the 5-day weather forecast for a given city

const getForecastWeather = async (city) => {
  const API_KEY = process.env.OPENWEATHER_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await axios.get(url);
  return response.data;
};

module.exports = {
  getCurrentWeather,
  getForecastWeather,
};



