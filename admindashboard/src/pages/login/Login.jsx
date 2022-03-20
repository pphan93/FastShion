import React, { useState } from "react";

const Login = () => {
  const [usename, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onHandleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="username"
        value={usename}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      ></input>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <button onClick={onHandleClick}>Login</button>
    </div>
  );
};

export default Login;
