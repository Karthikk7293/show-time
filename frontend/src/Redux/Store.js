import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools } from "redux-devtools-extension"
import { loadingReducer, userReducer } from './User/Reducers/userReducer';
import { movieReducer } from './User/Reducers/ContentReducer';


const reducer = combineReducers({
user:userReducer,
loadingComponent:loadingReducer,
movie:movieReducer,
})

let initialState = {
    user: {}
}

const middleWare = [thunk];

const  store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store;