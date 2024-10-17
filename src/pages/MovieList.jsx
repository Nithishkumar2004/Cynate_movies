import React, { useEffect } from 'react'
import MovieCard from '../components/MovieCard';
import useFetch from '../hooks/useFetch';


const MovieList = ({apiPath}) => {

  const { data:movies } = useFetch(apiPath);

  return (
    <main className='min-h-screen'>
      <section className='max-w-7xl py-7 m-auto'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3'>
          {movies.map((movie) => (
             <MovieCard key={movie.id} movie={movie}/>
          ))}
        </div>
      </section>
    </main>
  )
}

export default MovieList