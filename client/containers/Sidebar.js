import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { AccordionPosts, SubscriptionWrapper } from 'Components'
import { defaultBreakpoints } from 'constants/constants'

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
    const sidebarWidth = browser.is.infinity ? '262.5px ': '212.5px'
    const sidebarStyles = browser.lessThan.large ? {} : { width: sidebarWidth }
    const renderSidebar = sidebar.isOpen && (!browser.lessThan.large || isMobile)

    if (renderSidebar) {
      return (
        <div className="col-md-3">
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
