import React from 'react'
import { PlayIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon  } from "@heroicons/react/24/outline";


const VideoTitle = ({title, overview}) => {
  return (
    <div className='absolute top-0 left-0 w-screen aspect-video bg-gradient-to-r from-black z-20'>
        <div className='pt-56 px-12 md:w-1/2 w-3/4 absolute text-white'>
            <h1 className='text-lg md:text-4xl font-bold'>{title}</h1>
            <p className='hidden md:inline-block py-6 pt-8'>{overview}</p>
            <div className='mx-0 md:mx-4 flex gap-4'>
                <button className='bg-white text-black h-12 mt-2 p-2 md:p-4 px-1 md:px-8 rounded-lg md:text-xl text-lg flex items-center gap-2 hover:bg-opacity-70'>
                    <PlayIcon className="md:w-6 md:h-6 w-3 h-3" />
                    Play
                </button>
                <button className='bg-white bg-opacity-20 h-12 mt-2 text-white p-2 md:p-4 px-1 md:px-8 rounded-lg md:text-xl text-lg flex items-center gap-1 hover:bg-opacity-50'>
                    <InformationCircleIcon className='w-6 h-6'/>
                    More Info
                </button>
            </div>
        
        </div>
    </div>
  )
}

export default VideoTitle
