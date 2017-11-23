import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import App from './components/App';
import Post from './components/Post';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/:page?" component={App} />
      <Route path="/p/:page?" component={App} />
      <Route path="/article/:slug?" component={Post} />
    </div>
  </Router>
);

export default Routes
