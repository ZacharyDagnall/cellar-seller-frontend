import React from "react";
import { NavLink, useHistory } from "react-router-dom";

function Navbar({ username, setUser }) {
  const history = useHistory();

  function logout() {
    setUser(null);
    localStorage.removeItem("token");
    history.push("/login");
  }

  return (
    <aside>
      <br></br>
      <h3>Welcome {username}!</h3>

      <NavLink to="/home" className="button">
        Home
      </NavLink>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <NavLink to="/saved-items" className="button">
        Saved Items
      </NavLink>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <NavLink to="/edit-profile" className="button">
        Edit Profile
      </NavLink>
      <br></br>
      <br></br>
      <br></br>

      <br></br>
      <br></br>
      <div id="logout" onClick={logout} className="button">
        Log Out
      </div>
    </aside>
  );
}

export default Navbar;
