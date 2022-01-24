import { useNavigate } from "react-router-dom";

import Button from "../button";

import logo from "../../img/F.png";

import "./index.css";

function Header(user, setUser) {
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
        {user.user ? (
          <Button isLarge to="/" onClick={() => setUser("")}>
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
