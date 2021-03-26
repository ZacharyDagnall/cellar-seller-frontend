import React, { useState, useEffect } from "react";

function Folders({ setThings, type, user, api, folders, setFolders }) {
  // const [folders, setFolders] = useState([]);

  // ******
  useEffect(() => {
    fetch(`${api}/users/${user.id}/${type}`)
      .then((r) => r.json())
      .then((list) => setFolders(list));
  }, []);

  function handleClick(e) {
    let folder_id = parseInt(e.target.dataset.id);
    console.log(folder_id);

    fetch(`${api}/folders/${folder_id}/items`)
      .then((r) => r.json())
      .then((list) => setThings(list));
  }

  return (
    <div>
      {type === "trackedsearches" ? "Tracked Searches: " : "Folders: "}
      {folders.map((f) => {
        console.log("is this a folder or what", f);
        return (
          <span key={f.id} data-id={f.id} onClick={handleClick}>
            {" "}
            {f.name}{" "}
          </span>
        );
      })}
    </div>
  );
}

export default Folders;
