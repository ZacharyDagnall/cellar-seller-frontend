import "./App.css";
import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import SavedItems from "./SavedItems";
import EditProfile from "./EditProfile";
import Login from "./Login";

function App() {
  const API = "http://localhost:3001";
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      {Object.keys(user).length !== 0 ? (
        <main className="App">
          {console.log(Object.keys(user).length)}
          <Navbar username={user.name} setUser={setUser} />
          <Switch>
            <Route exact path="/home">
              <section>
                <Home user={user} />
              </section>
            </Route>
            <Route exact path="/saved-items">
              <section>
                <SavedItems user={user} api={API} />
              </section>
            </Route>
            <Route exact path="/edit-profile">
              <section>
                <EditProfile user={user} setUser={setUser} />
              </section>
            </Route>
          </Switch>
        </main>
      ) : (
        <Redirect
          to={{
            pathname: "/login",
          }}
        />
      )}

      <Route exact path="/login">
        <Login API={API} setUser={setUser} />
      </Route>
    </>
  );
}

export default App;
