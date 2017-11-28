import React from 'react';
import FullPost from '../containers/FullPost';
import LinkContainer from '../containers/LinkContainer';
import Navigation from '../containers/Navigation';

class FullPostPage extends React.Component {

  render() {
    console.log('im a full post')
    return (
      <div>
        <Navigation />
          <div className="container">
            <div className="row">
              <LinkContainer/>
              <FullPost slug={params.slug || 'no slug'}/>
            </div>
          </div>
      </div>
    )
  }
};


export default FullPostPage
