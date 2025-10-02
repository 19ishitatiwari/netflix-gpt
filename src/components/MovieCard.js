import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({title, posterPath}) => {
  if(!posterPath) return null;

  return (
    <div className='w-36 md:w-44 pr-2'>
      <img src={`${IMG_CDN}${posterPath}`} 
        alt={title}
        />
    </div>
  )
}

export default MovieCard
