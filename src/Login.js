import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

function Login({ API, setUser }) {
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
    fetch(`${API}/login`, {
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
      .catch((response) => {
        console.log("errors console log", response.errors);
        setUserInfo({ ...userInfo, password: "" });
        setErrors(response.errors);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Username"
          value={userInfo.name}
          onChange={handleChange}
        ></input>
        <br/>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={userInfo.password}
          onChange={handleChange}
        ></input>
        <br/>
        <button type="submit">Login</button>
      </form>
      {errors.length !== 0 ? (
        <>
          {errors.map((er, i) => (
            <div key={i}>{er}</div>
          ))}
        </>
      ) : null}
      <Link id="signup-button" className="button" to="/signup">
        Don't have an account? Signup!
      </Link>
    </>
  );
}

export default Login;
