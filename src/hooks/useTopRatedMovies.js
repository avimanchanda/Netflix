import React from 'react'
import { options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { addTopRatedMovies } from '../utils/movieSlice'

const useTopRatedMovies = () => {

     // Fetch Data from TMDB API and update Store:
  const dispatch=useDispatch();

  const gettopratedmovies = async () =>{
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
    const json=await data.json()
    console.log(json)
    dispatch(addTopRatedMovies(json.results))
  }

  useEffect(()=>{
    gettopratedmovies();
  },[])


  
}

export default useTopRatedMovies