import React, { useContext } from "react";
import MovieSlider from "../../Components/MovieSlider/MovieSlider";
import AppContext from "../../store/context";

import "./MainPage.scss";

function MainPage() {
  const { state } = useContext(AppContext);
  return (
    <main className="MainPage">
      <header className="MainPage_Header" />
      <MovieSlider count={5} movies={state.selectedMovies} />
      {/* <h1>Premieres</h1> */}
    </main>
  );
}

export default MainPage;
