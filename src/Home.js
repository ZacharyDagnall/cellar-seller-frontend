import React, { useState } from "react";
import Search from "./Search";
import Folders from "./Folders";
import ItemsContainer from "./ItemsContainer";

function Home({ user, api, folders, setFolders }) {
  const [results, setResults] = useState([]);
  const [isSavedSearch, setIsSavedSearch] = useState(false)

  return (
    <div>
      <Search
        setResults={setResults}
        api={api}
        results={results}
        user={user}
        setFolders={setFolders}
        isSavedSearch={isSavedSearch}
        setIsSavedSearch={setIsSavedSearch}
      />
      <Folders
        type={"trackedsearches"}
        setThings={setResults}
        user={user}
        api={api}
        folders={folders}
        setFolders={setFolders}
        setIsSavedSearch={setIsSavedSearch}
      />
      <ItemsContainer api={api} type={"trackedsearches"} things={results} user={user}/>
    </div>
  );
}

export default Home;
