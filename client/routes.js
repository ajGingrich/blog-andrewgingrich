import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import FullPostPage from './pages/FullPostPage';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/:page?" component={HomePage} />
      <Route path="/p/:page?" component={HomePage} />
      <Route path="/post/:year/:month/:date/:slug?" component={FullPostPage} />
    </div>
  </Router>
);

export default Routes
