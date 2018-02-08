import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavbarSearch } from 'Components'
import { connect } from 'react-redux'
import { action as toggleMenu } from 'redux-burger-menu'
import store from 'store'

function burgerMenuSelector({burgerMenu}) { //only for viewing
  return {burgerMenu}
}

@connect(burgerMenuSelector)
class MobileLinkIcons extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isSearchOpen: false
    }

    this._handleSearchDisplay = this._handleSearchDisplay.bind(this)
  }

  _handleSearchDisplay() {
    const { isSearchOpen } = this.state

    this.setState({
      isSearchOpen: !isSearchOpen
    })
  }

  _handleCloseMenu() {
    const isOpen = false
    store.dispatch(toggleMenu(isOpen));
  }

  render() {
    const { isSearchOpen } = this.state
    const { burgerMenu } = this.props //only for view

    return (
      <div className="navFaContainer">
        <ul>
          <li>
            <a id="about" className="menu-item" href="https://andrewgingrich.com/"><i className="fa fa-user fa-2x" /></a>
          </li>
          <li>
            <NavLink to={`/tags`} onClick={this._handleCloseMenu}>
              <i className="fa fa-tags fa-lg fa-2x" />
            </NavLink>
          </li>
          <li>
            <span onClick={this._handleSearchDisplay}>
              <i className="fa fa-search fa-lg fa-2x" />
            </span>
          </li>
        </ul>
        {isSearchOpen && <NavbarSearch />}
      </div>
    )
  }
}

export default connect()(MobileLinkIcons)
