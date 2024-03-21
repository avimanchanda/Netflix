import React from 'react'
import { options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { addUpcomingMovies } from '../utils/movieSlice'

const useUpcomingMovies = () => {

     // Fetch Data from TMDB API and update Store:
  const dispatch=useDispatch();

  const getupcomingmovies = async () =>{
    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
    const json=await data.json()
    console.log(json)
    dispatch(addUpcomingMovies(json.results))
  }

  useEffect(()=>{
    getupcomingmovies();
  },[])


  
}

export default useUpcomingMovies