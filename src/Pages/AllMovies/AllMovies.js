import React, { useContext } from "react";
import { Link } from "@reach/router";
import { useTranslation } from "react-i18next";
import Image from "../../Components/Image/Image";
import "./AllMovies.scss";
import i18n from "../../i18n/i18n";
import AppContext from "../../store/context";

function AllMovies() {
  const { t } = useTranslation();
  const { state } = useContext(AppContext);
  const { language } = i18n;
  console.log("language", language);

  return (
    <main className="AllMovies">
      <h1>{t("allMovies:allMovies")}</h1>
      <ul className="AllMovies_List">
        {state.selectedMovies.map((el, i) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={i}>
              <article className="AllMovies_Item">
                <Link to={`/movie/${el.movieId}`}>
                  <Image
                    imageName={el.posterImage}
                    title={el.title[language]}
                  />
                </Link>
                <section className="Item_Details">
                  <Link to={`/movie/${el.movieId}`}>
                    <h2>{el.title[language]}</h2>
                  </Link>
                  <p>{el.genres.join(", ")}</p>
                  <p>{el.duration.replace("PT", "").replace("M", " min")}</p>
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
