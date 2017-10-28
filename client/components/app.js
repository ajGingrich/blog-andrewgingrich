import React from 'react';
import PostContainer from '../containers/PostContainer';
import SidebarContainer from '../containers/SidebarContainer';
import NavigationContainer from '../containers/NavigationContainer';

export default class App extends React.Component {
    render() {
        return <div>
                <NavigationContainer/>
                <SidebarContainer/>
                <PostContainer/>
            </div>;

    }
}