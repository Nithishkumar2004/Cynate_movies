import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchDetails from '../hooks/useFetchDetails';

const MovieDetails = () => {
  const { id } = useParams();
  const { data: movieDetails } = useFetchDetails(id);
  const {
    title,
    overview,
    release_date,
    genres,
    vote_average,
    vote_count,
    poster_path,
    backdrop_path,
    runtime,
    homepage,
    tagline,
    production_companies,
  } = movieDetails;

  return (
    <div className="px-10 pt-3 bg-gray-50 text-gray-800 font-sans">
      <div className="flex justify-center items-center h-[400px] w-full mb-6 bg-gray-100 rounded-lg shadow-lg">
        <img
          className="w-[800px] h-full rounded-lg object-cover"
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={title}
        />
      </div>

      <div className="flex mt-6">
        {poster_path && (
          <img
            className="w-40 h-60 object-cover rounded-lg mr-6 shadow-md border-2 border-gray-200"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        )}

        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-2">{title}</h1>
          <h2 className="text-2xl text-gray-700 italic mb-4">{tagline}</h2>
          <p className="mt-2 text-gray-700 text-lg leading-relaxed">{overview}</p>

          <p className="mt-4 font-medium text-gray-900">
            Release Date: <span className="text-indigo-600">{release_date}</span>
          </p>
          <p className="mt-2 font-medium text-gray-900">
            Runtime: <span className="text-indigo-600">{runtime} minutes</span>
          </p>
          <p className="mt-2 font-medium text-gray-900">
            Rating: <span className="text-indigo-600">{vote_average} / 10 ({vote_count} votes)</span>
          </p>

          <div className="mt-4">
            <span className="font-semibold text-gray-900">Genres:</span>
            {genres && genres.map((genre) => (
              <span key={genre.id} className="ml-2 text-gray-600 bg-indigo-100 px-2 py-1 rounded-lg text-sm">{genre.name}</span>
            ))}
          </div>

          <div className="mt-4">
            <span className="font-semibold text-gray-900">Production Companies:</span>
            {production_companies && production_companies.map((company) => (
              <span key={company.id} className="ml-2 text-gray-600 bg-green-100 px-2 py-1 rounded-lg text-sm">{company.name}</span>
            ))}
          </div>

          {homepage && (
            <a
              href={homepage}
              className="mt-6 inline-block px-5 py-2 bg-indigo-600 text-white rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition"
            >
              Visit Homepage
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
