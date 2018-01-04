import React from 'react';
import { map } from 'immutable'

class LinkDescription extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { LinksInDay} = this.props

    if (isOpen) {

      return (
        <div className="monthPostList">
          {LinksInDay.map(link => {
            return (
              <div className="postLink">
                <h5 className="postTitle">{link.get('title')}</h5>
              </div>
            )
          })}
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default LinkDescription
