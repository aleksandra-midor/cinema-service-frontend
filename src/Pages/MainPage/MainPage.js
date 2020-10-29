import React, { useContext } from "react";
import MovieSlider from "../../Components/MovieSlider/MovieSlider";
import AppContext from "../../store/context";

function MainPage() {
  const { state } = useContext(AppContext);
  return (
    <main className="MainPage">
      <header className="MainPage_Header">
        <h1>Premieres</h1>
      </header>
      <MovieSlider count={3} movies={state.movies} />
    </main>
  );
}

export default MainPage;
