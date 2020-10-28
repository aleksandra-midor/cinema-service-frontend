import React from "react";
import { Link } from "@reach/router";
import Image from "../../Components/Image/Image";
import movies from "../../data/top-rated-movies-01.json";
import "./AllMovies.scss";

function AllMovies() {
  return (
    <main className="AllMovies">
      <h1>All movies</h1>
      <ul className="AllMovies_List">
        {movies.map((el, i) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={i}>
              <article className="AllMovies_Item">
                <Link to={`/movie/${el.id}`}>
                  <Image src={el.posterurl} title={el.title} />
                </Link>
                <section className="Item_Details">
                  <h2>{el.title}</h2>
                  <p>{el.genres}</p>
                  <p>{el.duration}</p>
                </section>
              </article>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default AllMovies;
