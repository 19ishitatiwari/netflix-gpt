import useMovieTrailer from '../hooks/useMovieTrailer';
import {  useSelector } from 'react-redux'

const VideoBackground = ({movieId}) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    
    useMovieTrailer(movieId);
  return (
    <div>
        <iframe 
            className="w-screen aspect-video"  
            src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&controls=0&loop=1&playlist=" + trailerVideo?.key}
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            >
        </iframe>
    </div>
  )
}

export default VideoBackground
