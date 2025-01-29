import { useState } from "react";
import SearchBar from './components/SearchBar';
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import FavoritesList from "./components/FavoritesList";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
console.log("API Key:", API_KEY);
console.log("Base URL:", BASE_URL);
const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [error, setError] = useState("");

  const fetchWeather = async (cityName) => {
    try {
      const response = await fetch(
        `${BASE_URL}/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        if (response.status === 401) throw new Error("Invalid API key.");
        if (response.status === 404) throw new Error("City not found.");
        throw new Error("Failed to fetch weather data.");
      }
      const data = await response.json();
      setWeatherData(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  const fetchForecast = async (cityName) => {
    try {
      const response = await fetch(
        `${BASE_URL}/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) throw new Error("Forecast not found");
      const data = await response.json();
      setWeatherData((prev) => ({ ...prev, forecast: data.list }));
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSearch = () => {
    fetchWeather(city);
    fetchForecast(city);
  };

  const addToFavorites = () => {
    if (city && !favorites.includes(city)) {
      const updatedFavorites = [...favorites, city];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  const handleFavoriteClick = (favCity) => {
    fetchWeather(favCity);
    fetchForecast(favCity);
    setCity(favCity);
  };
  const onRemoveFavorite = (cityToRemove) => {
    setFavorites(favorites.filter(city => city !== cityToRemove));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6 sm:mb-8">
          Weather App
        </h1>
        <SearchBar
          city={city}
          setCity={setCity}
          onSearch={handleSearch}
          onAddFavorite={addToFavorites}
        />


        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 text-center text-sm sm:text-base">
            {error}
          </div>
        )}
        {weatherData && <WeatherCard weatherData={weatherData} city={city} />}
        {weatherData?.forecast && (
          <div className="mt-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">
              5-Day Forecast
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {weatherData.forecast
                .filter((_, index) => index % 8 === 0)
                .map((forecast, index) => (
                  <ForecastCard key={index} forecast={forecast} />
                ))}
            </div>
          </div>
        )}
        <FavoritesList
          favorites={favorites}
          onFavoriteClick={handleFavoriteClick}
          onRemoveFavorite={onRemoveFavorite}
        />
      </div>
    </div>


  );
};

export default App;
