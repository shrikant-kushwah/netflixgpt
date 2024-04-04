import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black aspect-video w-screen'>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='py-2 text-md font-thin w-1/4'>{overview}</p>
      <div className='py-4'>
        <button className='p-2 px-10 bg-white text-black text-xl font-bold rounded-lg hover:bg-opacity-80'>▶️ Play</button>
        <button className='p-2 px-10 mx-2 bg-white text-black text-xl font-bold rounded-lg hover:bg-opacity-80'>ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;
