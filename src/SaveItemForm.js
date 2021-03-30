import React, { useEffect, useState } from "react";
import Item from "./Item";

function SaveItemForm({ thing, api, user }) {
  const [formShowing, toggleForm] = useState(false);
  const [folderId, setFolderId] = useState(null);
  const [menuFolders, setMenuFolders] = useState([]);
  const [showNewFolderInput, setShowNewFolderInput] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  useEffect(() => {
    if (folderId === "newfolder") {
      setShowNewFolderInput(true);
    } else {
      setShowNewFolderInput(false);
    }
  }, [folderId]);

  useEffect(() => {
    fetch(`${api}/users/${user.id}/saveditems`)
      .then((r) => r.json())
      .then((savedFolders) => {
        console.log(savedFolders);
        setMenuFolders(savedFolders);
        setFolderId(savedFolders[0].id);
      });
  }, []);

  const handleSaveItem = (event) => {
    console.log(event.target.value);
    event.preventDefault();
    console.log("u saved");
    if (!showNewFolderInput) {
      fetch(`${api}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...thing, folder_id: folderId }),
      })
        .then((r) => r.json())
        .then((item) => alert(`${item.name} saved!`));
    } else {
      fetch(`${api}/users/${user.id}/saveitemnewfolder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ item: thing, name: newFolderName }),
      })
        .then((r) => r.json())
        .then((folder) =>
          alert(
            `New folder ${folder.name} created with ${thing.name} saved inside!`
          )
        );
    }
    toggleForm(false);
  };

  return (
    <>
      <button onClick={() => toggleForm(!formShowing)}>Save Item?</button>

      <form className={formShowing ? null : "hidden"} onSubmit={handleSaveItem}>
        <select
          name="folder"
          value={folderId}
          onChange={(e) => setFolderId(e.target.value)}
        >
          {menuFolders.map((folder) => (
            <option key={folder.id} value={folder.id}>
              {folder.name}
            </option>
          ))}
          <option
            value="newfolder"
            onSelect={(e) => console.log(e.target.value)}
          >
            New Folder
          </option>
        </select>
        <input
          type="text"
          name="New-Folder-Name"
          className={showNewFolderInput ? "" : "hidden"}
          placeholder="New Folder Name"
          value={newFolderName}
          onChange={(e) => setNewFolderName(e.target.value)}
        ></input>
        <button type="submit">Save to Selected Folder</button>
      </form>
      <form></form>
    </>
  );
}

export default SaveItemForm;
