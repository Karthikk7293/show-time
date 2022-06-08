import {
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_UPDATE_PROFILE_FAIL,
    ADMIN_UPDATE_PROFILE_REQUEST,
    ADMIN_UPDATE_PROFILE_SUCCESS,
    REGISTER_ADMIN_FAIL,
    REGISTER_ADMIN_REQUEST,
    REGISTER_ADMIN_SUCCESS,
    CLEAR_ADMIN_ERRORS,
    GET_ALL_USERS_REQUEST,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAIL
} from "../Constants/adminConstants";



export const adminReducer = (state = { admin: {} }, action) => {
    switch (action.type) {
        case ADMIN_LOGIN_REQUEST:
        case REGISTER_ADMIN_REQUEST:
        case ADMIN_UPDATE_PROFILE_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
                update: false,
                admin:false
            }

        case ADMIN_LOGIN_SUCCESS:
        case REGISTER_ADMIN_SUCCESS:
        case ADMIN_UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                adminData: action.payload,
                admin:true,
                update: true
            }
        case ADMIN_LOGIN_FAIL:
        case REGISTER_ADMIN_FAIL:
        case ADMIN_UPDATE_PROFILE_FAIL:
            return {
                ...state,
                loading: false,
                adminData: null,
                isAuthenticated: false,
                update: false
            }
        case CLEAR_ADMIN_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}


export const allUsersReducer = ( state = { allUsers:[] }, action )=>{
    switch (action.type){
        case GET_ALL_USERS_REQUEST:
            return {
                loading:true,
            }
        case GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                loading:false,
                allUsers:action.payload,
            }
        case GET_ALL_USERS_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload,
                allUsers:[]
            }
        default:
            return state;
    }

}