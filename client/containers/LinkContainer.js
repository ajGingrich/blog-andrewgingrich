import React from 'react';
import { Link } from 'react-router-dom';
import Butter from 'buttercms';

const butter = Butter(process.env.BUTTERCMS_KEY);

class LinkContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        }
    }

    fetchPosts() {
        butter.post.list({page: 1, page_size: 100000}).then((resp) => {
            this.setState({
                loaded: true,
                resp: resp.data
            })
        });
    }

    componentWillMount() {
        this.fetchPosts()
    }

    render() {
        if (this.state.loaded) {
            return (
                <div className="col-md-3">
                    <div className="sidebar">
                        {this.state.resp.data.map((post) => {
                            //console.log(post);
                            return (
                                <div className="postLink" key={post.slug}>
                                    <Link to={`/article/${post.slug}`}>
                                        <h5 className="postTitle">{post.title} - { post.published.slice(0, 10) }</h5>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="col-md-3">
                    <div className="sidebar">
                        Loading...
                    </div>
                </div>
            )
        }
    }
}

export default LinkContainer
