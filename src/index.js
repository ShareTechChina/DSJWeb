import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

import Home from './pages/home';
import './index.css';

window.f7 = new window.Framework7({
    pushState: true,
});

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById('root')
);
