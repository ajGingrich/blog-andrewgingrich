import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss';

const render = Component =>
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );

render(App);

if(module.hot) {
    module.hot.accept('./components/app', () => {
        const NextApp = require('./components/app').default;
        render(NextApp);
    })
}