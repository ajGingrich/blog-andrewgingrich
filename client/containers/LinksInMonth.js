import React from 'react';
import { Map, groupBy, map } from 'immutable';
import LinkDescription from './LinkDescription';
import ToggleDisplay from 'react-toggle-display'

class LinksInMonth extends React.Component {

  constructor(props) {
    super(props);
  }

  handleOpenDay = () => {
    this.setState({
      isMonthOpen: !this.state.isMonthOpen
    })
  }

  render() {
    const { isMonthOpen, postsFromMonth} = this.props
    const linksList = postsFromMonth.groupBy(item => item.get('published').slice(8, 10))

    return (
      <ToggleDisplay show={isMonthOpen}>
        <div className="monthPostList">
          {linksList.entrySeq().map( ([day, data]) => {
            return (
              <div className="postLink">
                <h5 className="postTitle">{day}</h5>
                <LinkDescription
                  LinksInDay={data}
                />
              </div>
            )
          })}
        </div>
      </ToggleDisplay>
    )
  }
}

export default LinksInMonth
