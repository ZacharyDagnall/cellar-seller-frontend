import React, { useState } from "react";
import Search from "./Search";
import Folders from "./Folders";
import ItemsContainer from "./ItemsContainer";

function Home({ user, api, folders, setFolders }) {
  const [results, setResults] = useState([]);

  return (
    <div>
      <Search
        setResults={setResults}
        api={api}
        results={results}
        user={user}
        setFolders={setFolders}
      />
      <Folders
        type={"trackedsearches"}
        setThings={setResults}
        user={user}
        api={api}
        folders={folders}
        setFolders={setFolders}
      />
      <ItemsContainer api={api} type={"trackedsearches"} things={results} />
    </div>
  );
}

export default Home;
