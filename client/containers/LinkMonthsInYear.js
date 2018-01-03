import React from 'react';
import { Map, fromJS, map } from 'immutable'

class LinkMonthsInYear extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { isOpen, postsFromYear} = this.props

    if (isOpen) {
      const monthPostList = postsFromYear.groupBy(item => item.get('published').slice(5, 7))

      return (
        <div className="monthPostList">
          {monthPostList.map(month => {
            return (
              <div className="postLink">
                <h5 className="postTitle">{month.key}</h5>
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

export default LinkMonthsInYear
