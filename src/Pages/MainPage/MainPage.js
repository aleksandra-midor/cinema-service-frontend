import React from 'react';
import MovieSlider from '../../Components/MovieSlider/MovieSlider';
import movies from '../../data/top-rated-movies-01.json' 

function MainPage() {
  console.log(movies[3].posterurl)
  return (
    <main className="MainPage">
    <header className="MainPage_Header">
    <h1>Cinema tickets</h1>
  </header>
  <MovieSlider count={3} movies={movies}/>
  </main>
  )
}

export default MainPage;