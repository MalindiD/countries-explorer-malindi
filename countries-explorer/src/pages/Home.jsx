import React, { useEffect, useState } from "react";
import {
  getAllCountries,
  getCountryByName,
  getCountriesByRegion,
} from "../api/countryService";
import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";
import FilterMenu from "../components/FilterMenu";
import LanguageFilter from "../components/LanguageFilter";
import CountryDetailModal from "../components/CountryDetailModal";
import { getLoggedInUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [allRegions, setAllRegions] = useState([]);
  const [allLanguages, setAllLanguages] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res;

        if (searchTerm) {
          res = await getCountryByName(searchTerm);
        } else if (selectedRegion) {
          res = await getCountriesByRegion(selectedRegion);
        } else {
          res = await getAllCountries();
        }

        let filteredCountries = res.data;

        // Dynamic languages
        const langsSet = new Set();
        const regionSet = new Set();

        res.data.forEach((country) => {
          if (country.languages) {
            Object.values(country.languages).forEach((lang) =>
              langsSet.add(lang)
            );
          }
          if (country.region) {
            regionSet.add(country.region);
          }
        });

        setAllLanguages(Array.from(langsSet).sort());
        setAllRegions(Array.from(regionSet).sort());

        if (selectedLanguage) {
          filteredCountries = filteredCountries.filter((country) => {
            const countryLangs = country.languages
              ? Object.values(country.languages).map((lang) =>
                  lang.toLowerCase()
                )
              : [];
            return countryLangs.includes(selectedLanguage.toLowerCase());
          });
        }

        setCountries(filteredCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setCountries([]);
      }
    };

    fetchData();
  }, [searchTerm, selectedRegion, selectedLanguage]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavs);
  }, []);

  const handleCountryClick = (country) => {
    if (!getLoggedInUser()) {
      setShowLoginPrompt(true);
      return;
    }
    setSelectedCountry(country);
  };

  const toggleFavorite = (country) => {
    const isFav = favorites.some((fav) => fav.cca3 === country.cca3);
    const updatedFavs = isFav
      ? favorites.filter((fav) => fav.cca3 !== country.cca3)
      : [...favorites, country];

    setFavorites(updatedFavs);
    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
        {/* 🌍 Explore Countries of the World */}
      </h1>

      <div className="flex flex-col md:flex-row md:items-center gap-4 justify-center">
        <div className="md:w-1/3 w-full">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <FilterMenu
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          regionOptions={allRegions}
        />
        <LanguageFilter
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          languageOptions={allLanguages}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {countries.length > 0 ? (
          countries.map((country) => (
            <CountryCard
              key={country.cca3}
              country={country}
              onClick={handleCountryClick}
              isFavorite={favorites.some((fav) => fav.cca3 === country.cca3)}
              toggleFavorite={toggleFavorite}
            />
          ))
        ) : (
          <p>No countries found.</p>
        )}
      </div>

      {selectedCountry && (
        <CountryDetailModal
          country={selectedCountry}
          onClose={() => setSelectedCountry(null)}
        />
      )}

      {showLoginPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center space-y-4">
            <h3 className="text-xl font-semibold">Login Required</h3>
            <p className="text-sm text-gray-600">
              Please login to view more country details.
            </p>
            <button
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              onClick={() => navigate("/login")}
            >
              Go to Login
            </button>
            <button
              className="text-gray-500 underline text-sm"
              onClick={() => setShowLoginPrompt(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
