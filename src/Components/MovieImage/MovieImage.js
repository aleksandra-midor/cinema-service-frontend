import React from "react";
import "./MovieImage.scss";
import Image from "../Image/Image";

function MovieImage(props) {
  return (
    <div className="MovieImage">
      <Image width={450} imageName={props.src} title={props.title} />
      <p className="MovieImage_Title">{props.title}</p>
    </div>
  );
}

export default MovieImage;
