import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { addTrailerVideo } from '../utils/moviesSlice'
import { useDispatch } from 'react-redux';
const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
        const jsonData = await data.json();
console.log({jsonData});
        const trailers = jsonData?.results?.filter(video => video.type === "Trailer");
        const trailer = trailers.length ? trailers[0] : jsonData.results[0];

        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovieVideo();
    }, [movieId])
}

export default useMovieTrailer;