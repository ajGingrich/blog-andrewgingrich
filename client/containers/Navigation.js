import React from 'react';
import { Link } from 'react-router-dom';
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
            <div className="navInitials"><Link to={`/`}><p>AJG</p></Link></div>
          </div>
          <Menu>
            <a id="about" className="menu-item" href="https://andrewgingrich.com/">About Me</a>
            <a id="home" className="menu-item" href="/">Login</a>
            <a id="contact" className="menu-item" href="/contact">Tags</a>
            <a onClick={ this.showSettings } className="menu-item--small" href="">Search</a>
          </Menu>
        </div>
      )
    } else {
      return (
        <div className="navigation">
          <div className="container">
            <ul>
              <li className="navInitials"><Link to={`/`}>AJG</Link></li>
                <li className="navRightItems"><a id="about" className="menu-item" href="https://andrewgingrich.com/">About Me</a></li>
                <li className="navRightItems"><a id="home" className="menu-item" href="/">Login</a></li>
                <li className="navRightItems"><a id="contact" className="menu-item" href="/contact">Tags</a></li>
                <li className="navRightItems"><a onClick={ this.showSettings } className="menu-item--small" href="">Search</a></li>
            </ul>
          </div>
        </div>
      )
    }
  }
}

export default Navigation
