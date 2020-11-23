import React, { useContext } from "react";
import MovieSlider from "../../Components/MovieSlider/MovieSlider";
import AppContext from "../../store/context";

import "./MainPage.scss";

function MainPage() {
  const { state } = useContext(AppContext);

  const handleSortByRating = () => {
    const sortedMovies = state.movies.sort((a, b) => {
      return a.imdbRating - b.imdbRating;
    });
    return sortedMovies.reverse();
  };
  return (
    <main className="MainPage">
      <header className="MainPage_Header" />
      <MovieSlider size="large" count={3} movies={state.selectedMovies} />
      <MovieSlider size="medium" count={5} movies={handleSortByRating()} />
      {/* <h1>Premieres</h1> */}
    </main>
  );
}

export default MainPage;
