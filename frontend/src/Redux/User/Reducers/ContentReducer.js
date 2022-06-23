import {
    ADD_COMMENT_FAIL,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    CHOOSE_MOVIE_FAIL,
    CHOOSE_MOVIE_REQUEST,
    CHOOSE_MOVIE_SUCCESS,
    CREATE_CONTENT_FAIL,
    CREATE_CONTENT_REQUEST,
    CREATE_CONTENT_SUCCESS,
    GET_ALL_CONTENT_FAIL,
    GET_ALL_CONTENT_REQUEST, GET_ALL_CONTENT_SUCCESS, GET_CHANNEL_DETAILS_FAIL, GET_CHANNEL_DETAILS_REQUEST, GET_CHANNEL_DETAILS_SUCCESS, GET_POPULAR_REVIEWS_FAIL,
    GET_POPULAR_REVIEWS_REQUEST, GET_POPULAR_REVIEWS_SUCCESS, GET_SUGGEST_REVEIWS_SUCCESS,
    GET_SUGGEST_REVIEWS_FAIL, GET_SUGGEST_REVIEWS_REQUEST, LIKE_CONTENT_RESET, LIKE_VIDEO_FAIL,
    LIKE_VIDEO_REQUEST, LIKE_VIDEO_SUCCESS, REMOVE_MOVIE_REQUEST, REMOVE_MOVIE_SUCCESS,
    SINGLE_CONTENT_FAIL, SINGLE_CONTENT_REQUEST, SINGLE_CONTENT_SUCCESS
} from "../Constants/contentContansts";
import { CLEAR_USER_ERRORS } from "../Constants/userConstants";


export const movieReducer = (state = { movieDetails: {} }, action) => {
    switch (action.type) {
        case CHOOSE_MOVIE_REQUEST:
        case REMOVE_MOVIE_REQUEST:
            return {
                loading: true,
                movie: false
            }
        case CHOOSE_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                movieDetails: action.payload,
                movie: true
            }
        case REMOVE_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                movie: false,
            }
        case CHOOSE_MOVIE_FAIL:
            return {
                ...state,
                loading: false,
                movie: false,
                error: action.payload,
            }
        case CLEAR_USER_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

export const contentReducer = (state = { contents: [] }, action) => {
    switch (action.type) {
        case CREATE_CONTENT_REQUEST:
        case GET_ALL_CONTENT_REQUEST:
        case LIKE_VIDEO_REQUEST:
            return {
                loading: true,
            }
        case CREATE_CONTENT_SUCCESS:
            return {
                loading: false,
                contentCreated: action.payload,
            }
        case GET_ALL_CONTENT_SUCCESS:
            return {
                ...state,
                loading: false,
                contents: action.payload.contents,
                count: action.payload.count
            }
        case LIKE_VIDEO_SUCCESS:
            return {
                ...state,
                loading: false,
                like: true,
                isUpdate: true,
                content: action.payload.content,
                message:action.payload.message
            }
        case CREATE_CONTENT_FAIL:
        case GET_ALL_CONTENT_FAIL:
        case LIKE_VIDEO_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case LIKE_CONTENT_RESET:
            return {
                ...state,
                isUpdate: false,
                like: false
            }
        default:
            return state;
    }
}

export const singleContentReducer = (state = { singleContent: {} }, action) => {
    switch (action.type) {
        case SINGLE_CONTENT_REQUEST:
        case ADD_COMMENT_REQUEST:
            return {
                loading: true,
                singleContent: null
            }
        case SINGLE_CONTENT_SUCCESS:
            return {
                ...state,
                loading: false,
                singleContent: action.payload
            }
        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                comment: action.payload.message,
                success: action.payload.success
            }
        case SINGLE_CONTENT_FAIL:
        case ADD_COMMENT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }

}

export const popularContentsReducer = (state = { popularContents: [], suggestedContents: [] }, action) => {
    switch (action.type) {
        case GET_POPULAR_REVIEWS_REQUEST:
        case GET_SUGGEST_REVIEWS_REQUEST:
            return {
                loading: true,
            }
        case GET_POPULAR_REVIEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                popularContents: action.payload.contents,
                count: action.payload.count
            }
        case GET_SUGGEST_REVEIWS_SUCCESS:
            return {
                ...state,
                loading: false,
                suggestedContents: action.payload
            }
        case GET_POPULAR_REVIEWS_FAIL:
        case GET_SUGGEST_REVIEWS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }

}

export const channelReducer = (state = { channel: {} }, action) => {
    switch (action.type) {
        case GET_CHANNEL_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_CHANNEL_DETAILS_SUCCESS:

            return {
                loading: false,
                channel: action.payload
            }
        case GET_CHANNEL_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}



