import React, { useEffect, useState, useContext, useCallback } from "react";
import Image from "../../Components/Image/Image";
import "./SingleMovie.scss";
import AppContext from "../../store/context";

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
    if (repertoireData) {
      return (
        <div>
          Nearest seances
          {repertoireData[0].date}
        </div>
      );
    }
    return <div>kupa</div>;
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
