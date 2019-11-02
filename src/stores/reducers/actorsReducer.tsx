import { IActors, IAction } from './types'

const initialActors : IActors = {
  list: [ 'Julia Roberts', 'Tom Hanks']
}

function actorsReducer(state = initialActors, action : IAction){
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