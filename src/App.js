import "./App.css";
import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import SavedItems from "./SavedItems";
import EditProfile from "./EditProfile";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const API = "http://localhost:3000";
  const [user, setUser] = useState(null);
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      {user ? (
        <main className="App">
          {console.log(Object.keys(user).length)}
          <Navbar username={user.name} setUser={setUser} />
          <Switch>
            <Route exact path="/home">
              <section>
                <Home
                  user={user}
                  api={API}
                  folders={folders}
                  setFolders={setFolders}
                />
              </section>
            </Route>
            <Route exact path="/saved-items">
              <section>
                <SavedItems
                  user={user}
                  api={API}
                  folders={folders}
                  setFolders={setFolders}
                />
              </section>
            </Route>
            <Route exact path="/edit-profile">
              <section>
                <EditProfile user={user} setUser={setUser} api={API} />
              </section>
            </Route>
            <Route exact path="/login">
              <Login API={API} setUser={setUser} />
            </Route>
          </Switch>
        </main>
      ) : (
        <>
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
          <Switch>
            <Route exact path="/login">
              <Login API={API} setUser={setUser} />
            </Route>

            <Route path="/signup">
              <Signup api={API} setUser={setUser} />
            </Route>
          </Switch>
        </>
      )}
    </>
  );
}

export default App;
