import React, { useState } from "react";
import { useHistory, Link, Route } from "react-router-dom";

function Signup({ api, setUser }) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    password: "",
  });
  const history = useHistory();

  function handleChange(e) {
    let key = e.target.name;
    let val = e.target.value;

    setUserInfo({ ...userInfo, [key]: val });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${api}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
        console.log("server not on, tonto");
      })
      .then((response) => {
        setUser(response);
        history.push("/home");
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
          type="text"
          name="password"
          value={userInfo.password}
          onChange={handleChange}
        ></input>
        <button type="submit">Signup!</button>
      </form>
    </>
  );
}

export default Signup;
