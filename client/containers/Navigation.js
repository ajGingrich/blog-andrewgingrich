import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  NavbarSearch,
  SideBarController,
  MobileLinkIcons,
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
            <div className="navInitials"><NavLink to={`/`}><p>AJG</p></NavLink></div>
          </div>
        </div>
      ]
    } else {
      return (
        <div className="navigation">
          <div className="container">
            <ul>
              <li className="navInitials">
                <NavLink to={`/`}>AJG</NavLink>
              </li>
              <li>
                <NavbarSearch />
              </li>
              <li>
                <NavLink to={`/tags`}><i className="fa fa-tags fa-lg" /></NavLink>
              </li>
              <li>
                <SideBarController />
              </li>
              <li>
                <a href="https://andrewgingrich.com/"><i className="fa fa-user fa-lg" /></a>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  }
}

export default Navigation
