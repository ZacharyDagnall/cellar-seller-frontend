import React, { useEffect } from "react";

function Folders({
  setThings,
  type,
  user,
  api,
  folders,
  setFolders,
  setIsSavedSearch,
  grabMain = () => {
    return [];
  },
}) {
  useEffect(() => {
    fetch(`${api}/users/${user.id}/${type}`)
      .then((r) => r.json())
      .then((list) => setFolders(list));
  }, []);

  function handleClick(e) {
    setIsSavedSearch(true)
    let folder_id = parseInt(e.target.dataset.id);

    fetch(`${api}/folders/${folder_id}/items`)
      .then((r) => r.json())
      .then((list) => setThings(list));
  }

  function handleDeleteFolder(e) {
    let folder_id = parseInt(e.target.dataset.id);
    fetch(`${api}/folders/${folder_id}`, {
      method: "DELETE",
    }).then(() => {
      setFolders(folders.filter((f) => f.id !== folder_id));
      type === "trackedsearches" ? setThings([]) : grabMain();
    });
  }

  return (
    <div>
      {type === "trackedsearches" ? "Tracked Searches: " : "Folders: "}
      <br/>
      {folders.map((f) => {
        return (
          <span className="folder-holder" key={f.id}>
            <span className="button" data-id={f.id} onClick={handleClick}>
              {" "}
              {f.name}
            </span>
            {f.name !== "main" ? (
              <button data-id={f.id} onClick={handleDeleteFolder} role="img">
                ❌
              </button>
            ) : null}
          </span>
        );
      })}
    </div>
  );
}

export default Folders;
