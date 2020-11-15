import React from "react";
import { Link } from "@reach/router";
import MovieImage from "../MovieImage/MovieImage";
import "./MovieSlider.scss";

function MovieSlider(props) {
  return (
    <ul data-testid="MovieSlider" className="MovieSlider MovieSlider-large">
      {props.movies.slice(3, props.count + 3).map((el) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <li
            data-testid="MovieSlider_Image"
            className="MovieSlider_Image"
            key={el._id}
          >
            <Link to={`/movie/${el._id}`}>
              <MovieImage src={el.posterImage} title={el.title} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default MovieSlider;
