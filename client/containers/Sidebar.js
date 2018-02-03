import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { AccordionPosts, SubscriptionWrapper } from 'Components'
import { defaultBreakpoints } from 'constants/constants'

function browserSelector({browser}) {
  return {browser}
}

@connect(browserSelector)
class Sidebar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { browser, isMobile } = this.props;
    const sidebarWidth = browser.is.infinity ? '262.5px ': '212.5px'
    const sidebarStyles = browser.lessThan.large ? {} : { width: sidebarWidth }

    if (!browser.lessThan.large || isMobile) {
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
