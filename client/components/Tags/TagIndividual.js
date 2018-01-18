import React from 'react';
import { Link } from 'react-router-dom';
import Butter from 'buttercms';

const butter = Butter(process.env.BUTTERCMS_KEY);

class TagIndividual extends React.Component {

  constructor(props) {
    super(props);

    this.state = { loaded: false }
  }

  render() {
    const { tagName, count } = this.props
    return (
        <div>
          {tagName} x {count}
        </div>
      )
    }
}

export default TagIndividual
