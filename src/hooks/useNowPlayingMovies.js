import React from 'react'
import { options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addnowPlayingMovies } from '../utils/movieSlice'
import { useEffect } from 'react'

const useNowPlayingMovies = () => {

     // Fetch Data from TMDB API and update Store:
  const dispatch=useDispatch();

  const nowplayingmovies=useSelector(store=>store.movies.nowplayingmovies)

  const getnowplayingmovies = async () =>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options);
    const json=await data.json()
    console.log(json)
    dispatch(addnowPlayingMovies(json.results))
  }

  useEffect(()=>{
    if(!nowplayingmovies)
    {
      getnowplayingmovies();
    }
    
  },[])


  
}

export default useNowPlayingMovies