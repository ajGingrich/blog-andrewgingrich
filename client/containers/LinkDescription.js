import React from 'react';
import { map } from 'immutable'
import { Link } from 'react-router-dom';
import ToggleDisplay from 'react-toggle-display'

class LinkDescription extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { LinksInDay } = this.props

    return (
      <div className="linkDescription">
        {LinksInDay.map(link => {

          const slug = link.get('slug');
          const year = link.get('published').slice(0, 4);
          const month = link.get('published').slice(5, 7);
          const day = link.get('published').slice(8, 10);

          return (
            <div className="postLink" key={link}>
              <Link to={`/post/${year}/${month}/${day}/${slug}`}>
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
