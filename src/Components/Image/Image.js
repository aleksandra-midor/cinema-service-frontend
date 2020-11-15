import React from "react";
import "./Image.scss";

const Image = (props) => {
  return (
    <div className="Image">
      <img
        src={`https://res.cloudinary.com/midor/image/upload/v1605368758/cinemaparadiso/${props.imageName}.webp`}
        alt={props.title}
      />
    </div>
  );
};

export default Image;
