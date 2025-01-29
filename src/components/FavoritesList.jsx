/* eslint-disable react/prop-types */
/* eslint-disable-next-line react/prop-types*/
const FavoritesList = ({ favorites, onFavoriteClick, onRemoveFavorite }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">Favorite Cities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {favorites.map((fav, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-all flex justify-between items-center"
          >
            <button
              onClick={() => onFavoriteClick(fav)}
              className="text-lg font-semibold text-gray-800 flex-1 text-left"
            >
              {fav}
            </button>
            <button
              onClick={() => onRemoveFavorite(fav)}
              className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-all ml-2"
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </div>


  );
};

export default FavoritesList;
