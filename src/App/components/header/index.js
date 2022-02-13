import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context";

import Button from "../button";

import logo from "../../img/F.png";

import "./index.css";

function Header() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header__content">
        <img
          src={logo}
          alt="logo"
          className="logo"
          onClick={() => navigate("./")}
        />
        {user ? (
          <Button isLarge to="/" onClick={() => logout()}>
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
