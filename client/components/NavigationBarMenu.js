import React from 'react';

export default class NavigationBarMenu extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }

    // include sidebar in this hamburger menu on mobile//include it no matter what
    render () {
        return (
            <div>
                <p>AJG</p>
                <a id="about" className="menu-item" href="https://andrewgingrich.com/">About Me</a>
                <a id="home" className="menu-item" href="/">Login</a>
                <a id="contact" className="menu-item" href="/contact">Tags</a>
                <a onClick={ this.showSettings } className="menu-item--small" href="">Search</a>
            </div>
        );
    }
}
