import React from 'react';
import { TagIndividual } from 'Components'
import Butter from 'buttercms';
import { fromJS } from 'immutable';

const butter = Butter(process.env.BUTTERCMS_KEY);

class TagList extends React.Component {

  constructor(props) {
    super(props);

    this.state = { loaded: false }
  }

  fetchTagList() {
    butter.tag.list({include: 'recent_posts'}).then((resp) => {
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
      const tagData = fromJS(resp.data)
        .filter(tag => tag.get('recent_posts').size > 0)
        .sortBy(tag => -tag.get('recent_posts').size)

      return (
        <div className="container tagContainer">
          {tagData.map((tag) =>
            <TagIndividual
              key={tag.get('slug')}
              tagName={tag.get('name')}
              count={tag.get('recent_posts').size}
              posts={tag.get('recent_posts')}
            />
          )}
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
