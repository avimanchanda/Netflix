import React, { useEffect } from 'react'
import { options } from '../utils/constants';
import {  useDispatch } from 'react-redux';
import { addTrailerVideos } from '../utils/movieSlice';

const useMovieTrailer = (id) => {

    // Fetchimg the Trailer Video and updating the store
    const dispatch=useDispatch();

    const getMovieVideos=async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
        const json=await data.json()
        console.log(json)
        
        const filterdata=json.results.filter(video=>video.type==="Trailer")

        const trailer=filterdata.length ? filterdata[0] : json.results[0]

        console.log(trailer)
        dispatch(addTrailerVideos(trailer))

    }

    useEffect(()=>{
        getMovieVideos()
    },[])

}

export default useMovieTrailer