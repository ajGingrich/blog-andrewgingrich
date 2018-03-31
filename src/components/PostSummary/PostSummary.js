import React from 'react'
import { Link }  from 'react-router-dom'
import { createPostLinkFromJS } from 'helpers/links'

class PostSummary extends React.Component {
  //add prop types
  render() {
    const { post } = this.props

    return (
      <div className="postSummary">
        {post.summary}
        &nbsp;
        <Link to={createPostLinkFromJS(post)}>
          Continue reading...
        </Link>
      </div>
    )
  }
}

export default PostSummary
