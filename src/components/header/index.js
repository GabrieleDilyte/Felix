import Button from "../button";

import logo from "../../img/F.png";

import "./index.css";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <img src={logo} alt="logo" className="logo" />
        <Button isLarge>Sign In</Button>
      </div>
    </header>
  );
}

export default Header;
