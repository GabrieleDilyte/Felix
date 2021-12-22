import React, { useState } from "react";

import "./index.css";

function Button({ isLarge, children, isFavorite }) {
  const [style, setStyle] = useState("");

  function favorite(e) {
    if (style.length) {
      setStyle("");
    } else {
      setStyle("button--ghost");
    }
  }

  const className = "button".concat(
    isLarge ? " button--large" : "",
    style.length ? " " + style : ""
  );

  if (isFavorite) {
    return (
      <button className={className} onClick={favorite}>
        {style.length ? "Remove 💔" : children}
      </button>
    );
  } else {
    return <button className={className}>{children}</button>;
  }
}

export default Button;
