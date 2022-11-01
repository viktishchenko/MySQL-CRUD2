/* rafce */
import axios from "axios";
import React, { useState } from "react";
// import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  /* nfn */
  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:8800/auth/login", data).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <div className="loginForm">
        <div className="formContainer">
          <label>Username: </label>
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="(Ex. Name)"
          />
          <label>Password: </label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="(Ex. Password)"
          />
          <button onClick={login}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
