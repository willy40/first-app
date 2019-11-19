import { bindActionCreators } from "redux"
import rootStore from '../Store'
import { ADD_MOVIE, RESET_MOVIES, FETCH_MOVIES, FETCH_MOVIES_COMPLET, FETCH_MOVIES_ERROR } from '../actions/actions'
import { IMovie } from "../reducers/types"

const addMovie = (item : IMovie) => ({type: ADD_MOVIE, item})
const resetMovies = () => ({type: RESET_MOVIES})
const fetchMovies = () => ({type: FETCH_MOVIES})
const fetchMoviesComplete = (movies: Array<IMovie>) => ({type: FETCH_MOVIES_COMPLET, payload: movies})
const fetchMoviesError = () => ({type: FETCH_MOVIES_ERROR})

export default bindActionCreators({
    add: addMovie,
    reset: resetMovies,
    fetch: fetchMovies,
    fetchComplete: fetchMoviesComplete,
    fetchError: fetchMoviesError
}, rootStore.dispatch)