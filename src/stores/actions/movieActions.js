import { bindActionCreators } from "redux"
import rootStore from '../Store'

const addMovie = item => ({type: 'ADD_MOVIE', item})
const resetMovies = () => ({type: 'RESET_MOVIES'})

export default bindActionCreators({add: addMovie, reset: resetMovies}, rootStore.dispatch)