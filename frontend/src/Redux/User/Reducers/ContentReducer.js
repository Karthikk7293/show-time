import { CHOOSE_MOVIE_FAIL, CHOOSE_MOVIE_REQUEST, CHOOSE_MOVIE_SUCCESS, REMOVE_MOVIE_REQUEST, REMOVE_MOVIE_SUCCESS } from "../Constants/contentContansts";
import { CLEAR_USER_ERRORS } from "../Constants/userConstants";


export const movieReducer = (state = {movieDetails:{}},action)=>{
    switch (action.type){
        case CHOOSE_MOVIE_REQUEST:
        case REMOVE_MOVIE_REQUEST:
            return {
                loading:true,
                movie:false
            }
        case CHOOSE_MOVIE_SUCCESS:
            return {
                ...state,
                loading:false,
                movieDetails:action.payload,
                movie:true
            }
        case REMOVE_MOVIE_SUCCESS:
            return {
                ...state,
                loading:false,
                movie:false,
            }
        case CHOOSE_MOVIE_FAIL:
        case CHOOSE_MOVIE_FAIL:
            return {
                ...state,
                loading:false,
                movie:false,
                error:action.payload,
            }
        case CLEAR_USER_ERRORS:
            return {
                ...state,
                error:null
            }
        default:
            return state;
    }
}