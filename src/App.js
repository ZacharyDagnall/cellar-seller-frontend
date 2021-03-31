import "./App.css";
import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import SavedItems from "./SavedItems";
import EditProfile from "./EditProfile";
import Login from "./Login";
import Signup from "./Signup";
import ourlogo from "./cellarseller.png"

function App() {
  const API = "http://localhost:3000";
  const [user, setUser] = useState(null);
  const [folders, setFolders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/login");
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`${API}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((r) => r.json())
        .then((user) => {
          setUser(user);

          console.log(user);
        });
    }
  }, []);

  return (
    <>
      {user ? (
        <main className="App">
          <Navbar username={user.name} setUser={setUser} />
          <section>
          <div className="logo">
            <img src = {ourlogo} alt="cellar-seller-logo"></img>
          </div>
            <Switch>
              <Route exact path="/home"> 
                <Home
                  user={user}
                  api={API}
                  folders={folders}
                  setFolders={setFolders}
                /> 
              </Route>
              <Route exact path="/saved-items">
                <SavedItems
                  user={user}
                  api={API}
                  folders={folders}
                  setFolders={setFolders}
                />
              </Route>
              <Route exact path="/edit-profile"> 
                  <EditProfile user={user} setUser={setUser} api={API} />
              </Route>
              <Route exact path="/*">
                <Redirect
                  to={{
                    pathname: "/home",
                  }}
                />
              </Route>
            </Switch>
          </section>
        </main>
      ) : (
        <div id="welcome-holder">
          <span id="welcome-frame">
          <div className="logo">
            <img src = {ourlogo} alt="cellar-seller-logo"></img>
          </div>
            <br/>
            <Switch>
              <Route exact path="/login">
                <Login API={API} setUser={setUser} />
              </Route>

              <Route path="/signup">
                <Signup api={API} setUser={setUser} />
              </Route>
            </Switch>
          </span>
        </div>
      )}
    </>
  );
}

export default App;
