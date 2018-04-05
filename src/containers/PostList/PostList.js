import React from 'react';
import Butter from 'buttercms';
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
    butter.post.list({page: page, page_size: 10}).then((resp) => { // eslint-disable-line camelcase
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
      const { next_page: nextPage, previous_page: previousPage } = this.state.resp.meta; // eslint-disable-line camelcase

      return (
        <div>
          <Pagination nextPage={nextPage} previousPage={previousPage} />
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
          <Pagination nextPage={nextPage} previousPage={previousPage} />
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
