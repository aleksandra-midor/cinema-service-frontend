import React from "react";
import { Link } from "@reach/router";
import MovieImage from "../MovieImage/MovieImage";
import "./MovieSlider.scss";
import i18n from "../../i18n/i18n";

function MovieSlider(props) {
  const { language } = i18n;

  return (
    <section className={`MovieSlider MovieSlider-${props.size}`}>
      {props.sliderTitle ? (
        <p className="MovieSlider_Title">{props.sliderTitle}</p>
      ) : null}
      <ul data-testid="MovieSlider" className="MovieSlider_List">
        {props.movies.slice(0, props.count).map((el, i) => {
          return (
            <li
              data-testid="MovieSlider_Image"
              className="MovieSlider_Image"
              key={`${el.movieId}_${props.sliderTitle}`}
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
    </section>
  );
}

export default MovieSlider;
