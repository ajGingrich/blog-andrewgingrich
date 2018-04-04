import React from 'react';
import PostList from './PostList';

class PostListWrapper extends React.Component {

  render() {
    const params = this.props.match.params;

    return (
      <PostList page={params.page || 1}/>
    )
  }
};

export default PostListWrapper
