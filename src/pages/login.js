import React, { useCallback, useState } from "react";
import { Navigate } from "react-router-dom";

import Button from "../components/button";

import "../App.css";

function Login({ user, setUser }) {
  const [error, setError] = useState("");

  const handleSubmit = useCallback(async (event, setUser) => {
    event.preventDefault();

    const user = {
      username: event.target[0].value,
      password: event.target[1].value,
    };

    fetch("https://academy-video-api.herokuapp.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        setUser(result.token);
        localStorage.setItem("user", result.token);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="login">
      <form
        className="login_form"
        onSubmit={(event) => handleSubmit(event, setUser)}
      >
        <div>
          <label htmlFor="username">Username </label>
          <br />
          <input
            className="login_form__input"
            type="text"
            name="username"
            id="username"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label> <br />
          <input
            className="login_form__input"
            type="password"
            name="password"
            id="password"
            required
          ></input>
        </div>
        <div>
          <Button>Sign In</Button>
        </div>
        {error && <p>{error}</p>}
        {user && <Navigate to="/content" />}
      </form>
    </div>
  );
}

export default Login;
