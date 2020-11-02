import React, { useEffect, useState, useContext, useCallback } from "react";
import Image from "../../Components/Image/Image";
import "./SingleMovie.scss";
import AppContext from "../../store/context";
import Button from "../../Components/Button/Button";

function SingleMovie(props) {
  const { movieId } = props;
  const { state } = useContext(AppContext);

  const [movieData, setMovieData] = useState();
  const [repertoireData, setRepertoireData] = useState([]);

  const findMovie = useCallback(
    (id) => {
      return state.movies.find((amovie) => amovie._id === id);
    },

    [state]
  );

  const daysWithSeances = (houre, date) => {
    if (houre.length > 0) {
      return (
        <>
          <h3>{date}</h3>
          {houre.map((item) => (
            <Button key={item}>{item}</Button>
          ))}
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
    if (!movieData || (movieData && movieData._id !== movieId)) {
      const foundMovie = findMovie(movieId);

      if (foundMovie) {
        setMovieData(foundMovie);
      }
    }

    if (state.selectedCinema) {
      const foundRepertoire = state.selectedCinema.repertoire.find(
        (el) => el.movieId === movieId
      );
      if (foundRepertoire) {
        setRepertoireData(foundRepertoire.seance);
      }
    }
  }, [movieData, movieId, findMovie]);

  function repertoireRender() {
    if (repertoireData) {
      return (
        <section>
          <h2>Nearest seances</h2>
          <ul className="AllMovies_List">
            {dateSorter(repertoireData).map((el, i) => {
              console.log(el);
              return (
                // eslint-disable-next-line react/no-array-index-key
                <li key={i}>
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
    return <div>error</div>;
  }

  if (movieData) {
    return (
      <main className="SingleMovie">
        <Image src={movieData.posterurl} title={movieData.title} />
        <section className="SingleMovie_Info">
          <h1>{movieData.originalTitle}</h1>
          <p>{movieData.storyline}</p>
          {repertoireRender()}
        </section>
      </main>
    );
  }

  return <>loading</>;
}
export default SingleMovie;
