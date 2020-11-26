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
      <header className="MainPage_Header" />
      <MovieSlider size="large" count={5} movies={state.selectedMovies} />
      <MovieSlider
        sliderTitle={t("mainPage:topRated")}
        size="medium"
        count={5}
        movies={handleSortByRating()}
      />
      <MovieSlider
        sliderTitle="Top rated"
        size="medium"
        count={5}
        movies={handleSortByRating()}
      />
    </main>
  );
}

export default MainPage;
