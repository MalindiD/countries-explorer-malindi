import React from "react";

const CountryDetailModal = ({ country, onClose }) => {
  if (!country) return null;

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3 shadow-lg">
        <button onClick={onClose} className="float-right text-red-500 font-bold">X</button>
        <img src={country.flags?.png} alt={country.name?.common} className="w-full h-40 object-cover rounded mb-4" />
        <h2 className="text-2xl font-bold mb-2">{country.name?.common}</h2>
        <p><strong>Official Name:</strong> {country.name?.official}</p>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
        <p><strong>Languages:</strong> {languages}</p>
        <p><strong>Subregion:</strong> {country.subregion}</p>
        <p><strong>Timezone:</strong> {country.timezones?.[0]}</p>
      </div>
    </div>
  );
};

export default CountryDetailModal;
