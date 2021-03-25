import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function EditProfile({ user, setUser, api }) {
  const [userInfo, setUserInfo] = useState({
    name: user.name,
    password: user.password,
  });

  console.log(userInfo);

  function handleChange(e) {
    let key = e.target.name;
    let val = e.target.value;

    setUserInfo({ ...userInfo, [key]: val });
  }

  function handleSubmit(e) {
    e.preventDefault();
    //fetch to update credentials "PATCH"
    fetch(`${api}/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((r) => r.json())
      .then((responseUser) => setUser(responseUser));
    console.log("changed!!");
  }

  function deleteAccount() {
    //alert or something "are you sure??"
    if (window.confirm("Are you sure you want to delete your account?")) {
      // Save it!
      console.log("Account DELETED!");
    } else {
      // Do nothing!
      console.log("Cool man welcome back");
    }
    //fetch delete
    fetch(`${api}/users/${user.id}`, {
      method: "DELETE",
    }).then((whatisthis) => {
      setUser({});
      // <>
      //   {console.log(whatisthis)}
      //   <Redirect to="/login" />;
      // </>;
    });
    //redirect to login
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="password"
          value={userInfo.password}
          onChange={handleChange}
        ></input>
        <button type="submit">Change your Credentials!</button>
      </form>
      <button id="delete-acct" onClick={deleteAccount}>
        Delete your account
      </button>
    </>
  );
}

export default EditProfile;
