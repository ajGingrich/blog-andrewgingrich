import React from 'react';
import { Link } from 'react-router-dom';
import Butter from 'buttercms';
import { createTextDate } from 'helpers/dates'
import { createPostLinkFromJS } from 'helpers/links'

const butter = Butter(process.env.BUTTERCMS_KEY);

class SearchResults extends React.Component {

  constructor(props) {
    super(props);
    const query = this.props.query;

    this.state = {
      value: query,
      loaded: false
    };
  }

  fetchSearchResults(value) {
    butter.post.search(value).then((resp) => {
      this.setState({
        loaded: true,
        resp: resp.data
      })
    })
  }

  componentWillMount() {
    const { value } = this.props
    this.fetchSearchResults(value)
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.props;
    const { value: nextValue } = nextProps;

    if (value !== nextValue) {
      this.setState({loaded: false});
      this.fetchSearchResults(nextValue)
    }
  }

  render() {
    const { loaded } = this.state
    const { value } = this.props

    if (loaded) {
      const { resp } = this.state
      const errorMessage = resp.data.length < 1 ? <div className="emptySearch">Sorry, there are no results</div> : null

      return (
        <div>
          {errorMessage}
          {resp && resp.data.map((result) => {
            return (
              <div key={result.slug}>
                <Link to={createPostLinkFromJS(result)}>
                  <h1 className="postTitle">{result.title}</h1>
                </Link>
                <div className="postSummary">
                  {result.summary} by {result.author.first_name} {result.author.last_name} on {createTextDate(result.created)}
                </div>
              </div>
            )
          })}
        </div>
      )
    } else {
      return (
        <div>
          Searching for {value}...
        </div>
      )
    }
  }
}

export default SearchResults
