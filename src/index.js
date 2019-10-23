import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// imports provider
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer'
import { createStore } from 'redux';
import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
// connects app to store through the Provider
    <Provider store={store}>
        <App />
    </Provider>, rootElement);
