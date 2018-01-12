import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import {
  Navigation,
  Sidebar,
  Footer,
  PostCompleteWrapper,
  PostListWrapper,
  Tags
} from 'Containers';
import { FourOhFourError } from 'Components'

const Routes = () => (
  <Router>
    <div>
      <Navigation />
      <div className="container">
        <div className="row">
          <Sidebar isMobile={false}/>
          <div className="col-xs-12 col-md-9">
            <div className="post">
              <div className="postContainer">
                <Switch>
                  <Route exact path="/" component={PostListWrapper} />
                  <Route path="/p/:page?" component={PostListWrapper} />
                  <Route path="/post/:year/:month/:date/:slug?" component={PostCompleteWrapper} />
                  <Route path="/tags" component={Tags} />
                  <Route component={FourOhFourError} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </Router>
);

export default Routes
