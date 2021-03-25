import React, { useState, useEffect } from "react";

function Folders({ setThings, type, user, api }) {
  // const [folders, setFolders] = useState([]);
  let folders = [];
  //useEffect --> fetch using type="trackedSearches" or type="savedItems", []
  useEffect(() => {
    console.log("in folders now", user);
    // fetch(`${api}/users/${user.id}/${type}`)
    //   .then((r) => r.json())
    //   .then((list) => {
    //     // setFolders(list);
    //     folders = list;
    //   });
  }, [user]);

  function handleClick(e) {
    let id = parseInt(e.target.dataset.id);
    console.log(id);

    //fetch now to backend using ID
    //with the result -->
    // setThings([]);
  }

  return (
    <div>
      {type === "trackedSearches" ? "Tracked Searches: " : "Folders: "}
      {folders.map((f) => {
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
