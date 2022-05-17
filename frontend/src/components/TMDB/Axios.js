import axios from 'axios'
import {TMDB_BASE_URL} from './TMDB_CONSTANTS.js'
const instance = axios.create({
    baseURL: TMDB_BASE_URL,
    
  });

  export default instance ;