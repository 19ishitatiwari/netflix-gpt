import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
      <div className='fixed -z-10'>
        <img src={BG_URL}
          alt='Netflix Background'
          className='h-screen w-screen object-cover'
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black"></div>
      </div>
      <div className='relative'>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  )
}

export default GptSearch
