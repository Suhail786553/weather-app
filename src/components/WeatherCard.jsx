/* eslint-disable react/prop-types */
const WeatherCard = ({ weatherData, city }) => {
  return (
    <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-xl shadow-2xl p-6">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{city}</h2>
        <p className="text-lg text-gray-600">{weatherData.weather[0].description}</p>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-6 rounded-lg text-white">
          <p className="text-2xl font-bold">{weatherData.main.temp}°C</p>
          <p className="text-lg">Feels like {weatherData.main.feels_like}°C</p>
        </div>
        <div className="bg-gradient-to-r from-purple-400 to-purple-500 p-6 rounded-lg text-white">
          <p className="text-lg">Humidity: {weatherData.main.humidity}%</p>
          <p className="text-lg">Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      </div>
    </div>

  );
};

export default WeatherCard;
