import React from 'react';
import buttercms from '../img/buttercms.png'

class Footer extends React.Component {

  render () {

    return (
      <div className="footer">
        © Andrew Gingrich 2017. Powered by&nbsp;<a href="https://buttercms.com/"><img src={buttercms} /></a>
      </div>
    )
  }
}

export default Footer
