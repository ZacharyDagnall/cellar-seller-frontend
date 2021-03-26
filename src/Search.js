import React, { useState } from "react";

function Search({ results, setResults, api, user, setFolders }) {
  const [search, setSearch] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${api}/search/${search}`)
      .then((r) => r.json())
      .then((itemList) => {
        setSubmittedSearch(search);
        setResults(itemList);
      });
  }

  function handleTrack(e) {
    console.log("results???", results);
    fetch(`${api}/users/${user.id}/trackedsearches`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ name: submittedSearch, items: results }),
    })
      .then((r) => r.json())
      .then((newFolder) => setFolders((folders) => [...folders, newFolder]));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>
      {results.length !== 0 ? (
        <button className="button" onClick={handleTrack}>
          Save this search!
        </button>
      ) : null}
    </>
  );
}

export default Search;
