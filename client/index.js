import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
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
    module.hot.accept('./routes', () => {
        const NextApp = require('./routes').default;
        render(NextApp);
    })
}
