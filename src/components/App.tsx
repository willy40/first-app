import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Movies from './Movies'
import MoviesForm from './MoviesForm'
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Movies</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route path="/form">
            <MoviesForm />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
        </Switch>
      </div>
      </Router>

    );
  }
}

export default App;
