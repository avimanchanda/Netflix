import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import {BG_URL} from "../utils/constants"

const GptSearch = () => {
  return (
    <>
      <div className='fixed -z-10'>
        <img className='h-screen object-cover md:h-full' alt="logo" src={BG_URL}></img>
        </div>
  
    <div className=''>
     
        <GptSearchBar></GptSearchBar>
        <GptMovieSuggestions></GptMovieSuggestions>
    </div>
    </>
  )
}

export default GptSearch