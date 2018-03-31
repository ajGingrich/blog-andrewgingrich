import React from 'react'
import { Link } from 'react-router-dom'

class Pagination extends React.Component {
  render() {
    const { previousPage, nextPage} = this.props

    return (
      <div className="pagination">
        {previousPage && <Link to={`/p/${previousPage}`}>Prev</Link>}
        {nextPage && <Link className="nextLink" to={`/p/${nextPage}`}>Next</Link>}
      </div>
    )
  }
}

export default Pagination
