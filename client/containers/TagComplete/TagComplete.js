import React from 'react';
import Butter from 'buttercms';
import { Link } from 'react-router-dom';
import { createPostLinkFromJS } from 'helpers/links'
import { createTextDate } from 'helpers/dates'

const butter = Butter(process.env.BUTTERCMS_KEY);

class TagComplete extends React.Component {

  constructor(props) {
    super(props);

    this.state = { loaded: false }
  }

  fetchTag(tag) {
    butter.tag.retrieve(tag, {include: 'recent_posts'}).then((resp) => {
      this.setState({
        loaded: true,
        tag: resp.data
      })
    })
  }

  componentWillMount() {
    const tag = this.props.tag
    this.fetchTag(tag)
  }

  render() {
    const { loaded } = this.state

    if (loaded) {
      const { tag } = this.state
      const name = tag && tag.data.name || 'No name'
      const recentPosts = tag && tag.data.recent_posts || 'none'

      return (
        <div>
          <h1>{name}</h1>
          {
            recentPosts.map((post) => {
              return (
                <div key={post.slug}>
                  <Link to={createPostLinkFromJS(post)}>
                    <h1 className="postTitle">{post.title}</h1>
                  </Link>
                  <div className="postSummary">
                    {post.summary} By {post.author.first_name} {post.author.last_name} on {createTextDate(post.published)}
                  </div>
                </div>
              )
            })
          }
        </div>
      )
    } else {
      return (
        <div>
          Loading Tag...
        </div>
      )
    }
  }
}

export default TagComplete
