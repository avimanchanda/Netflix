import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const gptvalue=useSelector(store=>store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header></Header>
      {
        gptvalue ? (<GptSearch></GptSearch>) : (<>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer></>)

      }
      
    </div>
  )
}

export default Browse