import React, { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center text-pink-600">❤️ My Favourite Countries</h1>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((country) => (
            <CountryCard key={country.cca3} country={country} onClick={() => {}} isFavorite toggleFavorite={() => {}} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">You have no favorites yet.</p>
      )}
    </div>
  );
};

export default Favorites;
