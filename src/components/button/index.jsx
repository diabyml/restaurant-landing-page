import React from "react";
import "./style.scss";

function Button({ children, variant }) {
  return (
    <button className={`btn ${variant && "btn--"}${variant}`}>
      {children}
    </button>
  );
}

export default Button;
