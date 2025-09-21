import React from 'react';
import MovieCard from '../Components/MovieCard';
import { dummyShowsData } from '../assets/assets';
import BlurCircle from '../Components/BlurCircle';
import { Link } from 'react-router-dom';

const Movies = () => {
  return dummyShowsData.length > 0 ? (
    <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]'>
      <BlurCircle top="150px" left="0px"/>
      <BlurCircle bottom="50px" right="50px"/>
      <h1 className='text-lg font-medium my-4'>Now Showing</h1>
      <div className='flex flex-wrap max-sm:justify-center gap-8'> 
        {dummyShowsData.map((movie) => (
          <Link to={`/movies/${movie._id}`} key={movie._id}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <div>No movies found.</div>
  );
}

export default Movies;
