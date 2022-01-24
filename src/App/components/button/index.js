import { Link } from "react-router-dom";

import "./index.css";

function Button({ isLarge, children, isFavorite, to, onClick = () => {} }) {
  const Component = typeof to === "string" ? Link : "button";

  const className = "button".concat(
    isLarge ? " button--large" : "",
    isFavorite ? " button--ghost" : ""
  );

  return (
    <Component to={to} className={className} onClick={onClick}>
      {children}
    </Component>
  );
}

export default Button;
