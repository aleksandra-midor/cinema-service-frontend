import React, { useEffect, useState } from "react";
import findMovie from "./helper";
import Image from "../../Components/Image/Image";
import "./SingleMovie.scss";

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
