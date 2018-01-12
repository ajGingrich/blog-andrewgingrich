import React from 'react';
import PostComplete from './PostComplete';

class PostCompleteWrapper extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const params = this.props.match.params;

    return (
      <PostComplete slug={params.slug || 'no slug'}/>
    )
  }
};


export default PostCompleteWrapper
