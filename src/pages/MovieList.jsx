import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import useSearch from '../hooks/useSearch';
import MovieCard from '../components/MovieCard';

const MovieList = ({ apiPath }) => {
  const { data: fetchedMovies } = useFetch(apiPath);
  const [movies, setMovies] = useState([]);

  

  // Update movies based on search query and fetched movies


  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      ) : (
        <p className="col-span-full text-center">No movies found</p>
      )}
    </main>
  );
};

export default MovieList;
