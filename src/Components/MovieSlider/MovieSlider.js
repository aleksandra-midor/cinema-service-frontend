import React from "react";
import { Link } from "@reach/router";
import MovieImage from "../MovieImage/MovieImage";
import "./MovieSlider.scss";
import i18n from "../../i18n/i18n";

function MovieSlider(props) {
  const { language } = i18n;
  return (
    <ul
      data-testid="MovieSlider"
      className={`MovieSlider MovieSlider-${props.size}`}
    >
      {props.movies.slice(0, props.count).map((el) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <li
            data-testid="MovieSlider_Image"
            className="MovieSlider_Image"
            key={el._id}
          >
            <Link to={`/movie/${el.movieId}`}>
              <MovieImage
                size={props.size}
                src={el.posterImage}
                title={el.title[language]}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default MovieSlider;
