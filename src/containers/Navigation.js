import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  NavbarSearch,
  SideBarController,
  ReactBurgerMenu,
} from 'Components'

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
      return [
        <ReactBurgerMenu key="hamburger-menu" />,
        <div className="navigation" key="mobile-nav-bar">
          <div className="container">
            <div className="navInitials"><NavLink to={'/'}><p>AJG</p></NavLink></div>
          </div>
        </div>
      ]
    } else {
      return (
        <div className="navigation">
          <div className="container">
            <ul>
              <li className="navInitials">
                <NavLink to={'/'}>
                  <span className ="tooltip-bottom" data-tooltip="Home">
                    AJG!
                  </span>
                </NavLink>
              </li>
              <li>
                <NavbarSearch />
              </li>
              <li>
                <NavLink to={'/tags'}>
                  <span className ="tooltip-bottom" data-tooltip="Tags">
                    <i className="fa fa-tags fa-lg" />
                  </span>
                </NavLink>
              </li>
              <li>
                <SideBarController />
              </li>
              <li>
                <span className ="tooltip-bottom" data-tooltip="About Me">
                  <a href="https://andrewgingrich.com/"><i className="fa fa-user fa-lg" /></a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  }
}

export default Navigation
