import React from 'react';
import { connect } from 'react-redux';


export default class PostContainer extends React.Component {
    render() {
        return (
            <div className="container col-xs-12 col-md-9">
                <div className="post">
                    content
                    <button className="btn btn-primary">okie</button>
                </div>

            </div>

        )
    }
}