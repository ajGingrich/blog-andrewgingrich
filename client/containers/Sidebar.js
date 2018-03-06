import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { AccordionPosts, SubscriptionWrapper } from 'Components'

function stateSelector({ browser, sidebar }) {
  return { browser, sidebar}
}

@connect(stateSelector)
class Sidebar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { browser, isMobile, sidebar } = this.props;
    const isSidebarOpen = sidebar && sidebar.isOpen
    const sidebarWidth = browser.is.infinity ? '262.5px ': '212.5px'
    const sidebarStyles = browser.lessThan.large ? {} : { width: sidebarWidth }

    let sidebarWrapperStyles = 'sidebarMobileWrapper col-xs-12 col-md-3 animated'

    if (isSidebarOpen) {
      sidebarWrapperStyles += ' zoomInDown'
    } else {
      sidebarWrapperStyles += ' zoomOutUp'
    }

    if (!browser.lessThan.large || isMobile) {
      return (
        <div className={sidebarWrapperStyles}>
          <div className="sidebar" style={sidebarStyles}>
            <AccordionPosts />
            <SubscriptionWrapper />
          </div>
        </div>
    )
  } else {
    return (
      <div></div>
    )
  }
  }
};

export default Sidebar
