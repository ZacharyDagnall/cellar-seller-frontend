import "./App.css";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Page from "./Page";
import Login from "./Login"

function App() {
  const API = "http://localhost:3001"
  const [whichPage, setWhichPage] = useState("home");
  const [user, setUser] = useState({});

  // name: "bingo bongo",
  // password: "",
  // id: -1,

  return (
    <main className="App">
      {Object.keys(user).length <= 0?
      <>
      {console.log("hi")}
      <Login API={API} setUser={setUser} /> 
      </>
      :
      <>
        {console.log(Object.keys(user).length)}
        <Navbar setWhichPage={setWhichPage} username={user.name} setUser={setUser}/>
        <Page whichPage={whichPage} user={user} setUser={setUser} />
      </>
      }
    </main>
  );
}

export default App;
