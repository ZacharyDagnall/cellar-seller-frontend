import React from "react";
import { NavLink, useHistory } from "react-router-dom";
// import styled from "styled-components"


function Navbar({ username, setUser }) {
  const history = useHistory();

  function logout() {
    setUser(null);
    localStorage.removeItem("token");
    history.push("/login");
  }

  // const NewNavLink = styled(NavLink)`
  // && {width:100em}`

  return (
    <aside>
      <h2>Welcome {username}!</h2>
      
      <NavLink to="/home" className="navlink">
        Home
      </NavLink>

      <NavLink to="/saved-items" className="navlink">
        Saved Items
      </NavLink>

      <NavLink to="/edit-profile" className="navlink">
        Edit Profile
      </NavLink>

      {/* <span className="navlink" onClick={logout}>
        Log Out
      </span> */}
      <NavLink to="/login" className="navlink" onClick={logout}>
        Logout
      </NavLink>
    </aside>
  );
}

export default Navbar;
