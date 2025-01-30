// eslint-disable-next-line react/prop-types
const SearchBar = ({ city, setCity, onSearch, onAddFavorite }) => {
  return (
    <form className="mb-8 flex flex-col sm:flex-row gap-2">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
      />
      <button
        type="button"
        onClick={onSearch}
        className="p-3 bg-white cursor-pointer text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all"
      >
        Search
      </button>
      <button
        type="button"
        onClick={onAddFavorite}
        className="p-3 bg-green-500 cursor-pointer text-white font-semibold rounded-lg hover:bg-green-600 transition-all"
      >
        + Favorite
      </button>
    </form>

  );
};

export default SearchBar;
