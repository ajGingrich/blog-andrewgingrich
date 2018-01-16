import React from 'react';
import { Link } from 'react-router-dom';
import Butter from 'buttercms';

const butter = Butter(process.env.BUTTERCMS_KEY);

class TagList extends React.Component {

  constructor(props) {
    super(props);

    this.state = { loaded: false }
  }

  fetchTagList() {
    butter.tag.list().then((resp) => {
      this.setState({
        loaded: true,
        resp: resp.data
      })
    })
  }

  componentWillMount() {
    this.fetchTagList()
  }

  render() {
    const { loaded } = this.state

    if (loaded) {
      const { resp } = this.state
      console.log(resp.data, 'data')
      ///sort and add dups for a count (sort by count)
      return (
        <div>
          Hi
        </div>
      )
    } else {
      return (
        <div>
          Loading Tags...
        </div>
      )
    }
  }
}

export default TagList
