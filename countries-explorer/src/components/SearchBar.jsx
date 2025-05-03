import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search by country name..."
      style={{ backgroundColor: "#d5d4d6" }}
      className="w-full p-2 border rounded shadow-sm mb-4"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
