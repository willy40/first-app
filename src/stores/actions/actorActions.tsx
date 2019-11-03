import { bindActionCreators } from "redux"
import rootStore from '../Store'

const addActor = (item : string) => ({type: 'ADD_ACTOR', item})
const resetActors = () => ({type: 'RESET_ACTORS'})

export default bindActionCreators({add: addActor, reset: resetActors}, rootStore.dispatch)

