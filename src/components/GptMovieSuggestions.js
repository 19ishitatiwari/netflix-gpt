import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {

  const { movieResults, movieNames } = useSelector(store => store.gpt);

  if(!movieNames) return null;

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-80'>
      {movieNames.map((movie, index) => {
        return (
          // <h1>{movie}</h1>
          <MovieList key={movie} title={movie} movies={movieResults[index]} />
        )
      })}
    </div>
  )
}

export default GptMovieSuggestions
