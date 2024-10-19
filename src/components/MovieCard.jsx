import React from 'react'
import star from '../assets/star.svg'
import fire from '../assets/fire.svg'
import movienotfound from '../assets/movienotfound.jpg'


const MovieCard = ({ movie }) => {
    const imageUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    : movienotfound;
    return (
      <div className="movie-card flex flex-col bg-white border border-gray-300 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 ease-in-out max-w-sm sm:max-w-md lg:max-w-lg my-5 mx-5">
      <div className="image-container h-40 sm:h-48 overflow-hidden">
        <a href={movie.id}>
          <img className="w-full h-full object-cover rounded-t-lg" src={imageUrl} alt={movie.title} />
        </a>
      </div>
      <div className="content p-5 flex flex-col justify-between flex-grow">
        <div className="text-content">
          <a href={movie.id}>
            <h5 className="title mb-2 text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.title}
            </h5>
          </a>
          <p className="overview line-clamp-3 mb-3 text-sm sm:text-base font-normal text-gray-700 dark:text-gray-400">
            {movie.overview}
          </p>
        </div>
    
        <div className="extra-info mt-auto">
          <p className="release-date mb-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Release Date:</span> {movie.release_date}
          </p>
          <div className="ratings flex justify-between mb-3">
            <span className="rating text-yellow-500 font-semibold flex items-center">
              <img src={star} alt="Star Rating" className="inline w-4 h-4 mr-1" /> {movie.vote_average} / 10
            </span>
            <span className="popularity text-teal-500 font-semibold flex items-center">
              <img src={fire} alt="Popularity" className="inline w-4 h-4 mr-1" /> {movie.popularity}
            </span>
          </div>
    
          <a href={movie.id} className="read-more-button inline-block w-full text-center px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
            Read More
          </a>
        </div>
      </div>
    </div>
    
    );
  };

export default MovieCard
