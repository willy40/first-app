import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './components/App';
import rootStore from './stores/Store'

ReactDOM.render(
<Provider store={ rootStore }>
    <App />
</Provider>
,document.getElementById('root')
);