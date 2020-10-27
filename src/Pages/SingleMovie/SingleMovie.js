import React, { useEffect, useState } from "react";
import findMovie from "./helper";

function SingleMovie(props) {
  const { movieId } = props;
  // console.log(props);
  console.log(findMovie(props.movieId));

  const [movieData, setMovieData] = useState();

  useEffect(() => {
    if (!movieData || (movieData && movieData.id !== movieId)) {
      const foundMovie = findMovie(movieId);
      console.log(foundMovie);

      if (foundMovie) {
        setMovieData(foundMovie);
      }
    }
  }, [movieData, movieId]);
  if (movieData) {
    return <>{movieData.id}</>;
  }
  return <>loading</>;
}
export default SingleMovie;
