import React from 'react';
import { Link } from 'react-router';
import Butter from 'buttercms';
import ReactDisqusComments from 'react-disqus-comments';
import Highlight from 'react-highlight'
import { createPostUrl } from 'helpers/disqus'
import { createTextDate } from 'helpers/dates'

const butter = Butter(process.env.BUTTERCMS_KEY);

class PostComplete extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    }
  }

  fetchPost(slug) {
    butter.post.retrieve(slug).then((resp) => {
      this.setState({
        loaded: true,
        post: resp.data.data
      })
    });
  }

  componentWillMount() {
    let slug = this.props.slug;
    this.fetchPost(slug);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({loaded: false});
    let slug = nextProps.slug;
    this.fetchPost(slug)
  }

    render() {
      if (this.state.loaded) {
        const post = this.state.post;
        const shortname = "andrewgingrich";

        return (
          <div>
            <h1 className="completePostTitle">{post.title}</h1>
            <Highlight innerHTML={true} languages={['javascript', 'C']}>
              {post.body}
            </Highlight>
            <span>Published on {createTextDate(post.created)}.</span>
            <ReactDisqusComments
              shortname={shortname}
              identifier={post.slug}
              title={post.title}
              url={createPostUrl(post.url)}
              onNewComment={this.handleNewComment}
            />
          </div>
        )
      } else {
        return (
          <div>
            Loading...
          </div>
        )
      }
  }
}

export default PostComplete
