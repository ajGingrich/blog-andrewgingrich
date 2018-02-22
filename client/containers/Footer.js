import React from 'react';
import buttercms from 'img/buttercms.png'

class Footer extends React.Component {

  render () {
    return (
      <div className="footer">
        <div className="container">
          <span>© Andrew Gingrich 2018.</span>
          <span className="butterSpan">Powered by<a href="https://buttercms.com/"><img className="butterImg" src={buttercms} /></a></span>
        </div>
      </div>
    )
  }
}

export default Footer
