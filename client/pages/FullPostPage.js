import React from 'react';
import FullPost from '../containers/FullPost';
import LinkContainer from '../containers/LinkContainer';
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
              <LinkContainer/>
              <FullPost slug={params.slug || 'no slug'}/>
            </div>
            <Footer />
          </div>
      </div>
    )
  }
};


export default FullPostPage
