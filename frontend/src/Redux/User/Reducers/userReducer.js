import {  UPDATE_CHANEL_FAIL, UPDATE_CHANEL_REQUEST, UPDATE_CHANEL_SUCCESS } from "../Constants/contentContansts"
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    USER_LOGOUT_SUCCESS,
    CLEAR_USER_ERRORS,
    USER_LOGOUT_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    lOADING_COMPONENT_START,
    LOADING_COMPONENT_STOP,
    SAVE_VIDEO_REQUEST,
    SAVE_VIDEO_SUCCESS,
    SAVE_VIDEO_FAIL

} from "../Constants/userConstants"


export const userReducer = (state = { userData: {} }, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
        case REGISTER_USER_REQUEST:
        case USER_UPDATE_PROFILE_REQUEST:
        case LOAD_USER_REQUEST:
        case UPDATE_CHANEL_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
                update: false,

            }
        case USER_LOGIN_SUCCESS:
        case REGISTER_USER_SUCCESS:
        case USER_UPDATE_PROFILE_SUCCESS:
        case LOAD_USER_SUCCESS:
        case UPDATE_CHANEL_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                userData: action.payload,
                user:true,
                


            }
            
        case USER_LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                userData: null,
                isAuthenticated: false,
            }
        case USER_LOGIN_FAIL:
        case REGISTER_USER_FAIL:
        case USER_UPDATE_PROFILE_FAIL:
        case LOAD_USER_FAIL:
        case UPDATE_CHANEL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                isAuthenticated: false,
                update: false,
            }
        case USER_LOGOUT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_USER_ERRORS:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
}

export const loadingReducer = (state = { loader: false }, action) => {
    switch (action.payload) {
        case lOADING_COMPONENT_START:
            return {
                ...state,
                loader: true,

            }
        case LOADING_COMPONENT_STOP:
            return {
                ...state,
                loader: false,
            }
        default:
            return state;
    }
}




export const saveVideoReducer = (state = { savevideo: {} }, action) => {

    switch (action.payload) {
        case SAVE_VIDEO_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SAVE_VIDEO_SUCCESS:
            return {
                ...state,
                loading: false,
                savevideo: action.payload
            }
        case SAVE_VIDEO_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}