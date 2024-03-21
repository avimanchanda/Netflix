import React from 'react'
import MovieCard from './MovieCard';

const MovieList = (props) => {
    const {title,movies }=props;
    console.log(movies)
  return (
    <div className='px-6 bg-black'>
      <h1 className='text-lg md:text-3xl py-4 font-bold text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
          
            <div className='flex'>
            {movies?.map((obj)=>{
                    return(
                        
                        <MovieCard key={obj.id} data={obj.poster_path}></MovieCard>  
                        
                    )
                })}       
            </div>
        </div>
    </div>
  )
}

export default MovieList