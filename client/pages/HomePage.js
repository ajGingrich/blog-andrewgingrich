import React from 'react';
import PostContainer from '../containers/PostContainer';
import LinkContainer from '../containers/LinkContainer';
import Navigation from '../containers/Navigation';
import Footer from '../containers/Footer'

class HomePage extends React.Component {
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
              <PostContainer page={params.page || 1}/>
            </div>
            <Footer />
          </div>
      </div>
    )
  }
};

export default HomePage
