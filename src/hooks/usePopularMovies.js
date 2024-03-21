import React from 'react'
import { options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {addPopularMovies} from "../utils/movieSlice"
import { useSelector } from 'react-redux'

const usePopularMovies = () => {

     // Fetch Data from TMDB API and update Store:
  const dispatch=useDispatch();
  const popularmovies=useSelector(store=>store.movies.popularmovies)


  const getpopularmovies = async () =>{
    const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
    const json=await data.json()
    console.log(json)
    dispatch(addPopularMovies(json.results))
  }

  useEffect(()=>{
    if(!popularmovies)
    {
      getpopularmovies();
    }
   
  },[])


  
}

export default usePopularMovies