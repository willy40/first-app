import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import movies from './reducers/moviesReducer'
import actors from './reducers/actorsReducer'
import thunk from "redux-thunk";

const rootReducer = combineReducers({ movies, actors })

const rootStore = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
    )

export default rootStore