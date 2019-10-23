import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// imports provider
import { Provider } from 'react-redux';
// import createStore 
import createStore from './createReduxStore';
import 'bulma/css/bulma.css';
import './styles.scss';

//creates store 
const store = createStore();

const rootElement = document.getElementById('root');
ReactDOM.render(
// connects app to store through the Provider
    <Provider store={store}>
        <App />
    </Provider>, rootElement);
