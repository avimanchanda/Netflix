import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { options } from '../utils/constants'
import { addGPTMovieResults } from '../utils/gptSlice'
import { addGPTMovieNames } from '../utils/gptSlice'

const GptSearchBar = () => {
  const dispatch=useDispatch();
  const searchText=useRef(null)
  const langchoosen=useSelector(store=>store.config.language)
  console.log(langchoosen)

  // Search movie in TMDB

  const searchMovieTMDB=async(movie)=> {
    const data=await fetch (
      "https://api.themoviedb.org/3/search/movie?query="+
      movie+
      "&include_adult=false&language=en-US&page=1", options)

      const json=await data.json()
      return json.results;
  } 

  const handleGPTSearchClick=async()=>{
    // Make API call to GPT API and get movie results

    const gptQuery="Act as a Movie Recommendation System and suggest movie for the query :"+ searchText.current.value + ". only give name of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Don, Sholay, Golmaal, Koi Mil Gaya ";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    console.log(gptResults.choices?.[0]?.message?.content)

    const gptmovies=gptResults.choices?.[0]?.message?.content.split(",");

    dispatch(addGPTMovieNames(gptmovies))

    // For each movie search TMDB API

    const promisearray=gptmovies.map(movie=>searchMovieTMDB(movie))
    // The rsult will be an aaray of Promise

    const tmdbResults=await Promise.all(promisearray)

    console.log(tmdbResults)
    dispatch(addGPTMovieResults(tmdbResults))
  }
  

  return (
    <div className='pt-[30%] md:pt-[10%] flex justify-center '>
        <form className=' bg-black w-full md:w-1/2 grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
      
            <input ref={searchText} type='text' placeholder={lang[langchoosen].gptPlaceHolder} className='p-4 m-4 col-span-9'></input>
            <button className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4' onClick={handleGPTSearchClick}>{lang[langchoosen].search}</button>
        </form>
    </div>
  )
}


export default GptSearchBar