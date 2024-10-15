import { useState,useEffect } from "react";
import { options } from "../utils/Options";


const useFetchDetails = (movieid) => {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        
        async function fetchMovies() {
            
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieid}?language=en-US`, options);
            const data = await response.json();
            setData(data);

        }

        fetchMovies();

    }, [movieid]);

    return { data };

}
export default useFetchDetails