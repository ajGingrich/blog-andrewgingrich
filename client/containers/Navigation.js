import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { slide as Menu } from 'react-burger-menu';
import { defaultBreakpoints } from 'constants/constants'
import { Sidebar } from 'Containers'

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

    if (browser.lessThan.large) {
      return (
        <div className="navigation">
          <div className="container">
            <div className="navInitials"><NavLink to={`/`}><p>AJG</p></NavLink></div>
          </div>
          <Menu>
            <a id="about" className="menu-item" href="https://andrewgingrich.com/"><i className="fa fa-user" /></a>
            <a id="contact" className="menu-item" href="/contact"><i className="fa fa-tags" /></a>
            <a onClick={ this.showSettings } className="menu-item--small" href=""><i className="fa fa-search" /></a>
            <Sidebar isMobile={true} />
          </Menu>
        </div>
      )
    } else {
      return (
        <div className="navigation">
          <div className="container">
            <ul>
              <li className="navInitials"><NavLink to={`/`}>AJG</NavLink></li>
              <li><NavLink to={`/`}><i className="fa fa-search" /></NavLink></li>
              <li><NavLink to={`/tags`}><i className="fa fa-tags" /></NavLink></li>
              <li><a href="https://andrewgingrich.com/"><i className="fa fa-user" /></a></li>
            </ul>
          </div>
        </div>
      )
    }
  }
}

export default Navigation
