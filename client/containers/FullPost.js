import React from 'react';
import { Link } from 'react-router';
import Butter from 'buttercms';

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

        return (
          <div className="col-xs-12 col-md-9">
            <div className="post">
              <h1>{post.title}</h1>
              <div dangerouslySetInnerHTML={{__html: post.body}} /></div>
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
