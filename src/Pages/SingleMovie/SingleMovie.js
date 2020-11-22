import React, { useEffect, useState, useContext, useCallback } from "react";
import { navigate } from "@reach/router";
import Image from "../../Components/Image/Image";
import "./SingleMovie.scss";
import AppContext from "../../store/context";
import Button from "../../Components/Button/Button";
import i18n from "../../i18n/i18n";

function SingleMovie(props) {
  const { movieId } = props;
  const { state, dispatch } = useContext(AppContext);
  const { language } = i18n;
  // const { ticket } = state;

  const [movieData, setMovieData] = useState();
  const [repertoireData, setRepertoireData] = useState([]);

  const findMovie = useCallback(
    (id) => {
      return state.selectedMovies.find((amovie) => amovie.movieId === id);
    },
    [state]
  );

  const setTicket = (data) => {
    dispatch({ type: "setTicket", data });
  };

  const daysWithSeances = (houre, date) => {
    if (houre.length > 0) {
      return (
        <>
          <h3>{date}</h3>
          <ul>
            {houre.map((item) => (
              <li className="Seances_Hour" key={date + item}>
                <p key={date + item}>{item}</p>
                <Button
                  key={item}
                  onClick={() => {
                    setTicket({
                      movieId: movieData._id,
                      movieTitle: movieData.title[language],
                      date,
                      hour: item,
                      cinemaId: state.selectedCinema._id,
                      cinemaName: state.selectedCinema.name,
                      seats: [],
                    });
                    navigate("/ticket");
                  }}
                >
                  Buy a ticket
                </Button>
                {/* // <Button key={item}>{item}</Button> */}
              </li>
            ))}
          </ul>
        </>
      );
    }
    return null;
  };

  const dateSorter = (dates) => {
    const today = new Date().getDay();
    const sortedDates = [];

    for (let i = today; i < dates.length; i += 1) {
      sortedDates.push(dates[i]);
    }
    for (let i = 0; i < today; i += 1) {
      sortedDates.push(dates[i]);
    }
    return sortedDates;
  };

  useEffect(() => {
    if (!movieData || (movieData && movieData.movieId !== movieId)) {
      const foundMovie = findMovie(movieId);

      if (foundMovie) {
        setMovieData(foundMovie);
      }
    }

    if (state.selectedCinema) {
      console.log("reppertoire", state.selectedCinema.repertoire);
      const foundRepertoire = state.selectedCinema.repertoire.find((el) => {
        console.log("el:", el.movieId);
        console.log("movieId:", movieId);
        return el.movieId === movieId;
      });
      // console.log("movieId", movieId);
      if (foundRepertoire) {
        setRepertoireData(foundRepertoire.seance);
      }
    }
  }, [movieData, movieId, findMovie, state.selectedCinema]);

  function repertoireRender() {
    if (repertoireData.length > 0) {
      return (
        <section className="Seances">
          <h2>Nearest seances</h2>
          <ul>
            {dateSorter(repertoireData).map((el, i) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <li className="Seances_Date" key={i}>
                  <article className="Item_Details">
                    {/* <h3>{el.date}</h3> */}
                    {daysWithSeances(el.hours, el.date)}
                  </article>
                </li>
              );
            })}
          </ul>
        </section>
      );
    }
    return <div> ------------------ currently not in this cinema</div>;
  }

  if (movieData) {
    return (
      <main className="SingleMovie">
        <Image
          imageName={movieData.posterImage}
          title={movieData.title[language]}
        />
        <section className="SingleMovie_Info">
          <h1>{movieData.title[language]}</h1>
          <p>{movieData.storyline[language]}</p>
          {repertoireRender()}
        </section>
      </main>
    );
  }

  return <p>loading</p>;
}
export default SingleMovie;
