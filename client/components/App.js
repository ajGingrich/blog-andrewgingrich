import React from 'react';
import PostContainer from '../containers/PostContainer';
import LinkContainer from '../containers/LinkContainer';
import Navigation from '../containers/Navigation';

const App = ({ match: { params } }) => {
  return<div>
    <Navigation />
      <div className="container">
      <div className="row">
      <LinkContainer/>
      <PostContainer page={params.page || 1}/>
      </div>
    </div>
  </div>;
};

export default App
