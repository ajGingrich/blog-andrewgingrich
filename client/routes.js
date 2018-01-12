import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { HomePage, FullPostPage } from 'Pages';
import { FourOhFourError } from 'Components'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/p/:page?" component={HomePage} />
      <Route path="/post/:year/:month/:date/:slug?" component={FullPostPage} />
      <Route component={FourOhFourError} />
    </Switch>
  </Router>
);

export default Routes
