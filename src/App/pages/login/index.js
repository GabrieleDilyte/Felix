import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import auth from "../../../auth";

import Button from "../../components/button";

import "./index.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(auth.selectors.getError);
  const isLoggedIn = useSelector(auth.selectors.isLoggedIn);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const user = {
        username: event.target[0].value,
        password: event.target[1].value,
      };

      dispatch(auth.actions.login(user));
    },
    [dispatch]
  );

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

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
