import React from 'react';
import { Link } from 'react-router-dom';
import Butter from 'buttercms';
import { createPostLinkFromJS } from 'helpers/links'
import { PostTitle, PostSummary, Pagination } from 'Components'

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
    const page = this.props.page;
    this.fetchPosts(page)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({loaded: false});

    const page = nextProps.page;
    this.fetchPosts(page)
  }

  render() {
    if (this.state.loaded) {
      const { next_page, previous_page } = this.state.resp.meta;

      return (
        <div>
          <Pagination nextPage={next_page} previousPage={previous_page} />
          {
            this.state.resp.data.map((post) => {
              return (
                <div key={post.slug}>
                  <PostTitle post={post} />
                  <PostSummary post={post} />
                </div>
              )
            })
          }
          <br />
          <Pagination nextPage={next_page} previousPage={previous_page} />
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
