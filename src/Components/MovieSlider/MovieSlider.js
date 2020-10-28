import React from "react";
import { Link } from "@reach/router";
import MovieImage from "../MovieImage/MovieImage";
import "./MovieSlider.scss";

function MovieSlider(props) {
  console.log(props.movies.slice(0, props.count));
  return (
    <ul className="MovieSlider MovieSlider-large">
      {props.movies.slice(0, props.count).map((el, i) => {
        console.log();
        return (
          // eslint-disable-next-line react/no-array-index-key
          <li className="MovieSlider_Image" key={i}>
            <Link to={`/movie/${el.id}`}>
              <MovieImage src={el.posterurl} title={el.title} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default MovieSlider;
