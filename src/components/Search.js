import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const clearInput = () => {
    setSearchQuery(() => "");
  };
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
        {searchQuery.length === 0 ? (
          <button type="submit">search</button>
        ) : (
          <button className="clear" onClick={clearInput}>
            clear
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
