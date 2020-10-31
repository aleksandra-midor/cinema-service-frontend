import React from "react";
import "./Image.scss";

const Image = (props) => {
  return (
    <div className="Image">
      <img src={props.src} alt={props.title} />
    </div>
  );
};

export default Image;
