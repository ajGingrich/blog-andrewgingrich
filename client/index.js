import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes/routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss';
import store from './store';

const render = Component =>
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );

render(Routes);

if(module.hot) {
    module.hot.accept('./routes/routes', () => {
        const NextApp = require('./routes/routes').default;
        render(NextApp);
    })
}