import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

    const selectedLanguage = useSelector(store => store.config.lang);
    
  return (
    <div className='pt-[15%] flex justify-center'>
      <form className='bg-black bg-opacity-80 w-1/2 grid grid-cols-12'>
        <input type='text' className='p-4 m-4 col-span-9' placeholder={lang[selectedLanguage].gptSearchPlaceholder} />
        <button className='py-2 px-4 m-4 bg-red-600 text-white rounded-lg col-span-3'>{lang[selectedLanguage].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
