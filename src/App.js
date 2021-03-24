import "./App.css";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Page from "./Page";

function App() {
  const [whichPage, setWhichPage] = useState("home");
  const [user, setUser] = useState({
    name: "bingo bongo",
    password: "",
    id: -1,
  });

  return (
    <main className="App">
      <Navbar setWhichPage={setWhichPage} username={user.name} />
      <Page whichPage={whichPage} user={user} setUser={setUser} />
    </main>
  );
}

export default App;
