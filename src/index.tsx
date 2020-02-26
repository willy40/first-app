
import { Provider } from "react-redux";
import App from './components/App';
import rootStore from './stores/Store'
import React from 'react';
import ReactDOM from "react-dom";

ReactDOM.render(
<Provider store={ rootStore }>
    <App />
</Provider>
,document.getElementById('root')
);