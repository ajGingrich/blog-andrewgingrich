import React from 'react';
import Search from './Search';

class SearchWrapper extends React.Component {

  render() {
    const params = this.props.match.params;

    return (
      <Search query={params.query || ''}/>
    )
  }
};

export default SearchWrapper
