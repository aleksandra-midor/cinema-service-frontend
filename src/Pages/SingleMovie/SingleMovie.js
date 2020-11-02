import React, { useEffect, useState, useContext, useCallback } from "react";
import Image from "../../Components/Image/Image";
import "./SingleMovie.scss";
import AppContext from "../../store/context";
import Button from "../../Components/Button/Button";

function SingleMovie(props) {
  const { movieId } = props;
  // console.log(props);
  const { state } = useContext(AppContext);

  const [movieData, setMovieData] = useState();
  const [repertoireData, setRepertoireData] = useState([]);

  const findMovie = useCallback(
    (id) => {
      return state.movies.find((amovie) => amovie._id === id);
      // return <p>{foundMovie.title}</p>;
    },

    [state]
  );

  const daysWithSeances = (houre, date) => {
    if (houre.length > 0) {
      console.log(houre.length);

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

  useEffect(() => {
    if (!movieData || (movieData && movieData._id !== movieId)) {
      const foundMovie = findMovie(movieId);
      console.log(foundMovie);

      if (foundMovie) {
        setMovieData(foundMovie);
      }
    }

    if (state.selectedCinema) {
      const foundRepertoire = state.selectedCinema.repertoire.find(
        (el) => el.movieId === movieId
      );
      if (foundRepertoire) {
        console.log(foundRepertoire.seance);
        setRepertoireData(foundRepertoire.seance);
      }
    }
  }, [movieData, movieId, findMovie]);

  function repertoireRender() {
    console.log("44444444444444444444444444444", repertoireData);
    if (repertoireData) {
      return (
        <section>
          <h2>Nearest seances</h2>
          <ul className="AllMovies_List">
            {/* {repertoireData[0].date} */}
            {repertoireData.map((el, i) => {
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
    console.log(movieData);
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
