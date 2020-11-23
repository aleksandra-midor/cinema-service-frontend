import React, { useContext } from "react";
import MovieSlider from "../../Components/MovieSlider/MovieSlider";
import AppContext from "../../store/context";

import "./MainPage.scss";

function MainPage() {
  const { state } = useContext(AppContext);

  const handleSortByRating = () => {
    const sortedMovies = [...state.selectedMovies];
    return sortedMovies
      .sort((a, b) => {
        return a.imdbRating - b.imdbRating;
      })
      .reverse();
  };
  return (
    <main className="MainPage">
      <header className="MainPage_Header" />
      <MovieSlider size="large" count={5} movies={state.selectedMovies} />
      {/* <h1>Our films</h1> */}
      {/* <h3>Top rated</h3> */}
      <MovieSlider
        sliderTitle="Top rated"
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
