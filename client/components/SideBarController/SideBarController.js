import React from 'react';
import { connect } from 'react-redux'
import { toggleSidebar } from 'actions/sidebar'

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

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}
 
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const SidebarLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarController)

//dispatch here?? on click
export default connect()(SideBarController)
