import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Signup({ api, setUser }) {
  const [errors, setErrors] = useState([]);
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
        return r.json().then((data) => {
          if (r.ok) {
            return data;
          } else {
            throw data;
          }
        });
      })
      .then((response) => {
        const { user, token } = response;
        localStorage.setItem("token", token);
        setUser(user);
        history.push("/home");
      })
      .catch((response) => setErrors(response.errors));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Pick a Username!"
          value={userInfo.name}
          onChange={handleChange}
        ></input>
        <br/>
        <input
          type="password"
          name="password"
          placeholder="Choose a Password!"
          value={userInfo.password}
          onChange={handleChange}
        ></input>
        <br/>
        <button type="submit">Signup!</button>
      </form>
      {errors.length !== 0 ? (
        <>
          {errors.map((er, i) => (
            <div key={i}>{er}</div>
          ))}
        </>
      ) : null}
      <button onClick={() => history.push("/login")}>Back to login...</button>
    </>
  );
}

export default Signup;
