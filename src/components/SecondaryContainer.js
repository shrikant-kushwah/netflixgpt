import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className='bg-black'>
        <div className='-mt-80 relative z-20 pl-12 '>
          <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        </div>
        {/* 
      MovieList - Popular 
      MovieList - Now Playing 
      MovieList - Trending 
      MovieList - Horror
      */}
      </div>
    )
  );
};

export default SecondaryContainer;
