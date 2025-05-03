import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { getLoggedInUser } from "../utils/auth";

const CountryCard = ({ country, onClick, isFavorite, toggleFavorite }) => {
  const user = getLoggedInUser();

  return (
    <div
    style={{ backgroundColor: "#ebe8ed" }}
      className="relative rounded-xl shadow-md p-4 hover:shadow-xl transition-all cursor-pointer"
      onClick={() => onClick(country)}
    >
      <img
        src={country.flags?.png}
        alt={country.name?.common}
        className="w-full h-40 object-cover rounded-md mb-2"
      />
      <h2 className="text-lg font-semibold">{country.name?.common}</h2>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
      <p><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(", ") : "N/A"}</p>

      {/* Show heart only if user is logged in */}
      {user && (
        <div
          className="absolute bottom-3 right-3 text-xl text-red-500"
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(country);
          }}
        >
          {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
        </div>
      )}
    </div>
  );
};

export default CountryCard;
