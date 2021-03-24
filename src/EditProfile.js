import React, { useState } from "react";

function EditProfile({ user, setUser }) {
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
    console.log("changed!!");
  }

  function deleteAccount() {
    //alert or something "are you sure??"
    //fetch delete
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
