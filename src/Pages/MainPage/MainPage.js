import React, {
  useContext,
  // useEffect, useState
} from "react";
import { useTranslation } from "react-i18next";
import MovieSlider from "../../Components/MovieSlider/MovieSlider";
import AppContext from "../../store/context";
import "./MainPage.scss";

function MainPage() {
  const { state } = useContext(AppContext);
  // const { selectedCinema } = state;
  const { t } = useTranslation();

  const handleSortByRating = () => {
    const sortedMovies = [...state.selectedMovies];
    return sortedMovies
      .sort((a, b) => {
        return a.imdbRating - b.imdbRating;
      })
      .reverse();
  };

  // const tempDay = new Date();
  // const today = tempDay.toISOString().slice(0, 10);
  // console.log("daaaaaaaaaaaaaaaaaaaaaaaaaaay", today);

  // const [todayMovies, setTodayMovies] = useState();

  // useEffect(() => {
  //   if (selectedCinema) {
  //     const foundMovies = selectedCinema.repertoire.filter((movie) => {
  //       console.log(movie);
  //       const foundDate = movie.seance.find((el) => el.date === today
  //     })
  //     }
  //     });
  //       return foundDate;
  //     });

  //     setTodayMovies(foundMovies);
  //   }
  // }, [selectedCinema, today]);

  // console.log(todayMovies);

  return (
    <main className="MainPage" data-testid="MainPage">
      <MovieSlider size="large" count={5} movies={state.selectedMovies} />
      <section className="Section_Container">
        <h2 className="Section_Header">{t("mainPage:news")}</h2>
        <p className="Section_Text">{t("mainPage:newsText")}</p>
      </section>
      <MovieSlider
        sliderTitle={t("mainPage:topRated")}
        size="medium"
        count={11}
        movies={handleSortByRating()}
      />
      <header className="MainPage_Header" />
      <MovieSlider
        sliderTitle={t("mainPage:nearFuture")}
        size="medium"
        count={5}
        movies={handleSortByRating()}
      />
    </main>
  );
}

export default MainPage;
