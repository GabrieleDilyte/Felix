import React, { useContext, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context";

import Button from "../../components/button";

import "./index.css";

function Login() {
  const { user, error, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const user = {
        username: event.target[0].value,
        password: event.target[1].value,
      };
      login(user);
    },
    [login]
  );

  useEffect(() => {
    if (!!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="login">
      <form className="login_form" onSubmit={(event) => handleSubmit(event)}>
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
        {error && <p className="errorMessage">{error}</p>}
        <div>
          <Button>Sign In</Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
