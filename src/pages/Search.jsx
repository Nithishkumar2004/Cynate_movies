import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useSearch from '../hooks/useSearch';
import MovieCard from '../components/MovieCard';

const Search = () => {
  const [movies, setMovies] = useState([]); // Initialize as an array
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");
  
  // Fetch filtered movies using useSearch hook
  const { data: searchedMovies, loading, error } = useSearch(searchQuery);

  // Update the state based on search query results
  useEffect(() => {
    setMovies(searchedMovies);
  }, [searchedMovies]);

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {loading ? (
        <p className="col-span-full text-center">Loading...</p>
      ) : error ? (
        <p className="col-span-full text-center">{error}</p>
      ) : movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      ) : (
        <p className="col-span-full text-center">No movies found</p>
      )}
    </main>
  );
};

export default Search;
