import React from "react";
import "./style.scss";

function Input({ placeholder, ...rest }) {
  return (
    <input type="text" className="input" placeholder={placeholder} {...rest} />
  );
}

export default Input;
