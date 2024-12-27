import React from "react";

const SearchBar = ({ search, handleSearch }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
