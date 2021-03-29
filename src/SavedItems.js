import React, { useState, useEffect } from "react";
import Folders from "./Folders";
import ItemsContainer from "./ItemsContainer";

function SavedItems({ api, user, folders, setFolders }) {
  const [stuff, setStuff] = useState([]);

  function grabMain() {
    fetch(`${api}/users/${user.id}/main`)
      .then((r) => r.json())
      .then((list) => {
        setStuff(list);
      });
  }

  //useEffect to fetch list of saved items --> from "main" folder, []
  useEffect(() => {
    grabMain();
  }, []);

  return (
    <div>
      <Folders
        api={api}
        user={user}
        type={"saveditems"}
        setThings={setStuff}
        folders={folders}
        setFolders={setFolders}
        grabMain={grabMain}
      />
      <ItemsContainer
        api={api}
        setThings={setStuff}
        type={"saveditems"}
        things={stuff}
        user={user}
      />
    </div>
  );
}

export default SavedItems;
