import React from "react";
import { Router } from "@reach/router";
import AppContext from "../store/context";
import movies from "./movies.json";
import cinemas from "./cinema.json";

export const getTestStore = () => {
  return {
    dispatch: () => {},
    state: {
      movies,
      cinemas,
      selectedCinema: {
        name: "Gothenburg Paradiso",
        city: "Gothenburg",
        address: "Sofiagatan 12",
        email: "gothenburg@paradiso.com",
        phone: "076122334455",
        ticketPrice: "180",
        repertoire: [
          {
            movieId: "12-angry-men_1957",
            seance: [["16:30"], [], [], [], [], ["9:30"], []],
          },
          {
            movieId: "casablanca_1942",
            seance: [["13:30"], ["23:00"], [], ["20:00"], [], [], ["13:30"]],
          },
          {
            movieId: "the-usual-suspects_1995",
            seance: [
              ["9:30"],
              ["16:30", "14:00"],
              [],
              [],
              ["23:00"],
              [],
              ["9:30"],
            ],
          },
          {
            movieId: "terminator-2-judgment-day_1991",
            seance: [[], ["20:00"], [], [], [], ["11:00"], []],
          },
          {
            movieId: "whiplash_2014",
            seance: [[], ["9:30"], [], ["23:00", "10:30"], ["9:00"], [], []],
          },
          {
            movieId: "the-silence-of-the-lambs_1991",
            seance: [[], [], ["23:30", "17:30"], [], ["17:00"], [], []],
          },
          {
            movieId: "the-green-mile_1999",
            seance: [[], [], ["20:30"], [], [], ["19:30"], ["20:30"]],
          },
        ],
      },
      selectedMovies: movies.filter(
        (movie) =>
          movie.movieId === "12-angry-men_1957" ||
          movie.movieId === "casablanca_1942" ||
          movie.movieId === "the-usual-suspects_1995" ||
          movie.movieId === "terminator-2-judgment-day_1991" ||
          movie.movieId === "whiplash_2014" ||
          movie.movieId === "the-silence-of-the-lambs_1991" ||
          movie.movieId === "the-green-mile_1999"
      ),
      ticket: {},
    },
  };
};

export const WithProvider = (props) => {
  const { state, dispatch } = getTestStore();
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Router>{props.children}</Router>
    </AppContext.Provider>
  );
};
