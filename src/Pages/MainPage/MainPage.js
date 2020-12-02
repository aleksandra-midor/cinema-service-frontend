/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import MovieSlider from "../../Components/MovieSlider/MovieSlider";
import AppContext from "../../store/context";
import "./MainPage.scss";

function MainPage() {
  const { state } = useContext(AppContext);
  const { selectedCinema, movies } = state;
  const { t } = useTranslation();

  const [todayMovies, setTodayMovies] = useState([]);

  const handleSortByRating = () => {
    const sortedMovies = [...state.selectedMovies];
    return sortedMovies
      .sort((a, b) => {
        return a.imdbRating - b.imdbRating;
      })
      .reverse();
  };

  useEffect(() => {
    if (selectedCinema) {
      const tempDay = new Date();
      const today = tempDay.toISOString().slice(0, 10);
      const todayRepertoire = selectedCinema.repertoire.filter((movie) => {
        const foundDate = movie.seance.find((el) => {
          return el.date === today && el.hours.length > 0;
        });
        return foundDate;
      });
      const foundMovies = movies.filter((film) => {
        const foundFilm = todayRepertoire.find(
          (el) => el.movieId === film.movieId
        );
        if (foundFilm) {
          return true;
        }
        return false;
      });
      setTodayMovies(foundMovies);
    }
  }, [selectedCinema, movies]);

  return (
    <main className="MainPage" data-testid="MainPage">
      <MovieSlider size="large" count={5} movies={state.selectedMovies} />
      <section className="Section_Container">
        <h2 className="Section_Header">{t("mainPage:news")}</h2>
        <p className="Section_Text">{t("mainPage:newsText")}</p>
      </section>
      <MovieSlider
        sliderTitle={t("mainPage:topRated")}
        size="medium"
        count={6}
        movies={handleSortByRating()}
      />
      <header className="MainPage_Header" />
      <MovieSlider
        sliderTitle={t("mainPage:nearFuture")}
        size="medium"
        count={12}
        movies={todayMovies}
      />
    </main>
  );
}

export default MainPage;
