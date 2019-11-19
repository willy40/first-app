import movieActions from '../stores/actions/movieActions';

export function fetchMovies() {
    movieActions.fetch();

    fetch('http://localhost:51328/movies')
    .then(res => res.json())
    .then(res => {
        if(res.error) {
            throw(res.error);
        }

        movieActions.fetchComplete(res);
        return res.products;
    })
    .catch(error => {
        movieActions.fetchError();
    })
}

export function addMovie(name){
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
});
}