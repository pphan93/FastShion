import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../lib/api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onHandleClick = (e) => {
    e.preventDefault();
    //
    login(dispatch, { username, password });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <input
        type="text"
        placeholder="username"
        value={username}
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
