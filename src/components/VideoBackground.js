import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';

import { useSelector } from 'react-redux';

const VideoBackground = (props) => {
  const trailervideo=useSelector(store=>store.movies?.trailerVideos)
    const {id}=props;

        // Fetchimg the Trailer Video and updating the store
        useMovieTrailer(id);


  return (
    <div className='w-full'>
        <iframe className='w-full aspect-video' src={"https://www.youtube.com/embed/"+trailervideo?.key + "?&autoplay=1&mute=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground