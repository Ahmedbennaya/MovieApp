import React from 'react';
import MovieList from './MovieList'; // Assuming MovieList is used to display a list of MovieCard components
import data from '../Data'; // Assuming the data is stored in a separate file

const TopRated = () => {
  // Filter movies with rating greater than 7
  const topRatedMovies = data.filter(movie => movie.Rating > 7);

  return (
    <div>
      <h2>Top Rated Movies</h2>
      <MovieList movies={topRatedMovies} />
    </div>
  );
};

export default TopRated;
