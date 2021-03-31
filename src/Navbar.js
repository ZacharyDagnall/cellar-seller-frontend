import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components"


function Navbar({ username, setUser }) {
  const history = useHistory();

  function logout() {
    setUser(null);
    localStorage.removeItem("token");
    history.push("/login");
  }

  const NewNavLink = styled(NavLink)`
  && {width:100em}`

  return (
    <aside>
      <br></br>
      <h3>Welcome {username}!</h3>
      
      <NewNavLink to="/home" className="navlink">
        Home
      </NewNavLink>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <NewNavLink to="/saved-items" className="navlink">
        Saved Items
      </NewNavLink>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <NewNavLink to="/edit-profile" className="navlink">
        Edit Profile
      </NewNavLink>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* <span className="navlink" onClick={logout}>
        Log Out
      </span> */}
      <NewNavLink to="/login" className="navlink" onClick={logout}>
        Logout
      </NewNavLink>
    </aside>
  );
}

export default Navbar;
