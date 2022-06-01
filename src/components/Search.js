import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-area">
      <form action="/" method="get">
        <input
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
          type="text"
          id="search"
          placeholder="Search"
          name="search"
        />
        <button type="submit">search</button>
      </form>
    </div>
  );
};

export default SearchBar;
