import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Root from './Root'
import '../node_modules/highlight.js/styles/darcula.css';
import '../node_modules/react-accessible-accordion/dist/react-accessible-accordion.css';
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

render(Root);

if(module.hot) {
  module.hot.accept('./Root', () => {
    const NextApp = require('./Root').default;
    render(NextApp);
  })
}
