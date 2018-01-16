import React from 'react';
import TagList from './TagList'

class Tags extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h2>Tags</h2>
        <TagList />
      </div>
    )
  }
}

export default Tags
