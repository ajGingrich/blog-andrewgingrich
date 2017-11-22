import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';
import LinkContainer from '../containers/LinkContainer'

class Hamburger extends React.Component {

  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu>
        <a id="about" className="menu-item" href="https://andrewgingrich.com/">About Me</a>
        <a id="home" className="menu-item" href="/">Login</a>
        <a id="contact" className="menu-item" href="/contact">Tags</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Search</a>
        <LinkContainer />
      </Menu>
    );
  }
}

export default Hamburger;
