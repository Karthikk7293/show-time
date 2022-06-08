import { CHOOSE_MOVIE_FAIL, CHOOSE_MOVIE_REQUEST, CHOOSE_MOVIE_SUCCESS, CREATE_CONTENT_FAIL, CREATE_CONTENT_REQUEST, CREATE_CONTENT_SUCCESS, GET_ALL_CONTENT_FAIL, GET_ALL_CONTENT_REQUEST, GET_ALL_CONTENT_SUCCESS, LIKE_CONTENT_RESET, LIKE_VIDEO_FAIL, LIKE_VIDEO_REQUEST, LIKE_VIDEO_SUCCESS, REMOVE_MOVIE_REQUEST, REMOVE_MOVIE_SUCCESS, SINGLE_CONTENT_FAIL, SINGLE_CONTENT_REQUEST, SINGLE_CONTENT_SUCCESS } from "../Constants/contentContansts";
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

export const contentReducer = ( state = { contents:[] },action)=>{
    switch(action.type){
        case CREATE_CONTENT_REQUEST:
        case GET_ALL_CONTENT_REQUEST:
        case LIKE_VIDEO_REQUEST:
            return {
                loading:true,
            }
        case CREATE_CONTENT_SUCCESS:
        case GET_ALL_CONTENT_SUCCESS:
            return {
                ...state,
                loading:false,
                contents:action.payload.contents,
                count:action.payload.count
            }
        case LIKE_VIDEO_SUCCESS:
            return {
                ...state,
                loading:false,
                like:true,
                isUpdate:true,
                content:action.payload
            }
        case CREATE_CONTENT_FAIL:
        case GET_ALL_CONTENT_FAIL:
        case LIKE_VIDEO_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        case LIKE_CONTENT_RESET:
            return{
                ...state,
                isUpdate:false,
                like:false
            }
        default:
            return state;
    }
}

export const singleContentReducer = ( state = { singleContent:{} } ,action) => {
    switch (action.type){
        case SINGLE_CONTENT_REQUEST:
            return {
                loading:true,
                singleContent:null
            }
        case SINGLE_CONTENT_SUCCESS:
            return {
                ...state,
                loading:false,
                singleContent:action.payload
            }
        case SINGLE_CONTENT_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        default:
           return state;
    }

}