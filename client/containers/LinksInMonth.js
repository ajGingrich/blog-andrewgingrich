import React from 'react';
import { Map, groupBy, map } from 'immutable';
import LinkDescription from './LinkDescription';

class LinksInMonth extends React.Component {

  constructor(props) {
    super(props);
    /*this.state = {
      isOpen: false,
    }*/
  }

  render() {
    const { isMonthOpen, postsFromMonth} = this.props

    if (isMonthOpen) {
      const linksList = postsFromMonth.groupBy(item => item.get('published').slice(8, 10))

      return (
        <div className="monthPostList">
          {linksList.map(day => {
            return (
              <div className="postLink">
                <h5 className="postTitle">{day.key}</h5>
                <LinkDescription
                  LinksInDay={day}
                />
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

export default LinksInMonth
