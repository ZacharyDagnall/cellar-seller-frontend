import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ username, setUser }) {
  return (
    <aside>
      <br></br>
      <h3>Welcome {username} !</h3>

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
      <div id="logout" onClick={() => setUser({})} className="button">
        Log Out
      </div>
    </aside>
  );
}

export default Navbar;
