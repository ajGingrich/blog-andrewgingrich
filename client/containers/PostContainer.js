import React from 'react';
//import Link from './Link';
import { Link } from 'react-router-dom';
import Butter from 'buttercms';

const butter = Butter(process.env.BUTTERCMS_KEY);


class PostContainer extends React.Component {

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

        let page = this.props.page;;
        this.fetchPosts(page)
    }

    render() {
        if (this.state.loaded) {
            const { next_page, previous_page } = this.state.resp.meta;

            return (
                <div className="container col-xs-12 col-md-9">
                    <div className="post">
                        {this.state.resp.data.map((post) => {
                            return (
                                <div key={post.slug}>
                                    <Link to={`/article/${post.slug}`}><h1 className="postTitle">{post.title}</h1></Link>
                                    <Link to={`/article/${post.slug}`}><div>{post.summary}</div></Link>
                                </div>
                            )
                        })}
                        <br />

                        {/*<div>
                            {previous_page && <Link to={`/p/${previous_page}`}>Prev</Link>}
                            {next_page && <Link to={`/p/${next_page}`}>Next</Link>}
                        </div>*/}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container col-xs-12 col-md-9">
                    <div className="post">
                        Loading...
                    </div>
                </div>
            )
        }
    }
}

export default PostContainer
