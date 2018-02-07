import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { slide as Menu } from 'react-burger-menu'
import { defaultBreakpoints } from 'constants/constants'
import { hamburgerMenuStyles } from 'constants/hamburgerMenuStyles'
import { Sidebar } from 'Containers'
import {
  NavbarSearch,
  SideBarController,
  MobileLinkIcons
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
        <Menu key="hamburger-menu" right styles={hamburgerMenuStyles}>
          <MobileLinkIcons />
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
