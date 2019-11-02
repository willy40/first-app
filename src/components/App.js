import React, {Component} from 'react';
import './App.css';
import MoviesContainer from './MoviesContainer'
import MoviesForm from './MoviesForm'
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MoviesContainer/>
        <MoviesForm/>
        <Counter/>
      </div>
    );
  }
}

export default App;
