import {
    CHOOSE_MOVIE_FAIL,
    CHOOSE_MOVIE_REQUEST,
    CHOOSE_MOVIE_SUCCESS,

    REMOVE_MOVIE_REQUEST,
    REMOVE_MOVIE_SUCCESS,
    REMOVE_MOVIE_FAIL,
} from "../Constants/contentContansts"

export const selectMovie = (movieDetails) => async (dispatch) => {
    try {
        dispatch({ type: CHOOSE_MOVIE_REQUEST })
        console.log(movieDetails);
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

        dispatch({ type: REMOVE_MOVIE_SUCCESS})

    } catch (error) {
        dispatch({
            type: REMOVE_MOVIE_FAIL,
            payload: error
        })

    }

}