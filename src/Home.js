import React, { useState } from "react";
import Search from "./Search";
import Folders from "./Folders";
import ItemsContainer from "./ItemsContainer";

function Home() {
  const [results, setResults] = useState([
    { name: 1, price: 0 },
    { name: 2, price: 50 },
    { name: 3, price: 3000 },
  ]);

  return (
    <div>
      <Search setResults={setResults} />
      <Folders type={"trackedSearches"} setThings={setResults} />
      <ItemsContainer things={results} />
    </div>
  );
}

export default Home;
