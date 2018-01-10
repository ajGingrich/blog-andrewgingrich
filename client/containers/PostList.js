import React from 'react';
import { Link } from 'react-router-dom';
import Butter from 'buttercms';
import { createTextDate } from '../helpers/dates'

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
        <div className="col-xs-12 col-md-9">
          <div className="post">
            <div className="postContainer">
              {
                <div className="pagination">
                  {previous_page && <Link to={`/p/${previous_page}`}>Prev</Link>}
                  {next_page && <Link className="nextLink" to={`/p/${next_page}`}>Next</Link>}
                </div>
              }
              {
                this.state.resp.data.map((post) => {
                  return (
                    <div key={post.slug}>
                      <Link to={`/article/${post.slug}`}>
                        <h1 className="postTitle">{post.title}</h1>
                      </Link>
                      <div className="postSummary">
                        {post.summary} by {post.author.first_name} {post.author.last_name} on {createTextDate(post.created)}
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
          </div>
        </div>
      )
    } else {
      return (
        <div className="col-xs-12 col-md-9">
          <div className="post">
            Loading...
          </div>
        </div>
      )
    }
  }
}

export default PostList
