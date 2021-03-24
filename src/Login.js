import React, { useState } from "react";

function Login({ API, setUser }) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    password: ""
  });

  console.log(userInfo);

  function handleChange(e) {
    let key = e.target.name;
    let val = e.target.value;

    setUserInfo({ ...userInfo, [key]: val });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${API}/login`, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            Accept: 'application/json'
        },
        body:JSON.stringify(userInfo)
    })
        .then(r => r.json())
        .then(response => {
            if(response) {
                console.log(response)
                setUser(response)
            } else {
                setUserInfo({...userInfo, password:""})
                alert("Invalid login - please try again")
            }
        })
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
