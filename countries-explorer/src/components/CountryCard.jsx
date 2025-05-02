import React from "react";

const CountryCard = ({ country, onClick }) => {
  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  return (
    <div
      className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition-all cursor-pointer"
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
      <p><strong>Languages:</strong> {languages}</p>
    </div>
  );
};

export default CountryCard;
