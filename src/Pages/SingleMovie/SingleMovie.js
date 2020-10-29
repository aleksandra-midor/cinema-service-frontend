import React, { useEffect, useState, useContext, useCallback } from "react";
import Image from "../../Components/Image/Image";
import "./SingleMovie.scss";
import AppContext from "../../store/context";

function SingleMovie(props) {
  const { movieId } = props;
  // console.log(props);
  const { state } = useContext(AppContext);

  const [movieData, setMovieData] = useState();

  const findMovie = useCallback(
    (id) => {
      return state.movies.find((amovie) => amovie.id === id);
      // return <p>{foundMovie.title}</p>;
    },

    [state]
  );

  useEffect(() => {
    if (!movieData || (movieData && movieData.id !== movieId)) {
      const foundMovie = findMovie(movieId);
      console.log(foundMovie);

      if (foundMovie) {
        setMovieData(foundMovie);
      }
    }
  }, [movieData, movieId, findMovie]);
  if (movieData) {
    console.log(movieData);
    return (
      <main className="SingleMovie">
        <Image src={movieData.posterurl} title={movieData.title} />
        <section className="SingleMovie_Info">
          <h1>{movieData.id}</h1>
          <p>{movieData.storyline}</p>
        </section>
      </main>
    );
  }
  return <>loading</>;
}
export default SingleMovie;
