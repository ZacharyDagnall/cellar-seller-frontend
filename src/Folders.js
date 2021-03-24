import React from "react";

function Folders({ setThings, type }) {
  //useEffect --> fetch using type="trackedSearches" or type="savedItems", []
  const folders = [
    //these are folder objects
    { name: "number 1", id: 3 },
    { name: "number 2", id: 6 },
    { name: "number 3", id: 7 },
  ];

  function handleClick(e) {
    let id = parseInt(e.target.dataset.id);

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
