import React from "react";

const languages = ["English", "Spanish", "French", "Arabic", "Chinese", "Hindi", "Portuguese", "Russian"];

const LanguageFilter = ({ selectedLanguage, setSelectedLanguage }) => {
  return (
    <select
      className="p-2 border rounded shadow-sm mb-4"
      value={selectedLanguage}
      onChange={(e) => setSelectedLanguage(e.target.value)}
    >
      <option value="">Filter by Language</option>
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
};

export default LanguageFilter;
