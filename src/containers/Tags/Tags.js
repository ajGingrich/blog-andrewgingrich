import React from 'react';
import TagList from './TagList'
import { MainHeader } from 'Components'

class Tags extends React.Component {

  render() {

    return (
      <div>
        <MainHeader title="Tags" />
        <TagList />
      </div>
    )
  }
}

export default Tags
