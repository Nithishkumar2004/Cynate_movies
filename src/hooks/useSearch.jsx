import { useEffect, useState } from 'react';
import { options } from '../utils/Options';

const useSearch = (searchQuery) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) return;

    async function fetchMovies() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchQuery)}&include_adult=false&language=en-US&page=1`,
          options
        );
        const result = await response.json();
        setData(result.results || []); // Set the movies list or an empty array
      } catch (err) {
        setError('Failed to fetch movies');
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [searchQuery]);

  return { data, loading, error };
};

export default useSearch;
