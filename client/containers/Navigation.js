import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { slide as Menu } from 'react-burger-menu'
import { defaultBreakpoints } from 'constants/constants'
import { hamburgerMenuStyles } from 'constants/hamburgerMenuStyles'
import { Sidebar } from 'Containers'
import { NavbarSearch, SideBarController } from 'Components'
//import axios from 'axios'

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
        <Menu key="hamburger-menu" styles={hamburgerMenuStyles}>
          <div className="navFaContainer">
            <ul>
              <li>
                <a id="about" className="menu-item" href="https://andrewgingrich.com/"><i className="fa fa-user fa-2x" /></a>
              </li>
              <li>
                <NavLink to={`/tags`}><i className="fa fa-tags fa-lg fa-2x" /></NavLink>
              </li>
              <li>
                <i className="fa fa-search fa-lg fa-2x" />
              </li>
            </ul>
          </div>
          <Sidebar isMobile={true} />
        </Menu>,
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
