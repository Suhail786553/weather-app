/* eslint-disable react/prop-types */
const ForecastCard = ({ forecast }) => {
  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-all text-center">
      <p className="font-bold text-gray-700">
        {new Date(forecast.dt * 1000).toLocaleDateString()}
      </p>
      <p className="text-gray-600">{forecast.weather[0].description}</p>
      <p className="text-gray-800 font-semibold text-lg">Temp: {forecast.main.temp}°C</p>
    </div>

  );
};

export default ForecastCard;
