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
      .catch((errors) => {
        console.log("errors console log", errors);
        setUserInfo({ ...userInfo, password: "" });
        setErrors(errors);
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
