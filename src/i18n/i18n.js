import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";
import allMoviesSv from "../Pages/AllMovies/i18n/sv.json";
import allMoviesPl from "../Pages/AllMovies/i18n/pl.json";
import mainPageSv from "../Pages/MainPage/i18n/sv.json";
import mainPagePl from "../Pages/MainPage/i18n/pl.json";
import singleMovieSv from "../Pages/SingleMovie/i18n/sv.json";
import singleMoviePl from "../Pages/SingleMovie/i18n/pl.json";
import navBarSv from "../Components/NavBar/i18n/sv.json";
import navBarPl from "../Components/NavBar/i18n/pl.json";
import modalSv from "../Components/Modal/i18n/sv.json";
import modalPl from "../Components/Modal/i18n/pl.json";
import thankYouPl from "../Pages/BuyTicket/Steps/ThankYou/i18n/Pl.json";
import thankYouSv from "../Pages/BuyTicket/Steps/ThankYou/i18n/Sv.json";
import cinemaSelectionSv from "../Components/CinemaSelection/i18n/sv.json";
import cinemaSelectionPl from "../Components/CinemaSelection/i18n/pl.json";
import ticketSv from "../Pages/BuyTicket/Steps/Ticket/i18n/Sv.json";
import ticketPl from "../Pages/BuyTicket/Steps/Ticket/i18n/Pl.json";
import selectSeatsSv from "../Pages/BuyTicket/Steps/SelectSeats/i18n/Sv.json";
import selectSeatsPl from "../Pages/BuyTicket/Steps/SelectSeats/i18n/Pl.json";
import checkOutSv from "../Components/CheckoutForm/i18n/Sv.json";
import checkOutPl from "../Components/CheckoutForm/i18n/Pl.json";

const resources = {
  sv: {
    allMovies: allMoviesSv,
    mainPage: mainPageSv,
    singleMovie: singleMovieSv,
    navBar: navBarSv,
    modal: modalSv,
    cinemaSelection: cinemaSelectionSv,
    thankYou: thankYouSv,
    ticket: ticketSv,
    selectSeats: selectSeatsSv,
    checkOut: checkOutSv,
  },
  pl: {
    allMovies: allMoviesPl,
    mainPage: mainPagePl,
    singleMovie: singleMoviePl,
    navBar: navBarPl,
    modal: modalPl,
    cinemaSelection: cinemaSelectionPl,
    thankYou: thankYouPl,
    ticket: ticketPl,
    selectSeats: selectSeatsPl,
    checkOut: checkOutPl,
  },
};

const languages = Object.keys(resources);
const fallbackLng = "sv";

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    resources,
    fallbackLng,
    preload: languages,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
export { languages, fallbackLng };
