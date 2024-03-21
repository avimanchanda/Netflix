import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {

  const gpt = useSelector((store) => store.gpt.movienames)
  const gpt1 = useSelector((store) => store.gpt.movieResults)

  if (!gpt) return null

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
      <div>
        {gpt.map((movie, index) => {
          // Check if gpt1[index] is not null before rendering MovieList
          if (gpt1 && gpt1[index]) {
            return <MovieList key={movie} title={movie} movies={gpt1[index]} />
          } else {
            // Handle the case where gpt1[index] is null
            return null
          }
        })}
      </div>
    </div>
  )
}

export default GptMovieSuggestions