import { 
    ADD_MOVIE,
    RESET_MOVIES,
    FETCH_MOVIES_PENDING,
    FETCH_MOVIES_COMPLET,
    FETCH_MOVIES_ERROR,
    ADD_MOVIE_ERROR,
    ADD_MOVIE_PENDING,
    RESET_ERROR_STATE } from '../actions/actions'

import { IMovie } from "../reducers/types"

export const addMovie = (item : IMovie) => ({type: ADD_MOVIE, item})
export const resetMovies = () => ({type: RESET_MOVIES})
export const fetchMoviesPending = () => ({type: FETCH_MOVIES_PENDING})
export const fetchMoviesComplete = (movies: Array<IMovie>) => ({type: FETCH_MOVIES_COMPLET, payload: movies})
export const fetchMoviesError = () => ({type: FETCH_MOVIES_ERROR})
export const addMoviePending = () => ({type: ADD_MOVIE_PENDING})
export const addMovieError = () => ({type: ADD_MOVIE_ERROR})
export const resetErrorState = () => ({type: RESET_ERROR_STATE})