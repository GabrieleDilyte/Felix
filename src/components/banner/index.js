import Button from "../button";

import "./index.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__content">
        <h2 className="banner__content--title">Wanna more Content?</h2>
        <Button isLarge>Get Access</Button>
      </div>
    </div>
  );
}

export default Banner;
