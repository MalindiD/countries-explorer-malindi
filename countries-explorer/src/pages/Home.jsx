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

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

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

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterMenu selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
        <LanguageFilter
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {countries.length > 0 ? (
          countries.map((country) => (
            <CountryCard
              key={country.cca3}
              country={country}
              onClick={setSelectedCountry}
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
    </div>
  );
};

export default Home;
