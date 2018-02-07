import React from 'react';
import { Link } from 'react-router-dom';
import SearchPage from './SearchPage'

class Search extends React.Component {

  constructor(props) {
    super(props);
    const query = this.props.query;

    this.state = {
      value: query
    };
  }

  componentWillReceiveProps(nextProps) {
    const { query } = this.props;
    const { query: nextQuery } = nextProps;

    if (query !== nextQuery) {
      this.setState({
        value: nextQuery
      })
    }
  }

  render() {
    const { value } = this.state

    return (
      <div>
        <div>
          <h2>Search</h2>
        </div>
        <SearchPage value={value} />
      </div>
    )
  }
}

export default Search
