/* rafce */
import React from "react";

const Login = () => {
  return (
    <div style={{ paddingTop: "20px" }} className="loginForm">
      <div className="formContainer">
        <label>Username: </label>
        <input type="text" />
        <label>Password: </label>
        <input type="password" />
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
