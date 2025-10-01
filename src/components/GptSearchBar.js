import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {

    const selectedLanguage = useSelector(store => store.config.lang);

    const searchText = useRef(null);

    const dispatch = useDispatch(null);

    // const handleGptSearchClick = async () => {
    //     console.log("searchtext",searchText.current.value)

    //     const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query: ${searchText.current.value}. Only give me names fo 5 movies, comma separated like the example result given ahead. Example Result: Pulp Fiction, The Shawshank Redemption, RRR, Awakenings, Anbe Sivam`
    //     const completion = await openai.chat.completions.create({
    //         model: 'gpt-4o',
    //         messages: [
    //             { role: 'user', content: gptQuery },
    //         ],
    //     });

    //     console.log(completion.choices);
    // }

    const searchMovieTMDB = async (movie) => {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      )

      const json = await data.json();
      return json.results;
    }

    const handleGptSearchClick = async () => {
        const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query: ${searchText.current.value}. Only give me names fo 5 movies, comma separated like the example result given ahead. Example Result: Pulp Fiction, The Shawshank Redemption, RRR, Awakenings, Anbe Sivam`
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                { role: 'assistant', content: gptQuery },
            ],
        });

        if(!completion.choices){

        }

        const gptMovies = completion?.choices?.[0]?.message?.content.split(", ");

        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
        // gives an array of promises
        const tmdbResults = await Promise.all(promiseArray);

        dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
    }
    
  return (
    <div className='pt-[15%] flex justify-center'>
      <form className='bg-black bg-opacity-80 w-1/2 grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type='text' className='p-4 m-4 col-span-9' placeholder={lang[selectedLanguage].gptSearchPlaceholder} />
        <button className='py-2 px-4 m-4 bg-red-600 text-white rounded-lg col-span-3'
        onClick={handleGptSearchClick}>{lang[selectedLanguage].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar;