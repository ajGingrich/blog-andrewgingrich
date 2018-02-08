import React from 'react';
import { map } from 'immutable'
import { Link } from 'react-router-dom';
import { createPostLinkFromImmutable } from 'helpers/links'
import { action as toggleMenu } from 'redux-burger-menu'
import store from 'store'

class LinkDescription extends React.Component {

  constructor(props) {
    super(props);
  }

  _handleCloseMenu() {
    const isOpen = false
    store.dispatch(toggleMenu(isOpen));
  }

  render() {
    const { LinksInDay } = this.props

    return (
      <div className="linkDescription">
        {LinksInDay.map(link => {

          return (
            <div className="postLink" key={link}>
              <Link to={createPostLinkFromImmutable(link)} onClick={this._handleCloseMenu}>
                <h5 className="postTitle">{link.get('title')}</h5>
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}

export default LinkDescription
