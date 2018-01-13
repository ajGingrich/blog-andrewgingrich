import React from 'react';
import { Link } from 'react-router-dom';
import Butter from 'buttercms';

const butter = Butter(process.env.BUTTERCMS_KEY);

class Tags extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h2>Tags</h2>
      </div>
    )
  }
}

export default Tags
