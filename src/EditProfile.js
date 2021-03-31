import React, { useState } from "react";

function EditProfile({ user, setUser, api }) {
  const [errors, setErrors] = useState([]);
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    //fetch to update credentials "PATCH"
    fetch(`${api}/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({user, oldPassword, newPassword}),
    })
      .then((r) => {
        console.log("first responder", r)
        return r.json().then((data) => {
          if (r.ok) {
            return data;
          } else {
            throw data;
          }
        });
      })
      .then((response) => {
        alert("You changed your password! Wow!")
      })
      .catch((response) => {
        console.log("good catch!", response)
        setErrors(response.errors);
      })
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
        Password Change Form
        <br/>
        <input
          type="password"
          name="oldPassword"
          placeholder="Enter current password"
          value={oldPassword}
          onChange={e => {setOldPassword(e.target.value)}}
        ></input>
        <br/>
        <input
          type="password"
          name="password"
          placeholder="Enter a new password"
          value={newPassword}
          onChange={e => {setNewPassword(e.target.value)}}
        ></input>
        <br/>
        <button type="submit">Change your Credentials!</button>
      </form>
      {errors.length !== 0 ? (
        <>
          {errors.map((er, i) => (
            <div key={i}>{er}</div>
          ))}
        </>
      ) : null}
      <button id="delete-acct" onClick={deleteAccount}>
        ☠️Delete your account☠️
      </button>
      
    </>
  );
}

export default EditProfile;
