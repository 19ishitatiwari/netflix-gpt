import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const movies = useSelector(store => store.movies?.nowPlayingMovies);

  if(!movies) return;

  const mainMovie = movies[currentIndex];
  const { original_title, overview, backdrop_path, id } = mainMovie;

  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id} onEnded={() => setCurrentIndex((prev) => (prev + 1) % movies.length)}/>
    </div>
  )
}

export default MainContainer
