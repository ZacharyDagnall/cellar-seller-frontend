import React from "react";
import Home from "./Home";
import SavedItems from "./SavedItems";
import EditProfile from "./EditProfile";

function Page({ whichPage, user, setUser }) {
  switch (whichPage) {
    case "home":
      return (
        <section>
          <Home user={user} />
        </section>
      );
    case "saved-items":
      return (
        <section>
          <SavedItems user={user} />
        </section>
      );
    case "edit-profile":
      return (
        <section>
          <EditProfile user={user} setUser={setUser} />
        </section>
      );
    default:
      return (
        <section>
          <h1>wut</h1>
        </section>
      );
  }
}

export default Page;
