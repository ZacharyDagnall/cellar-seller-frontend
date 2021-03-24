import React, { useState } from "react";

function Search({ setResults }) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // fetch to the actual websites (using the Search state) (via backend)
    //with the results -->
    //setResults()
    console.log("well this one works");
    setSearch("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </form>
  );
}

export default Search;
