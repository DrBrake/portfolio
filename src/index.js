import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import { AppContainer } from 'react-hot-loader';

import './index.scss';

let routerKey = 0;

const render = Component => {
    ReactDOM.render(
        <AppContainer key={routerKey}>
            <Component />
        </AppContainer>,
        document.getElementById('app'),
    )
}

render(App);

if (module.hot) {
    module.hot.accept('./app.js', () => { 
        routerKey++;
        render(App) 
    })
}