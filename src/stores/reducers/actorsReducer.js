const initialActors = {
  list: [ 'Julia Roberts', 'Tom Hanks']
}

function actorsReducer(state = initialActors, action){
    switch(action.type){
      case 'ADD_ACTOR':
      return {
        ...state, list: [...state.list, action.item]
      };
      
      case 'RESET_ACTORS': 
      return {
        ...state, list: []
      };      
      
      default: return state;
    }
  }
  
   export default actorsReducer; 