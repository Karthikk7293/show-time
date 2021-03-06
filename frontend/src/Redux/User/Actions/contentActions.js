import axios from 'axios'
import {
    CHOOSE_MOVIE_FAIL,
    CHOOSE_MOVIE_REQUEST,
    CHOOSE_MOVIE_SUCCESS,

    REMOVE_MOVIE_REQUEST,
    REMOVE_MOVIE_SUCCESS,
    REMOVE_MOVIE_FAIL,
    CREATE_CONTENT_REQUEST,
    CREATE_CONTENT_SUCCESS,
    CREATE_CONTENT_FAIL,
    GET_ALL_CONTENT_REQUEST,
    GET_ALL_CONTENT_SUCCESS,
    GET_ALL_CONTENT_FAIL,
    LIKE_VIDEO_SUCCESS,
    LIKE_VIDEO_REQUEST,
    LIKE_VIDEO_FAIL,
    SINGLE_CONTENT_REQUEST,
    SINGLE_CONTENT_SUCCESS,
    SINGLE_CONTENT_FAIL,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAIL,
    GET_POPULAR_REVIEWS_REQUEST,
    GET_POPULAR_REVIEWS_SUCCESS,
    GET_POPULAR_REVIEWS_FAIL,
    GET_SUGGEST_REVIEWS_REQUEST,
    GET_SUGGEST_REVEIWS_SUCCESS,
    GET_SUGGEST_REVIEWS_FAIL,
    GET_CHANNEL_DETAILS_REQUEST,
    GET_CHANNEL_DETAILS_SUCCESS,
    GET_CHANNEL_DETAILS_FAIL,
    SUBCRIBE_REQUEST,
    SUBCRIBE_SUCCESS,
    SUBCRIBE_FAIL,
} from "../Constants/contentContansts"

export const selectMovie = (movieDetails) => async (dispatch) => {
    try {
        dispatch({ type: CHOOSE_MOVIE_REQUEST })
        // console.log(movieDetails);
        dispatch({ type: CHOOSE_MOVIE_SUCCESS, payload: movieDetails })

    } catch (error) {
        dispatch({
            type: CHOOSE_MOVIE_FAIL,
            payload: error
        })

    }

}

export const removeMovie = () => async (dispatch) => {
    try {
        dispatch({ type: REMOVE_MOVIE_REQUEST })

        dispatch({ type: REMOVE_MOVIE_SUCCESS })

    } catch (error) {
        dispatch({
            type: REMOVE_MOVIE_FAIL,
            payload: error
        })

    }

}

export const createContent = (contentDetails) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_CONTENT_REQUEST })

        const config = {
            headers: {
                'Content-Type': "multipart/form-data"
            }
        }
        const { data } = await axios.post('/api/content/create', contentDetails, config)

        dispatch({ type: CREATE_CONTENT_SUCCESS, payload: data.success })

    } catch (error) {

        dispatch({ type: CREATE_CONTENT_FAIL, payload: error.response.data.error })

    }
}

export const getAllContents = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_CONTENT_REQUEST })

        const config = {
            headers: {
                'Content-Type': "application/json"
            }
        }
        const { data } = await axios.get('/api/content/get-all-content', config)

        dispatch({ type: GET_ALL_CONTENT_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: GET_ALL_CONTENT_FAIL, payload: error.response.data.error })
    }
}

export const likeAndDislikeContents = (id) => async (dispatch) => {
    try {
        dispatch({ type: LIKE_VIDEO_REQUEST })
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const { data } = await axios.patch(`/api/content/single-content/${id}`, config)
        dispatch({ type: LIKE_VIDEO_SUCCESS, payload: data })

    } catch (error) {
        dispatch({
            type: LIKE_VIDEO_FAIL,
            payload: error.response.data.error
        })
    }
}

export const getSingleContent = (contentId) => async (dispatch) => {
    try {
        dispatch({ type: SINGLE_CONTENT_REQUEST })

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const { data } = await axios.post(`/api/content/single-content/${contentId}`, config)

        dispatch({ type: SINGLE_CONTENT_SUCCESS, payload: data.content })

    } catch (error) {

        dispatch({ type: SINGLE_CONTENT_FAIL, payload: error.response.data.error })
    }
}

export const addComment = (id, comment) => async (dispatch) => {
    try {
        dispatch({ type: ADD_COMMENT_REQUEST })
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const { data } = await axios.patch(`/api/content/comment/${id}`, { comment }, config)

        dispatch({ type: ADD_COMMENT_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: ADD_COMMENT_FAIL, payload: error.response.data.error })
    }
}

export const getPopularContents = (movieId, contentId) => async (dispatch) => {
    try {
        dispatch({ type: GET_POPULAR_REVIEWS_REQUEST })
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const { data } = await axios.post(`/api/content/get-popular-contents/${movieId}`, { contentId }, config)
        dispatch({ type: GET_POPULAR_REVIEWS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: GET_POPULAR_REVIEWS_FAIL, payload: error.response.data.error })
    }
}

export const getSuggestedContents = () => async (dispatch) => {
    try {
        dispatch({ type: GET_SUGGEST_REVIEWS_REQUEST })
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const { data } = await axios.get('/api/content/get-suggested-contents')
        dispatch({ type: GET_SUGGEST_REVEIWS_SUCCESS, payload: data.contents })

    } catch (error) {
        dispatch({ type: GET_SUGGEST_REVIEWS_FAIL, payload: error.response.data.error })
    }
}

export const getChannelDetails = (channelId) => async (dispatch) => {
    try {
        dispatch({ type: GET_CHANNEL_DETAILS_REQUEST })
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const { data } = await axios.post(`/api/content/channel/${channelId}`, config)

        dispatch({ type: GET_CHANNEL_DETAILS_SUCCESS,payload:data.channel  })

    } catch (error) {

        dispatch({ type: GET_CHANNEL_DETAILS_FAIL, payload: error.response.data.error })
    }
}

export const subcribeChannel = (channelId) => async (dispatch) =>{
    try {
        dispatch({type:SUBCRIBE_REQUEST})
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const {data}  = await axios.post(`/api/content/subcribe/${channelId}`,config)
        dispatch({type:SUBCRIBE_SUCCESS,payload:data.message})
        
    } catch (error) {
        dispatch({ type: SUBCRIBE_FAIL, payload: error.response.data.error })
    }
}