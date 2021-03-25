import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ API, setUser }) {
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
    fetch(`${API}/login`, {
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
        if (response) {
          setUser(response);
          history.push("/home");
        } else {
          setUserInfo({ ...userInfo, password: "" });
          alert("Invalid login - please try again");
        }
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
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
