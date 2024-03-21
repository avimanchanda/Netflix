import React from 'react'

const VideoTitle = (props) => {

    const {title,overview}=props;

  return (
    <div className='w-full aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
        <div className='flex gap-3 my-5 md:m-0'>
            <button className='bg-white text-black py-1 md:py-4 px-3  md:px-12 w-13 text-xl  rounded hover:bg-opacity-80 transition-all'>▶ Play</button>
            <button className='bg-gray-500 text-white hidden md:inline-block p-4 px-12 w-13 text-xl bg-opacity-50 rounded hover:bg-opacity-80 transition-all'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle