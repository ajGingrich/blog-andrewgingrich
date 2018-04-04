import React from 'react';
import TagComplete from './TagComplete';

class TagCompleteWrapper extends React.Component {

  render() {
    const params = this.props.match.params;

    return (
      <TagComplete tag={params.tag || 'no tag'}/>
    )
  }
};

export default TagCompleteWrapper
