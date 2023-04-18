import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`button ${props.showError ? "invalid" : "#ac0e77"}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
