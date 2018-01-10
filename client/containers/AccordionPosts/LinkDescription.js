import React from 'react';
import { map } from 'immutable'
import { Link } from 'react-router-dom';
import { createLink } from '../../helpers/links'

class LinkDescription extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { LinksInDay } = this.props

    return (
      <div className="linkDescription">
        {LinksInDay.map(link => {

          return (
            <div className="postLink" key={link}>
              <Link to={createLink(link)}>
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
