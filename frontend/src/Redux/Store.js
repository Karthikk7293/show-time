import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools } from "redux-devtools-extension"
import { loadingReducer, saveVideoReducer, userReducer } from './User/Reducers/userReducer';
import { channelReducer, contentReducer, movieReducer, popularContentsReducer, singleContentReducer } from './User/Reducers/ContentReducer';
import { adminReducer, allUsersReducer } from './User/Reducers/adminReducer';


const reducer = combineReducers({
user:userReducer,
loadingComponent:loadingReducer,
movie:movieReducer,
admin:adminReducer,
users:allUsersReducer,
content:contentReducer,
singleContent:singleContentReducer,
popularContents:popularContentsReducer,
channelDetails:channelReducer,
savedVideos:saveVideoReducer
})

let initialState = {
    user: {userData :localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : {}},
    admin:{adminData :localStorage.getItem("adminData")
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