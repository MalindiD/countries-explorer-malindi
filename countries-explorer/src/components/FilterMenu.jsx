import React from "react";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const FilterMenu = ({ selectedRegion, setSelectedRegion }) => {
  return (
    <select
      className="p-2 border rounded shadow-sm mb-4"
      value={selectedRegion}
      onChange={(e) => setSelectedRegion(e.target.value)}
    >
      <option value="">Filter by Region</option>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default FilterMenu;
