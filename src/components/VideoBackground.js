import useMovieTrailer from '../hooks/useMovieTrailer';
import {  useSelector } from 'react-redux'
import YouTube from "react-youtube";

const VideoBackground = ({movieId, onEnded }) => {

  useMovieTrailer(movieId);
  
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  if (!trailerVideo) return null;

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      // loop: 1,
      // playlist: trailerVideo.key, // needed for loop
    },
  };
  return (
      // <div>
      //     <iframe 
      //         className="w-screen aspect-video"  
      //         src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&controls=0&loop=1&playlist=" + trailerVideo?.key}
      //         title="YouTube video player" 
      //         frameborder="0" 
      //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      //         >
      //     </iframe>
      // </div>
    // <div className="relative w-screen aspect-video">
    //    <YouTube
    //     videoId={trailerVideo.key}
    //     opts={opts}
    //     className="absolute top-0 left-0 w-screen h-full"
    //     onEnd={onEnded}
    //   />
    // </div>
     <div className="relative w-screen h-[56.25vw] overflow-hidden">
      {/* Maintain 16:9 ratio (100vw x 56.25vw) */}
      <YouTube
        videoId={trailerVideo.key}
        opts={opts}
        className="absolute top-0 left-0 w-full h-full"
        onEnd={onEnded}
      />
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  )
};


export default VideoBackground
