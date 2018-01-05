import React from 'react'
import { Map, fromJS, map } from 'immutable'
import LinksInMonth from './LinksInMonth'
import ToggleDisplay from 'react-toggle-display'

class LinkMonthsInYear extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isMonthOpen: false,
    }
  }

  handleOpenMonth = () => {
    this.setState({
      isMonthOpen: !this.state.isMonthOpen
    })
  }

  render() {
    const { isYearOpen, postsFromYear} = this.props
    const monthPostList = postsFromYear.groupBy(item => item.get('published').slice(5, 7))
    console.log(isYearOpen, 'im a prop')

    return (
      <ToggleDisplay show={isYearOpen}>
      <div className="monthPostList">
          {monthPostList.entrySeq().map( ([month, data]) => {
            return (
              <div className="postLink">
                <span onClick={this.handleOpenMonth}>
                  <h5 className="postTitle">{month}</h5>
                </span>
                <LinksInMonth
                  postsFromMonth={data}
                  isMonthOpen={this.state.isMonthOpen}
                />
              </div>
            )
          })}
        </div>
      </ToggleDisplay>
    )
  }
}

export default LinkMonthsInYear
