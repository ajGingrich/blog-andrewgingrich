import React from 'react';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Butter from 'buttercms';
//import Disqus from '../components/Disqus'
import ReactDisqusComments from 'react-disqus-comments';
//import Highlight from 'react-highlight'

const butter = Butter(process.env.BUTTERCMS_KEY);

class FullPost extends React.Component {

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

  handleNewComment(comment) {
    console.log(comment.text);
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
        const categoryId = 'test';

        return (
          <div className="col-xs-12 col-md-9">
            <div className="post">
              <div className="postContainer">
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{__html: post.body}} />
                <ReactDisqusComments
                  shortname={shortname}
                  identifier={post.published}
                  title={post.title}
                  url={post.url}
                  category_id={categoryId}
                  onNewComment={this.handleNewComment}
                />
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

export default FullPost
