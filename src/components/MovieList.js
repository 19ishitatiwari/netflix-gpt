import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {

    console.log({title, movies});
  return (
    <div className='px-14 text-white'>
        <h1 className='text-3xl py-4 font-semibold'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex gap-2'>
                {
                    movies && movies?.map((movie) => (
                        <MovieCard key={movie.id} title={movie.title} posterPath={movie.poster_path} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default MovieList
