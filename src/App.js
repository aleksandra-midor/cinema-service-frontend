import React, { useEffect, useReducer } from "react";
import "./App.scss";
import { withTranslation } from "react-i18next";
import { Router } from "@reach/router";
import axios from "axios";
import AppContext from "./store/context";
import store from "./store";
import MainPage from "./Pages/MainPage/MainPage";
import NavBar from "./Components/temp/NavBar";
import SingleMovie from "./Pages/SingleMovie/SingleMovie";
import AllMovies from "./Pages/AllMovies/AllMovies";
import CinemaSelection from "./Components/CinemaSelection/CinemaSelection";
import BuyTicket from "./Pages/BuyTicket/BuyTicket";

const baseUrl = process.env.REACT_APP_BASE_URL;

function App() {
  const [state, dispatch] = useReducer(store.reducer, store.initialState);

  useEffect(() => {
    const fetchAllMovies = async () => {
      const result = await axios({
        method: "get",
        url: `${baseUrl}/api/v1/movies`,
      });

      dispatch({ type: "setMovies", data: result.data });
    };

    fetchAllMovies();
  }, [dispatch]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <NavBar />
        <div className="App_Content">
          <Router>
            <MainPage path="/" />
            <SingleMovie path="movie/:movieId" />
            <AllMovies path="movies" />
            <BuyTicket path="ticket" />
          </Router>
        </div>
        <CinemaSelection />
      </div>
    </AppContext.Provider>
  );
}

export default withTranslation()(App);
