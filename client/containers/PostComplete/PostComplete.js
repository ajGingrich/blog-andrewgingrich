import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router'
import Butter from 'buttercms';
import ReactDisqusComments from 'react-disqus-comments';
import Highlight from 'react-highlight'
import { connect } from 'react-redux'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share'

import { createPostUrl } from 'helpers/disqus'
import { createTextDate } from 'helpers/dates'
import { PostTitle } from 'Components'

const butter = Butter(process.env.BUTTERCMS_KEY);

function browserSelector({browser}) {
  return {browser}
}

@connect(browserSelector)
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
        const { post } = this.state;
        const { history } = this.props;
        const shortname = "andrewgingrich";
        const blogUrl = "https://blog.andrewgingrich.com/#/";
        const historyLocation = history && history.location.pathname.slice(1)
        const postLocation = blogUrl + historyLocation;

        return (
          <div className="postBody">
            <PostTitle postImage={post.featured_image} post={post} />
            <Highlight innerHTML={true} languages={['javascript', 'C']}>
              {post.body}
            </Highlight>
            <div className="postFooter">
              <div className="container">
                <span className="publishedDate">Published on {createTextDate(post.published)}.</span>
                <div className="postFooterClearFix"></div>
                  <span className="shareIcon"><i className="fa fa-share-alt fa-lg" /></span>
                  <span className="shareDivider">|</span>
                  <FacebookShareButton url={postLocation} className="shareButtons">
                    <FacebookIcon round size={32} />
                  </FacebookShareButton>
                  <TwitterShareButton url={postLocation} className="shareButtons">
                    <TwitterIcon round size={32} />
                  </TwitterShareButton>
                  <LinkedinShareButton url={postLocation} className="shareButtons">
                    <LinkedinIcon round size={32} />
                  </LinkedinShareButton>
              </div>
            </div>
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

export default withRouter(PostComplete)
