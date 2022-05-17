import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    USER_LOGOUT_SUCCESS,
    CLEAR_USER_ERRORS,
    USER_LOGOUT_FAIL

} from "../Constants/userConstants"


export const userReducer = (state = { user: {} },action)=>{
    switch(action.type){
        case USER_LOGIN_REQUEST:
        case REGISTER_USER_REQUEST:
                 return{
                    loading:true,
                    isAuthenticated:false,
                   
               }
        case USER_LOGIN_SUCCESS:
        case REGISTER_USER_SUCCESS:
                return {
                    ...state,
                    loading:false,
                    isAuthenticated:true,
                    user:action.payload,
                    
                }
        case USER_LOGOUT_SUCCESS:
            return {
                ...state,
                loading:false,
                user:null,
                isAuthenticated:false,
            }
        case USER_LOGIN_FAIL:
        case REGISTER_USER_FAIL:
                return {
                    ...state,
                    loading:false,
                    error:action.payload,
                    isAuthenticated:false,
                }
        case USER_LOGOUT_FAIL:
            return {
                ...state,
                error:action.payload
            }

        case CLEAR_USER_ERRORS:
            return {
                ...state,
                error:null,
            }
            default:
                return state;
    }
}