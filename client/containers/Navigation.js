import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Hamburger from '../components/BurgerMenu'

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

  render () {
    const { browser } = this.props;
    if (browser.lessThan.medium) {
      return (
        <div className="navigation">
          <div className="container">
            <ul>
              <li className="navInitials"><Link to={`/`}><p>AJG</p></Link></li>
              <li><Hamburger /></li>
            </ul>
          </div>
        </div>
      )
    } else {
      return (
        <div className="navigation">
          <div className="container">
            <ul>
              <li className="navInitials"><Link to={`/`}>AJG</Link></li>
              <li><a id="about" className="menu-item" href="https://andrewgingrich.com/">About Me</a></li>
              <li><a id="home" className="menu-item" href="/">Login</a></li>
              <li><a id="contact" className="menu-item" href="/contact">Tags</a></li>
              <li><a onClick={ this.showSettings } className="menu-item--small" href="">Search</a></li>
            </ul>
          </div>
        </div>
      )
    }
  }
}

export default Navigation
