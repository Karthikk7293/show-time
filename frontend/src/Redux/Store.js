import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools } from "redux-devtools-extension"
import { userReducer } from './User/Reducers/userReducer';


const reducer = combineReducers({
user:userReducer,
})

let initialState = {
    userData: {
        user: localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : {}
}
}

const middleWare = [thunk];

const  store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store;