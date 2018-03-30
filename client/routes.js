import React from 'react'
import { connect } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import {
  Navigation,
  Sidebar,
  Footer,
  PostComplete,
  PostList,
  Search,
  Tags,
  TagComplete,
} from 'Containers';
import { FourOhFourError } from 'Components'

function stateSelector({ sidebar }) {
  return { sidebar}
}

@connect(stateSelector)
class Routes extends React.Component {

  render() {
    const { sidebar } = this.props
    const postClass = sidebar.isOpen ? 'col-xs-12 col-md-9 animated fadeInUp' : 'col-xs-12 col-md-12 animated fadeInRightBig'

    return (
      <Router>
        <div className="fixedWrapper">
          <Navigation/>
          <div className="container mainWrapper">
            <div className="row">
              <Sidebar isMobile={false}/>
              <div className={postClass}>
                <div className="post">
                  <div className="postContainer">
                    <Switch>
                      <Route exact path="/" component={PostList} />
                      <Route path="/p/:page?" component={PostList} />
                      <Route path="/post/:year/:month/:date/:slug?" component={PostComplete} />
                      <Route path="/tags" component={Tags} />
                      <Route path="/tag/:tag?" component={TagComplete} />
                      <Route path="/search/:query?" component={Search} />
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
    )
  }
}

export default Routes
