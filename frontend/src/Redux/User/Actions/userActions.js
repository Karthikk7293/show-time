import axios from 'axios'
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    REGISTER_USER_SUCCESS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_FAIL,

    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAIL,
} from '../Constants/userConstants'


export const loginUser = (userData) => async (dispatch,getState) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        console.log(userData);
        const { data } = await axios.post('/api/user/login', userData, config);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data.user })
        localStorage.setItem("userData", JSON.stringify(data.user));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response.data.error
        })

    }
}

export const logoutUser = () => async (dispatch) =>{
    try {

        await axios.get('/api/user/logout')
        dispatch({type: USER_LOGOUT_SUCCESS})
        
    } catch (error) {
        
        dispatch({type: USER_LOGOUT_FAIL,payload:error.data.response.error})
    }
}

export const registerUser = (userData) => async (dispatch,getState) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST })
        const config = {
            headers: {
                "Content-Type": 'application/json'
            }
        }

        const { data } = await axios.post("/api/user/register", userData, config);
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data })

        localStorage.setItem("userData", JSON.stringify(getState().userData.user));

    } catch (error) {
        console.log(error);
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.error
        })

    }
}

