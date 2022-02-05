import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import auth from "../../../auth";

import Button from "../button";

import logo from "../../img/F.png";

import "./index.css";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(auth.selectors.isLoggedIn);

  return (
    <header className="header">
      <div className="header__content">
        <img
          src={logo}
          alt="logo"
          className="logo"
          onClick={() => navigate("./")}
        />
        {isLoggedIn ? (
          <Button isLarge to="/" onClick={() => dispatch(auth.actions.logout())}>
            Log Out
          </Button>
        ) : (
          <Button isLarge to="/login">
            Sign In
          </Button>
        )}
      </div>
    </header>
  );
}

export default Header;
