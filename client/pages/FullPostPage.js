import React from 'react';
import PostComplete from '../containers/PostComplete';
import Sidebar from '../containers/Sidebar';
import Navigation from '../containers/Navigation';
import Footer from '../containers/Footer'

class FullPostPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const params = this.props.match.params;

    return (
      <div>
        <Navigation />
          <div className="container">
            <div className="row">
              <Sidebar/>
              <PostComplete slug={params.slug || 'no slug'}/>
            </div>
            <Footer />
          </div>
      </div>
    )
  }
};


export default FullPostPage
