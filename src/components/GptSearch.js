import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
            <img src={BG_URL}
                alt='Netflix Background'
                />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black -z-10"></div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch
