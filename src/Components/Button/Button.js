import React from "react";
import "./Button.scss";

const Button = ({
  children,
  color,
  // variant,
  onClick,
  disabled,
  className,
}) => {
  // const cssClasses = ["Button", "test",
  // color === "primary " ? "Button-primary" : ""
  // ];

  const cssClasses = ["Button"];
  if (color === "primary") {
    cssClasses.push("Button-primary");
  }
  if (className) {
    cssClasses.push(className);
  }

  return (
    <button
      disabled={disabled}
      type="button"
      onClick={onClick}
      className={cssClasses.join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
