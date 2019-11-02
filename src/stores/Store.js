import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import movies from './reducers/moviesReducer'
import actors from './reducers/actorsReducer'
import thunk from "redux-thunk";


const rootReducer = combineReducers({ movies, actors })

const composerEnhancer = composeWithDevTools({
    realTime: true,
    trace: true,
    traceLimit: 25
});

const rootStore = createStore(
    rootReducer, 
    composerEnhancer(applyMiddleware(thunk))
    )

export default rootStore