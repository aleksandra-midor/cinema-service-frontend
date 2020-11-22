/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from "react";
import { Link } from "@reach/router";
import { useTranslation } from "react-i18next";
import Image from "../../Components/Image/Image";
import "./AllMovies.scss";
import i18n from "../../i18n/i18n";
import AppContext from "../../store/context";
import Button from "../../Components/Button/Button";

function AllMovies() {
  const { t } = useTranslation();
  const { state } = useContext(AppContext);
  const { language } = i18n;

  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredMovies = state.selectedMovies.filter((movie) =>
    movie.title[language].toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="AllMovies">
      <h1>{t("allMovies:allMovies")}</h1>
      <label>
        <span>Find a movie</span>
        <input value={search} onInput={handleSearch} />
      </label>
      <Button onClick={() => setSearch("")}>Clear</Button>
      {filteredMovies.length > 0 ? (
        <ul className="AllMovies_List">
          {filteredMovies.map((el) => {
            return (
              <li key={el.movieId}>
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
      ) : (
        <p>Nothing found</p>
      )}
    </main>
  );
}
export default AllMovies;
