import React from "react";

function Navbar({ setWhichPage, username, setUser }) {
  return (
    <aside>
      <br></br>
      <h3>Welcome {username} !</h3>
      <div id="home" onClick={(e) => setWhichPage(e.target.id)}>
        Home
      </div>
      <br></br>
      <div id="saved-items" onClick={(e) => setWhichPage(e.target.id)}>
        Saved Items
      </div>
      <br></br>
      <div id="edit-profile" onClick={(e) => setWhichPage(e.target.id)}>
        Edit Profile
      </div>
      <br></br>
      <div id="logout" onClick={() => setUser({})}>
        Log Out
      </div>
    </aside>
  );
}

export default Navbar;
