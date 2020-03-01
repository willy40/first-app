import {Component} from 'react';
import './App.css';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MovieBrowser from './MovieBrowser';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <MovieBrowser />
      </MuiThemeProvider>
    );
  }
}

export default App;
