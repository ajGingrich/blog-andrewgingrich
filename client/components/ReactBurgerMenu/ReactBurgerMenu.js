import React from 'react'
import { connect } from 'react-redux'
import Menu from './Menu'
import { hamburgerMenuStyles } from 'constants/hamburgerMenuStyles'
import { Sidebar } from 'Containers'
import { MobileLinkIcons } from 'Components'

class ReactBurgerMenu extends React.Component {

  render () {
    return (
      <Menu right styles={hamburgerMenuStyles}>
        <MobileLinkIcons />
        <div className="spacer">&nbsp;</div>
        <Sidebar isMobile={true} />
      </Menu>
    )
  }
}

export default ReactBurgerMenu
