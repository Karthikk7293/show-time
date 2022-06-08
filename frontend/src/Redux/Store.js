import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools } from "redux-devtools-extension"
import { loadingReducer, userReducer } from './User/Reducers/userReducer';
import { contentReducer, movieReducer, singleContentReducer } from './User/Reducers/ContentReducer';
import { adminReducer, allUsersReducer } from './User/Reducers/adminReducer';


const reducer = combineReducers({
user:userReducer,
loadingComponent:loadingReducer,
movie:movieReducer,
admin:adminReducer,
users:allUsersReducer,
content:contentReducer,
singleContent:singleContentReducer
})

let initialState = {
    user: {userDetails :localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : {}},
    admin:{adminDetails :localStorage.getItem("adminData")
    ? JSON.parse(localStorage.getItem("adminrData"))
    : {}}
}

const middleWare = [thunk];

const  store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store;