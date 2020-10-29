import React, { useEffect, useReducer } from "react";
import "./App.scss";
import { Router } from "@reach/router";
import axios from "axios";
import AppContext from "./store/context";
import store from "./store";
import MainPage from "./Pages/MainPage/MainPage";
import NavBar from "./Components/NaVBar/NavBar";
import SingleMovie from "./Pages/SingleMovie/SingleMovie";
import AllMovies from "./Pages/AllMovies/AllMovies";
import movies from "./data/top-rated-movies-01.json";

// const baseUrl = process.env.REACT_APP_BASE_URL;
// console.log(baseUrl);

function App() {
  const [state, dispatch] = useReducer(store.reducer, store.initialState);

  // const setMovies = (data) => dispatch({ type: "setMovies", data });
  // setMovies(movies);

  useEffect(() => {
    const fetchAllMovies = async () => {
      const result = await axios({
        method: "get",
        url: "http://localhost:5001/api/v1/movies",
      });

      console.log(result);

      dispatch({ type: "setMovies", data: movies });
    };

    fetchAllMovies();
  }, [dispatch]);

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
