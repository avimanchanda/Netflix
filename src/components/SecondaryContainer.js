import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies=useSelector((store)=>store.movies)
  return (
    movies.nowplayingmovies && (
      <div className='bg-black'>
    <div className='mt-0 md:-mt-64 z-20 relative pl-4 md:pl-12'>
      <MovieList title="Now Playing" movies={movies.nowplayingmovies} ></MovieList>
      <MovieList title="Trending" movies={movies.topratedmovies} ></MovieList>
      <MovieList title="Popular" movies={movies.popularmovies} ></MovieList>
      <MovieList title="Upcoming Movies" movies={movies.upcomingmovies} ></MovieList>
      <MovieList title="Horror" movies={movies.nowplayingmovies} ></MovieList>

    </div>
    </div>
  )
  );
}

export default SecondaryContainer