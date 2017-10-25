import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './styles/style.scss'

//ReactDOM.render(<App />, document.getElementById('app'));

const rootEl = document.getElementById('root');
const render = Component =>
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        rootEl
    );

render(App);
if (module.hot) module.hot.accept('./components/app', () => render(App));