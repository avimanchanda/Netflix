import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {

    const movies=useSelector((store)=>store?.movies?.nowplayingmovies)

    if(!movies) return;

    const mainmovies=movies[0]
    console.log(mainmovies)

    const {original_title,overview,id}=mainmovies

  return (
    <div className='pt-[30%] bg-black md:pt-0'>
        <VideoTitle title={original_title} overview={overview}></VideoTitle>
        <VideoBackground id={id}></VideoBackground>
    </div>
  )
}

export default MainContainer