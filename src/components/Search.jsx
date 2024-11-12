import React, { useEffect, useState } from "react";

import { URL, API_KEY } from "../utils/utility.js";

const Search = ({ setFoodData }) => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
      console.log(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div>
      <div className="search_element">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search for recipe..."
        />
        <i className="ri-search-line"></i>
      </div>
    </div>
  );
};

export default Search;
