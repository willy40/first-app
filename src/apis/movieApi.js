import { fetchMoviesPending, fetchMoviesComplete, fetchMoviesError, addMovieError, addMoviePending} from '../stores/actions/movieActions';

const MOVIE_DB_API_KEY = '854d99e31a804b09996a48bb3afcba67'
const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3';

export function fetchMoviesApi(page) {
    return dispatch => {
    dispatch(fetchMoviesPending());

    console.log(`page: ${page}`);
    getTopMovies({ page })
    .then(res => res.json())
    .then(res => {
        if(res.error) {
            throw(res.error);
        }
        dispatch(fetchMoviesComplete(res));
    })
    .catch(error => {
        dispatch(fetchMoviesError());
    })
  }
}

export function addMovieApi(name){
  return dispatch => {
    dispatch(addMoviePending());
    var data = {
      Name: name
    }

    fetch('http://localhost:51328/movies', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }  
    })
    .then(response => {
      if(!response.ok){
        throw new Error();
      }
    })
    .catch(error => {
      dispatch(addMovieError());
    });
  }
}

const createMovieDbUrl = (relativeUrl, queryParams) => {
  let baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?api_key=${MOVIE_DB_API_KEY}&language=en-US`;
  if (queryParams) {
    Object.keys(queryParams)
      .forEach(paramName => baseUrl += `&${paramName}=${queryParams[paramName]}`);
  }
  return baseUrl;
}

export const getTopMovies = async ({page}) => {
  const fullUrl = createMovieDbUrl('/movie/top_rated', {
    page
  });
  return fetch(fullUrl);
}

export const searchMovies = async ({ page, query}) => {
  const fullUrl = createMovieDbUrl('/search/movie', {
    page,
    query
  });
  return fetch(fullUrl);
}

export const getMovieDetails = async ({movieId}) => {
  const fullUrl = createMovieDbUrl(`/movie/${movieId}`);
  return fetch(fullUrl);
}