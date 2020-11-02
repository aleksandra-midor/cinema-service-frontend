import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";
import allMoviesSv from "../Pages/AllMovies/i18n/sv.json";
import allMoviesPl from "../Pages/AllMovies/i18n/pl.json";

const resources = {
  sv: { allMovies: allMoviesSv },
  pl: { allMovies: allMoviesPl },
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
