import { useState } from "react";
import React from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(`http://localhost:5000/api/weather/forecast?city=${city}`);
      const data = await response.json();
      console.log(data);
      setWeather(data);
      console.log(weather)  
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;
