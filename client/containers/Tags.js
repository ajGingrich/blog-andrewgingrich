import React from 'react';
import { Link } from 'react-router-dom';
import Butter from 'buttercms';

const butter = Butter(process.env.BUTTERCMS_KEY);

class Tags extends React.Component {

  constructor(props) {
    super(props);

    /*this.state = {
      loaded: false
    }*/
  }

  /*fetchPosts(page) {
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
  }*/

  render() {
    //const { next_page, previous_page } = this.state.resp.meta;

      return (
        <div>
          <h2>Tags</h2>
        </div>
      )
    }
}

export default Tags
