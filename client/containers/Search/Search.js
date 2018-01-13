import React from 'react';
import { Link } from 'react-router-dom';
import Butter from 'buttercms';

const butter = Butter(process.env.BUTTERCMS_KEY);

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
    return (
      <div>
        <h2>Searching for {this.state.value}</h2>
      </div>
    )
  }
}

export default Search
