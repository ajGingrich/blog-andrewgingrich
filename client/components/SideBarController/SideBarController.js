import React from 'react';
import { connect } from 'react-redux'

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

//dispatch here?? on click
export default SideBarController
