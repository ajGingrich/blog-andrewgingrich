import React from 'react';
import Hamburger from '../components/BurgerMenu';
import NavigationBarMenu from '../components/NavigationBarMenu';
import { connect } from 'react-redux';

export default class NavigationContainer extends React.Component {
    render() {
        return (
            <div className="navigation">
                <NavigationBarMenu />
                <Hamburger />
            </div>
        )
    }
}