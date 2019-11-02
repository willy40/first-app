import { IMovies, IAction } from './types'

const initialMovies : IMovies = {
  list: ['Martix', 'Rambo']
}

function moviesReducer(state = initialMovies, action: IAction){
    switch(action.type){
      case 'ADD_MOVIE':
      return {
        ...state, list: [...state.list, action.item]
      };
      
      case 'RESET_MOVIES': 
      return {
        ...state, list: []
      };      
      
      default: return state;
    }
  }
  
  export default moviesReducer;