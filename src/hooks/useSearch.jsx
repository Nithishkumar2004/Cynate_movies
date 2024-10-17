import React, { useEffect, useState } from 'react'
import { options } from '../utils/Options';

const useSearch = (searchQuery) => {
  
 const [data, setData] = useState([]);

    useEffect(() => {
        
        async function fetchMovies() {
            
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,options);
            const data = await response.json();
            setData(data);

        }

        fetchMovies();

    }, [searchQuery]);

    return { data };

}
export default useSearch
