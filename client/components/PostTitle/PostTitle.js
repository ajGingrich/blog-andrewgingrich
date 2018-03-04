import React from 'react'
import { Link } from 'react-router-dom';
import { createPostLinkFromJS } from 'helpers/links'

class PostTitle extends React.Component {
  //add prop types

  render() {
    const { post } = this.props;
    const postImage = post.featured_image;

    return (
      <h1 className="postTitle">
        <Link to={createPostLinkFromJS(post)}>
          {post.title}
        </Link>
        {postImage && <img className="postIcon" src={postImage} />}
      </h1>
    )
  }
}

export default PostTitle
