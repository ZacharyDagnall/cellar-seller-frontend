import React, { useState } from "react";

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
    if (window.confirm("Are you sure you want to delete your account?")) {
      console.log("Account DELETED!");
    } else {
      console.log("Cool man welcome back");
    }

    fetch(`${api}/users/${user.id}`, {
      method: "DELETE",
    }).then((whatisthis) => {
      setUser({});
    });
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
          type="password"
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
