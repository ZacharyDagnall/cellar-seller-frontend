import React, { useState } from "react";
import Folders from "./Folders";
import ItemsContainer from "./ItemsContainer";

function SavedItems() {
  const [stuff, setStuff] = useState([
    { name: 1, price: 0 },
    { name: 2, price: 50 },
    { name: 3, price: 3000 },
  ]);

  //useEffect to fetch list of saved items --> from "main" folder, []

  return (
    <div>
      <Folders type={"savedItems"} setThings={setStuff} />
      <ItemsContainer things={stuff} />
    </div>
  );
}

export default SavedItems;
