import React from 'react';
import MovieList from './MovieList';
import data from '../Data'; 

const TopRated = () => {
  const topRatedMovies = data.filter(movie => movie.Rating > 7);

  return (
    <div>
      <h2>Top Rated Movies</h2>
      <MovieList movies={topRatedMovies} />
    </div>
  );
};

export default TopRated;
