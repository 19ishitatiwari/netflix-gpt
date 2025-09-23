import React from 'react'
import { PlayIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon  } from "@heroicons/react/24/outline";


const VideoTitle = ({title, overview, backdrop_path}) => {
  return (
    <div className='absolute top-0 left-0 w-screen aspect-video bg-gradient-to-r from-black'>
        <div className='pt-56 px-12 w-1/2 absolute text-white'>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='py-6 pt-8'>{overview}</p>
            <div className='mx-4 flex gap-4'>
                <button className='bg-white text-black p-4 px-8 rounded-lg text-xl flex items-center gap-2 hover:bg-opacity-70'>
                    <PlayIcon className="w-6 h-6" />
                    Play
                </button>
                <button className='bg-white bg-opacity-20 text-white p-4 px-8 rounded-lg text-xl flex items-center gap-2 hover:bg-opacity-50'>
                    <InformationCircleIcon className='w-6 h-6'/>
                    More Info
                </button>
            </div>
        
        </div>
    </div>
  )
}

export default VideoTitle
