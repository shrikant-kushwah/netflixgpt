import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useMovieTrailer from '../hooks/useMovieTrailer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptPage from './GptPage';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGptPage = useSelector((store) => store.gpt.showGptPage);

  useNowPlayingMovies();
  useMovieTrailer();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGptPage ? (<GptPage />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}

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
