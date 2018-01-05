import React from 'react';
import { map } from 'immutable'
import ToggleDisplay from 'react-toggle-display'

class LinkDescription extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { LinksInDay} = this.props

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
  }
}

export default LinkDescription
