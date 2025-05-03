import React from "react";
import Select from "react-select";

const LanguageFilter = ({ selectedLanguage, setSelectedLanguage, languageOptions }) => {
  const options = languageOptions.map((lang) => ({
    value: lang,
    label: lang,
  }));

  const handleChange = (selectedOption) => {
    setSelectedLanguage(selectedOption ? selectedOption.value : "");
  };

  return (
    <div className="mb-4 w-full md:w-60">
      <Select
        options={options}
        value={selectedLanguage ? { value: selectedLanguage, label: selectedLanguage } : null}
        onChange={handleChange}
        isClearable
        placeholder="Filter by Language"
      />
    </div>
  );
};

export default LanguageFilter;
