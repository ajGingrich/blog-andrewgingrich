import React from 'react';
import PostContainer from '../containers/PostContainer';
import LinkContainer from '../containers/LinkContainer';
import NavigationContainer from '../containers/NavigationContainer';

const App = ({ match: { params } }) => {
    return <div>
        <NavigationContainer/>
        <div className="container">
            <div className="row">
                <LinkContainer/>
                <PostContainer page={params.page || 1}/>
            </div>
        </div>
    </div>;
};

export default App
