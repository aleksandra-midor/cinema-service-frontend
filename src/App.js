import React, { useEffect, useReducer } from "react";
import "./App.scss";
import { Router } from "@reach/router";
import AppContext from "./store/context";
import store from "./store";
import MainPage from "./Pages/MainPage/MainPage";
import NavBar from "./Components/NaVBar/NavBar";
import SingleMovie from "./Pages/SingleMovie/SingleMovie";
import AllMovies from "./Pages/AllMovies/AllMovies";
import movies from "./data/top-rated-movies-01.json";

function App() {
  const [state, dispatch] = useReducer(store.reducer, store.initialState);

  // const setMovies = (data) => dispatch({ type: "setMovies", data });
  // setMovies(movies);

  useEffect(() => {
    dispatch({ type: "setMovies", data: movies });
  }, [dispatch]);

  console.log(state);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <NavBar />
        <Router>
          <MainPage path="/" />
          <SingleMovie path="movie/:movieId" />
          <AllMovies path="movies" />
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
