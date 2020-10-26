import React from 'react';
import Image from '../../Components/Image/Image';
import movies from '../../data/top-rated-movies-01.json' 

function MainPage() {
  console.log(movies[3].posterurl)
  return (
    <main className="MainPage">
    <header className="MainPage_Header">
    <h1>Cinema tickets</h1>
  </header>
  <Image src={movies[3].posterurl} title={movies[3].title}/>
  </main>
  )
}

export default MainPage;