const initialMovies = {
  list: []
}

function moviesReducer(state = initialMovies, action){
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