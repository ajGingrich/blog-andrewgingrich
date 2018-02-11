import React from 'react';
import { Link } from 'react-router-dom';
import SearchPage from './SearchPage'
import { MainHeader } from 'Components'

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
        <MainHeader title="Search" />
        <SearchPage value={value} />
      </div>
    )
  }
}

export default Search
