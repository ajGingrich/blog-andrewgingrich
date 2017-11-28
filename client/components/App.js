import React from 'react';
import PostContainer from '../containers/PostContainer';
import LinkContainer from '../containers/LinkContainer';
import Navigation from '../containers/Navigation';
import Routes from '../routes'

const App = ({ match: { params } }) => {
  return
    <Routes params={params} />;
};

export default App
