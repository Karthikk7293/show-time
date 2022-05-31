import axios from "axios"
import { TMDB_UPCOMING_MOVIES_URL,TMDB_API_KEY } from "./TMDB_CONSTANTS"

const findMovie = async(category,language,count)=>{

    const {data} =  await axios.get(`https://api.themoviedb.org/3/movie/${category}?api_key=${TMDB_API_KEY}&${language}&page=1`)


    return data.results

}
const sortMovie = (movie,count)=>{


        // movie.length = Math.min(movie.length, paginationValue);
    return movie

}
export {findMovie,sortMovie}