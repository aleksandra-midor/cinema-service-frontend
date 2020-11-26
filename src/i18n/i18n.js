import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";
import allMoviesSv from "../Pages/AllMovies/i18n/sv.json";
import allMoviesPl from "../Pages/AllMovies/i18n/pl.json";
import mainPageSv from "../Pages/MainPage/i18n/sv.json";
import mainPagePl from "../Pages/MainPage/i18n/pl.json";
import singleMovieSv from "../Pages/SingleMovie/i18n/sv.json";
import singleMoviePl from "../Pages/SingleMovie/i18n/pl.json";

const resources = {
  sv: {
    allMovies: allMoviesSv,
    mainPage: mainPageSv,
    singleMovie: singleMovieSv,
  },
  pl: {
    allMovies: allMoviesPl,
    mainPage: mainPagePl,
    singleMovie: singleMoviePl,
  },
};

const preload = Object.keys(resources);

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    resources,
    fallbackLng: "sv",
    preload,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
