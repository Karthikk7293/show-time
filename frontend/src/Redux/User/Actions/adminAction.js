import axios from 'axios'
import { ADMIN_LOGIN_FAIL, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, ADMIN_LOGOUT_FAIL, ADMIN_LOGOUT_SUCCESS, GET_ALL_USERS_FAIL, GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS } from '../Constants/adminConstants.js'


export const loginAdmin =(adminData) => async(dispatch,getState)=>{
    try {
        dispatch({type:ADMIN_LOGIN_REQUEST})
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        const {data} = await axios.post('/api/admin/login',adminData,config)
        
        dispatch({type:ADMIN_LOGIN_SUCCESS,payload:data.admin})

        localStorage.setItem("adminData",JSON.stringify(getState().admin.adminData))
        
    } catch (error) {

        dispatch({
            type:ADMIN_LOGIN_FAIL,
            payload: error.response.data.error 
        })
        
    }
}

export const logoutAdmin = () => async (dispatch) =>{
    try {
        const config={
            headers:{
                "Content-Type": 'application/json'
            }
            
        }
        await axios.get('/api/admin/logout',config)
        dispatch({type:ADMIN_LOGOUT_SUCCESS})
        localStorage.removeItem("adminData")
        
    } catch (error) {
        dispatch({type:ADMIN_LOGOUT_FAIL,payload: error.response.data.error })
        
    }
    
}

export const getAllUsers = ()=> async (dispatch)=>{
    try {
        dispatch({type:GET_ALL_USERS_REQUEST})
        const config={
            headers:{
                "Content-Type": 'application/json'
            }   
        }

        const {data} = await axios.get('/api/admin/allusers',config)

        dispatch({type:GET_ALL_USERS_SUCCESS,payload:data.users})

    } catch (error) {
        
        dispatch({type:GET_ALL_USERS_FAIL,payload:error.response.data.error})
        
    }
}

export const blockAndUnblock = (id) => (dispatch)=>{
    try {
        
        
    } catch (error) {
        
    }
}