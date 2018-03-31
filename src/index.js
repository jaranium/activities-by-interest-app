import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App.jsx';
import store from './store';
import Router from './routers/mainRouter.jsx'

render(
    // wrap the App in the Provider and pass in the store
    <Provider store={store}>
        <Router />
    </Provider>
    , document.getElementById('root')
);

