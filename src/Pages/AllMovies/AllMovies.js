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
      <header className="AllMovies_Header">
        <h1>{t("allMovies:allMovies")}</h1>

        <div className="AllMovies_Search">
          <label className="Search_Label">
            <span>{t("allMovies:findMovie")}</span>
            <input
              className="Search_Input"
              value={search}
              onInput={handleSearch}
            />
          </label>
          <Button className="Search_Clear" onClick={() => setSearch("")}>
            Clear
          </Button>
        </div>
      </header>
      {filteredMovies.length > 0 ? (
        <ul className="AllMovies_List">
          {filteredMovies.map((el) => {
            return (
              <li key={el.movieId}>
                <article className="AllMovies_Item">
                  <Link to={`/movie/${el.movieId}`}>
                    <Image
                      width={100}
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
        <p>{t("allMovies:nothingFound")}</p>
      )}
    </main>
  );
}
export default AllMovies;
