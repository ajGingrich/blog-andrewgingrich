import React from 'react';
import Butter from 'buttercms';
import { Link } from 'react-router-dom';
import { createPostLinkFromJS } from 'helpers/links'
import { createTextDate } from 'helpers/dates'
import { MainHeader, PostSummary, PostTitle } from 'Components'

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
          <MainHeader title={name}/>
          {
            recentPosts.map((post) => {
              return (
                <div key={post.slug}>
                  <PostTitle post={post} />
                  <PostSummary post={post} />
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
