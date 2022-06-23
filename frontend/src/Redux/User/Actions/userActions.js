import axios from 'axios'
import { UPDATE_CHANEL_REQUEST, UPDATE_CHANEL_SUCCESS } from '../Constants/contentContansts'
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    REGISTER_USER_SUCCESS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_FAIL,

    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAIL,

    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,

    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    lOADING_COMPONENT_START,
    LOADING_COMPONENT_STOP,
    UPDATE_CHANNEL_FAIL,
    SAVE_VIDEO_REQUEST,
    SAVE_VIDEO_SUCCESS,
    SAVE_VIDEO_FAIL,

} from '../Constants/userConstants'

// login user

export const loginUser = (userData) => async (dispatch,getState) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })
        // dispatch({type:lOADING_COMPONENT_START})
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const { data } = await axios.post('/api/user/login', userData, config);


        dispatch({ type: USER_LOGIN_SUCCESS, payload: data.user })
        // dispatch({type:LOADING_COMPONENT_STOP})
        localStorage.setItem("userData", JSON.stringify(getState().user.userData));  
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response.data.error 
        })

    }
}

//logout user

export const logoutUser = () => async (dispatch) =>{
    try {
        const config = {
            headers: {
                "Content-Type": 'application/json'
            }
        }
        await axios.get('/api/user/logout',config)
        dispatch({type: USER_LOGOUT_SUCCESS})
        localStorage.removeItem("userData");
        
    } catch (error) {
        dispatch({type: USER_LOGOUT_FAIL,payload:error.response.data.error })
    }
}

//  register user

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

        localStorage.setItem("userData", JSON.stringify(getState().user.userData));

    } catch (error) {
        console.log(error);
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.error 
        })

    }
}

// Load User

export const loadUser = () => async (dispatch,getState) => {
    try {
      dispatch({ type: LOAD_USER_REQUEST });
  
      const { data } = await axios.get(`/api/user/load`);
  
      dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
      localStorage.setItem("userData", JSON.stringify(getState().user.userData));
    } catch (error) {
      dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.error });
      localStorage.removeItem("userData");
    }
  };


// Update Profile

export const updateProfile = (userData) => async (dispatch,getState) => {
    try {
      dispatch({ type: USER_UPDATE_PROFILE_REQUEST });
      dispatch({type:lOADING_COMPONENT_START})
  
      const config = { headers: { "Content-Type": 'application/json' } };

      const { data } = await axios.put("/api/user/update", userData,config);
      console.log(data);
      dispatch({type:LOADING_COMPONENT_STOP})
      dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data.user });
      localStorage.setItem("userData", JSON.stringify(getState().user.userData));
    } catch (error) {
      dispatch({
        type: USER_UPDATE_PROFILE_FAIL,
        payload: error.response.data.error 
      });
    }
  };

// update channel 

export const updateChannel = (channelDetails) => async (dispatch,getState)=>{
    try {
        dispatch({type:UPDATE_CHANEL_REQUEST})
        const config = {
            headers:{
                'Content-Type' : "application/json"
            }
        }
        
        const {data} = await axios.put('/api/user/update-channel',channelDetails)

        dispatch({type:UPDATE_CHANEL_SUCCESS,payload:data.user})

        localStorage.setItem("userData", JSON.stringify(getState().user.userData));
    } catch (error) {
        dispatch({
            type:UPDATE_CHANNEL_FAIL,
            payload:error.response.data.error 
        })
    }
}



export const saveVideo=(id)=>async(dispatch)=>{
    try {
        dispatch({ type:SAVE_VIDEO_REQUEST })
    
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const {data} = await axios.patch(`/api/user/add-saved-videos/${id}`,config)

        dispatch({ type:SAVE_VIDEO_SUCCESS,payload:data.success })
    
    } catch (error) {
        dispatch({
            type:SAVE_VIDEO_FAIL,
            payload:error.response.data.error 
        })
    }
    }