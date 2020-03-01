  import { IAction, IMovieStore } from './types'

import {
   ADD_MOVIE,
   RESET_MOVIES,
   FETCH_MOVIES_PENDING,
   FETCH_MOVIES_COMPLET,
   FETCH_MOVIES_ERROR,
   ADD_MOVIE_ERROR,
   ADD_MOVIE_PENDING,
   RESET_ERROR_STATE } from '../actions/actions'

const initialMovies : IMovieStore = {
  pending: false,
  error: false,
  page: 0,
  Movies: [],
  total_pages: 0,
  total_results: 0
}

function moviesReducer(state = initialMovies, action: IAction){
    switch(action.type){
      case ADD_MOVIE:
        return { ...state.Movies};

      case RESET_MOVIES: 
      return {
        ...state, 
        Movies: []
      };

      case ADD_MOVIE_PENDING:
      case FETCH_MOVIES_PENDING:
        return {
          ...state,
          pending: true,
          error: false
        };

        case FETCH_MOVIES_COMPLET:
          return {
            ...state,
            pending: false,
            error: false,
            page: action.payload.page,
            total_pages: action.payload.total_pages,
            total_results: action.payload.total_results,
            Movies: state.Movies.concat(action.payload.results)
          };

          case FETCH_MOVIES_ERROR:
            return {
              ...state,
              error: true,
              pending: false
            };

          case ADD_MOVIE_ERROR:
            return {
              ...state,
              error: true
            };

          case RESET_ERROR_STATE:
            return {
              ...state,
              error: false,
              pending: false
            };

      default: return state;
    }
  }
  
  export default moviesReducer;