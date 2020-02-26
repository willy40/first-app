  import { IMovies, IAction } from './types'
import {
   ADD_MOVIE,
   RESET_MOVIES,
   FETCH_MOVIES_PENDING,
   FETCH_MOVIES_COMPLET,
   FETCH_MOVIES_ERROR,
   ADD_MOVIE_ERROR,
   ADD_MOVIE_PENDING,
   RESET_ERROR_STATE } from '../actions/actions'

const initialMovies : IMovies = {
  list: [],
  pending: false,
  error: false
}

function moviesReducer(state = initialMovies, action: IAction){
    console.log(action.type);

    switch(action.type){
      case ADD_MOVIE:
        return {...state.list};

      case RESET_MOVIES: 
      return {
        ...state, 
        list: []
      };

      case ADD_MOVIE_PENDING:
      case FETCH_MOVIES_PENDING:
        return {
          ...state,
          pending: true,
          error: false
        }

        case FETCH_MOVIES_COMPLET:
          return {
            ...state,
            pending: false,
            error: false,            
            list: action.payload
          }

          case FETCH_MOVIES_ERROR:
            return {
              ...state,
              error: true,
              pending: false
            }

          case ADD_MOVIE_ERROR:
            return {
              ...state,
              error: true
            }
          case RESET_ERROR_STATE:
            return {
              ...state,
              error: false,
              pending: false
            }

      default: return state;
    }
  }
  
  export default moviesReducer;