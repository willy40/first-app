import { IMovies, IAction } from './types'
import { ADD_MOVIE, RESET_MOVIES, FETCH_MOVIES, FETCH_MOVIES_COMPLET, FETCH_MOVIES_ERROR } from '../actions/actions'
import { addMovie } from '../../apis/movieApi'

const initialMovies : IMovies = {
  list: [],
  pending: false,
  error: false
}

function moviesReducer(state = initialMovies, action: IAction){
    switch(action.type){
      case ADD_MOVIE:
      
      addMovie(action.item.name);

      // return {
      //   ...state,
      // };
      
      case RESET_MOVIES: 
      return {
        ...state, 
        list: []
      };

      case FETCH_MOVIES:
        return {
          ...state,
          pending: true,
          error: false
        }

        case FETCH_MOVIES_COMPLET:
          return{
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
      
      default: return state;
    }
  }
  
  export default moviesReducer;