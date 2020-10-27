import movies from "../../data/top-rated-movies-01.json";

const findMovie = (id) => {
  return movies.find((amovie) => amovie.id === id);
  // return <p>{foundMovie.title}</p>;
};

export default findMovie;
