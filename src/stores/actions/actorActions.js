import { bindActionCreators } from "redux"
import rootStore from '../Store'

const addActor = item => ({type: 'ADD_ACTOR', item})
const resetActors = () => ({type: 'RESET_ACTORS'})
const actorsAction = bindActionCreators({add: addActor, reset: resetActors}, rootStore.dispatch)

export default actorsAction