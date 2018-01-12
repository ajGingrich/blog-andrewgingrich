import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { AccordionPosts } from 'Components'
import { defaultBreakpoints } from 'constants/constants'

function browserSelector({browser}) {
  return {browser}
}

@connect(browserSelector)
class Sidebar extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    //test that it should rerender here!
    console.log(nextProps, 'nextProps')
  }

  render() {
    const { browser, isMobile } = this.props;
    console.log('rerendering...')
    console.log(browser, 'browser')

    if (!browser.lessThan.large || isMobile) {
      return (
        <div className="col-md-3">
          <div className="sidebar">
            <AccordionPosts />
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
