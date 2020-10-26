import React from 'react';
import MovieImage from '../MovieImage/MovieImage'

function MovieSlider (props) {
  console.log(props.movies.slice(0, props.count))
  return (
    <div>
      <ul>
        {props.movies.slice(3, 3 + props.count).map((el, i) => {
          console.log()
          return (
          <li key={i}>
            <MovieImage src={el.posterurl} title={el.title}/>
          </li>
          )
        }
        )}
      </ul>
    </div>
  )
}

export default MovieSlider;