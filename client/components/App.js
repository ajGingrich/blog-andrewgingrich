import React from 'react';
import PostContainer from '../containers/PostContainer';
import SidebarContainer from '../containers/SidebarContainer';
import NavigationContainer from '../containers/NavigationContainer';
//import IntroContainer from '../containers/IntroContainer';

export default class App extends React.Component {
    render() {
        return <div>
                <NavigationContainer/>
                <div className="container">
                    <div className="row">
                        <SidebarContainer/>
                        <PostContainer/>
                    </div>
                </div>
            </div>;
    }
}