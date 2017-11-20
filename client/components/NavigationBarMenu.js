import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
class NavigationBarMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    const { browser } = this.props;
    if (browser.lessThan.medium) {
      return (
        <div>
          <Link to={`/`}><p>AJG</p></Link>
            <a id="about" className="menu-item" href="https://andrewgingrich.com/">About Me</a>
            <a id="home" className="menu-item" href="/">Login</a>
            <a id="contact" className="menu-item" href="/contact">Tags</a>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={`/`}><p>AJG</p></Link>
            <a id="about" className="menu-item" href="https://andrewgingrich.com/">About Me</a>
            <a id="home" className="menu-item" href="/">Login</a>
            <a id="contact" className="menu-item" href="/contact">Tags</a>
            <a onClick={ this.showSettings } className="menu-item--small" href="">Search</a>
        </div>
      );
    }

  }
}

export default NavigationBarMenu
