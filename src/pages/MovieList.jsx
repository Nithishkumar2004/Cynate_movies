import React from 'react';
import useFetch from '../hooks/useFetch';
import star from '../assets/star.svg'
import fire from '../assets/fire.svg'
const MovieList = ({ apiPath ,searchQuery }) => {
  const { data: movies } = useFetch(apiPath);
 
  const filteredMovies = searchQuery
  ? movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  : movies;


  const MovieCard = ({ movie }) => {
    // Use the correct image base URL and size
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

    return (
      <div className="flex flex-col max-w-sm bg-white border border-gray-300 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <a href="#">
          <img className="rounded-t-lg" src={imageUrl} alt={movie.title} />
        </a>
        <div className="flex flex-col justify-between flex-grow p-5">
          <div>
            <a href={movie.id}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {movie.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {movie.overview}
            </p>

          </div>

          <div className="mt-auto">
            <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="font-semibold">Release Date:</span> {movie.release_date}
            </p>
            <div className="flex justify-between mb-3">
              <span className="text-yellow-500 font-semibold">
                <img src={star} alt="Star Rating" className="inline w-4 h-4" /> {movie.vote_average} / 10
              </span>
              <span className="text-teal-500 font-semibold">
                <img src={fire} alt="Popularity" className="inline w-4 h-4" /> {movie.popularity}
              </span>

            </div>

            <a href={movie.id} className="inline-block w-full text-center px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  };


  return (
    <main className={`grid ${filteredMovies.length > 0 ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1'} gap-6 p-6`}>
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie, id) => <MovieCard key={id} movie={movie} />)
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-6xl text-center text-gray-700 dark:text-gray-300 font-extrabold">
            No movies found for "{searchQuery}"
          </p>
        </div>
      )}
    </main>
  );
  
};

export default MovieList;
