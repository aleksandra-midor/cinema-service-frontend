import React from "react";
import { Link } from "@reach/router";
import MovieImage from "../MovieImage/MovieImage";
import "./MovieSlider.scss";

function MovieSlider(props) {
  return (
    <ul className="MovieSlider MovieSlider-large">
      {props.movies.slice(3, props.count + 3).map((el, i) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <li className="MovieSlider_Image" key={i}>
            <Link to={`/movie/${el._id}`}>
              <MovieImage src={el.posterurl} title={el.title} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default MovieSlider;
