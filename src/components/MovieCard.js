import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = (props) => {
    const {data}=props;

    if(!data) return null;

  return (
    <div className='w-36 md:w-48 pr-4'>
        <img alt='movie-card' src={IMG_CDN_URL+data}></img>
    </div>
  )
}

export default MovieCard