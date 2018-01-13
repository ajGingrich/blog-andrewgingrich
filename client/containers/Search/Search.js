import React from 'react';
import { Link } from 'react-router-dom';
import Butter from 'buttercms';

const butter = Butter(process.env.BUTTERCMS_KEY);

class Search extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h2>Search</h2>
      </div>
    )
  }
}

export default Search
