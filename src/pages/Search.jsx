import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useSearch from '../hooks/useSearch';
import MovieCard from '../components/MovieCard';
const Search = () => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");

  const { data: searchedMovies, loading, error } = useSearch(searchQuery);

  useEffect(() => {
    setMovies(searchedMovies);
  }, [searchedMovies]);

  return (
    <main className={movies.length > 0 ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4' : 'min-h-svh flex items-center justify-center'}>
      {loading ? (


        <div className="relative items-center block max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white opacity-70">
            Cynate Movies
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 opacity-70">
            Please wait while we fetch the latest movies for you...
          </p>
          <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">

            <span className="sr-only">Loading...</span>
          </div>
        </div>

      ) : error ? (
        <p className="col-span-full text-center">{error}</p>
      ) : movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      ) : (

        <div className='text-4xl md:text-6xl lg:text-8xl font-semibold text-gray-100'>
          No Movies found for {searchQuery}
        </div>

      )}
    </main>
  );
};

export default Search;
