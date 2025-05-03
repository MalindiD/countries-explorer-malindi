import React from "react";
import Select from "react-select";

const FilterMenu = ({ selectedRegion, setSelectedRegion, regionOptions }) => {
  const options = regionOptions.map((region) => ({
    value: region,
    label: region,
  }));

  const handleChange = (selectedOption) => {
    setSelectedRegion(selectedOption ? selectedOption.value : "");
  };

  return (
    <div className="mb-4 w-full md:w-60">
      <Select
        options={options}
        value={selectedRegion ? { value: selectedRegion, label: selectedRegion } : null}
        onChange={handleChange}
        isClearable
        placeholder="Filter by Region"
      />
    </div>
  );
};

export default FilterMenu;
