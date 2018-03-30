import React from 'react';
import { Link } from 'react-router-dom';

class TagIndividual extends React.Component {

  constructor(props) {
    super(props);

    this.state = { loaded: false }
  }

  render() {
    const { tagName, count } = this.props
    return (
        <div className="col-xs-6 col-sm-4 col-md-3 tagWrapper">
          <div className="tagName">
            <Link to={`/tag/${tagName}`}>{tagName}</Link>
          </div>
          <div className="tagCount">
            x {count}
          </div>
        </div>
      )
    }
}

export default TagIndividual
