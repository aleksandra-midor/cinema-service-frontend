import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import MovieSlider from "../../Components/MovieSlider/MovieSlider";
import AppContext from "../../store/context";
import "./MainPage.scss";

function MainPage() {
  const { state } = useContext(AppContext);
  const { t } = useTranslation();

  const handleSortByRating = () => {
    const sortedMovies = [...state.selectedMovies];
    return sortedMovies
      .sort((a, b) => {
        return a.imdbRating - b.imdbRating;
      })
      .reverse();
  };
  return (
    <main className="MainPage" data-testid="MainPage">
      <MovieSlider size="large" count={5} movies={state.selectedMovies} />
      <p>{t("mainPage:news")}</p>
      <MovieSlider
        sliderTitle={t("mainPage:topRated")}
        size="medium"
        count={5}
        movies={handleSortByRating()}
      />
      <header className="MainPage_Header" />
      <MovieSlider
        sliderTitle={t("mainPage:nearFuture")}
        size="medium"
        count={5}
        movies={handleSortByRating()}
      />
    </main>
  );
}

export default MainPage;
