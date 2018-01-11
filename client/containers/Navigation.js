import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { slide as Menu } from 'react-burger-menu';

const defaultBreakpoints = {
  extraSmall: 480,
  small: 768,
  medium: 992,
  large: 1200,
}

function browserSelector({browser}) {
  return {browser}
}

@connect(browserSelector)
class Navigation extends React.Component {

  showSettings (event) {
    event.preventDefault();
  }

  render () {
    const { browser } = this.props;

    if (browser.lessThan.medium) {
      return (
        <div className="navigation">
          <div className="container">
            <div className="navInitials"><NavLink to={`/`}><p>AJG</p></NavLink></div>
          </div>
          <Menu>
            <a id="about" className="menu-item" href="https://andrewgingrich.com/"><i className="fa fa-user" /></a>
            <a id="contact" className="menu-item" href="/contact"><i className="fa fa-tags" /></a>
            <a onClick={ this.showSettings } className="menu-item--small" href=""><i className="fa fa-search" /></a>
          </Menu>
        </div>
      )
    } else {
      return (
        <div className="navigation">
          <div className="container">
            <ul>
              <li className="navInitials"><NavLink to={`/`}>AJG</NavLink></li>
              <li><a href="https://andrewgingrich.com/"><i className="fa fa-user" />About Me</a></li>
              <li><a href="/contact"><i className="fa fa-tags" />Tags</a></li>
              <li><a onClick={ this.showSettings } href=""><i className="fa fa-search" />Search</a></li>
            </ul>
          </div>
        </div>
      )
    }
  }
}

export default Navigation
