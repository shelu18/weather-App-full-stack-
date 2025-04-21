import React from 'react';
import './WeatherCard.css'; 
const WeatherCard = ({ weather }) => {
  if (!weather || !weather.list || weather.list.length === 0) return null;

  const firstForecast = weather.list[0];

  return (
    <div className="weather-card">
      <h2>{weather.city.name}</h2>
      <p>{firstForecast.dt_txt}</p>
      <p>Temperature: {firstForecast.main.temp}°C</p>
      <p>Condition: {firstForecast.weather[0].description}</p>
    </div>
  );
};
export default WeatherCard;
