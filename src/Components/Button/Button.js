import React from "react";
import "./Button.scss";

const Button = () => {
  return (
    <button
      type="button"
      className="ModalClose"
      onClick={() => console.log("***** ***")}
    >
      x
    </button>
  );
};

export default Button;
