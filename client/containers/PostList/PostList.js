import React from 'react';
import { Link } from 'react-router-dom';
import Butter from 'buttercms';
import { createPostLinkFromJS } from 'helpers/links'

const butter = Butter(process.env.BUTTERCMS_KEY);

class PostList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    }
  }

  fetchPosts(page) {
    butter.post.list({page: page, page_size: 10}).then((resp) => {
      this.setState({
        loaded: true,
        resp: resp.data
      })
    });
  }

  componentWillMount() {
    let page = this.props.page;
    this.fetchPosts(page)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({loaded: false});

    let page = nextProps.page;
    this.fetchPosts(page)
  }

  render() {
    if (this.state.loaded) {
      const { next_page, previous_page } = this.state.resp.meta;

      return (
        <div>
          {
            <div className="pagination">
              {previous_page && <Link to={`/p/${previous_page}`}>Prev</Link>}
              {next_page && <Link className="nextLink" to={`/p/${next_page}`}>Next</Link>}
            </div>
          }
          {
            this.state.resp.data.map((post) => {
              const postImage = post.featured_image

              return (
                <div key={post.slug}>
                  <h1 className="postTitle">
                    <Link to={createPostLinkFromJS(post)}>
                      {post.title}
                    </Link>
                    {postImage && <img className="postIcon" src={postImage} />}
                  </h1>
                  <div className="postSummary">
                    {post.summary}
                    &nbsp;
                    <Link to={createPostLinkFromJS(post)}>
                      Continue reading...
                    </Link>
                  </div>
                </div>
              )
            })
          }
          <br />
          {
            <div className="pagination">
              {previous_page && <Link to={`/p/${previous_page}`}>Prev</Link>}
              {next_page && <Link className="nextLink" to={`/p/${next_page}`}>Next</Link>}
            </div>
          }
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

export default PostList
