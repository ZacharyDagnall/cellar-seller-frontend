import React, { useState, useEffect } from "react";
import Folders from "./Folders";
import ItemsContainer from "./ItemsContainer";

function SavedItems({ api, user }) {
  const [stuff, setStuff] = useState([]);
  const [currentFolder, setCurrentFolder] = useState("main");
  console.log("top of SI", user);

  //useEffect to fetch list of saved items --> from "main" folder, []
  useEffect(() => {
    console.log("in SI now", user);
    fetch(`${api}/users/${user.id}/${currentFolder}`)
      .then((r) => r.json())
      .then((list) => {
        setStuff(list);
      });
  }, []);

  return (
    <div>
      <Folders api={api} user={user} type={"saveditems"} setThings={setStuff} />
      <ItemsContainer things={stuff} />
    </div>
  );
}

export default SavedItems;
