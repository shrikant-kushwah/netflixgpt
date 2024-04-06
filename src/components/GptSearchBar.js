import React from 'react'
import language from './LanguageConstants';
import {useSelector} from 'react-redux';

const GptSearchBar = () => {

  const languageKey = useSelector(store=>store.config.language);

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className=' bg-blue-300 grid grid-cols-12 w-1/2 rounded-lg'>
        <input
          className='p-4 m-4 col-span-9 rounded-lg'
          type="text"
          placeholder={language[languageKey].gptSearchPlaceholder}
        />
        <button className='col-span-3 py-2 px-4 m-4 bg-red-700 text-white text-xl font-bold rounded-lg'>{language[languageKey].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
