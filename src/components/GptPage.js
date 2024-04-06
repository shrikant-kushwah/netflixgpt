import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_IMAGE } from '../utils/constants';

const GptPage = () => {
  return (
    <div>
      <div className='absolute -z-10'>
      <img src={BG_IMAGE} alt="bg-img" />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptPage;
