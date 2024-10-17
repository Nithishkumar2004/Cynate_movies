import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useSearch from '../hooks/useSearch';
import MovieCard from '../components/MovieCard';

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");
  
  // Fetch filtered movies using useSearch hook
  const searchedmovies = useSearch(searchQuery);
  console.log(searchedmovies);
  

  // Update the state based on search query
  useEffect(() => {
    setMovies(searchedmovies);
  }, [searchQuery]);
  console.log(movies.data);
  

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.length > 0 ? (
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
