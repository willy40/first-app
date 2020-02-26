import { fetchMoviesPending, fetchMoviesComplete, fetchMoviesError, addMovieError, addMoviePending} from '../stores/actions/movieActions';

export function fetchMoviesApi() {
    return dispatch => {
    dispatch(fetchMoviesPending());

    fetch('http://localhost:51328/movies')
    .then(res => res.json())
    .then(res => {
        if(res.error) {
            throw(res.error);
        }

        dispatch(fetchMoviesComplete(res));
        return res.products;
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