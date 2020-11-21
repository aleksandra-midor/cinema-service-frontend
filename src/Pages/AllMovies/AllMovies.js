import React, { useContext } from "react";
import { Link } from "@reach/router";
import { useTranslation } from "react-i18next";
import Image from "../../Components/Image/Image";
import "./AllMovies.scss";
import AppContext from "../../store/context";

function AllMovies() {
  const { t } = useTranslation();
  const { state } = useContext(AppContext);
  return (
    <main className="AllMovies">
      <h1>{t("allMovies:allMovies")}</h1>
      <ul className="AllMovies_List">
        {state.movies.map((el, i) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={i}>
              <article className="AllMovies_Item">
                <Link to={`/movie/${el.movieId}`}>
                  <Image imageName={el.posterImage} title={el.originalTitle} />
                </Link>
                <section className="Item_Details">
                  <Link to={`/movie/${el._id}`}>
                    <h2>{el.originalTitle}</h2>
                  </Link>
                  <p>{el.genres}</p>
                  <p>{el.duration}</p>
                </section>
              </article>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default AllMovies;
