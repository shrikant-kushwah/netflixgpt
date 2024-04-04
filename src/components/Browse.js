import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useMovieTrailer from '../hooks/useMovieTrailer';

const Browse = () => {

  useNowPlayingMovies();
  useMovieTrailer();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
      MainContainer
       - VideoBackground
       - VideoTitle
      SecondaryContainer
       - MovieList * n
         - cards * n 
      */}
    </div>
  )
}

export default Browse;
