import React from 'react';
import { connect } from 'react-redux'
import { toggleSidebar } from 'actions/sidebar'
import store from 'store'

function sidebarSelector({sidebar}) {
  return {sidebar}
}

@connect(sidebarSelector)
class SideBarController extends React.Component {
  constructor(props) {
    super(props);

    this._handleOnClick = this._handleOnClick.bind(this);
  }

  _handleOnClick() {
    const { sidebar } = this.props;
    const isOpen = sidebar.isOpen
    store.dispatch(toggleSidebar(!isOpen))
  }

  render() {
    const { sidebar } = this.props;
    const isOpen = sidebar.isOpen

    return (
      <span onClick={this._handleOnClick} className ="tooltip-bottom sidebarToggle" data-tooltip="Toggle Archive">
        <i className="fa fa-bars fa-lg" />
      </span>
    )
  }
};

export default SideBarController
