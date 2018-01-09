import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Butter from 'buttercms';
import _ from 'lodash';
import { fromJS, map } from 'immutable';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import LinkMonthsInYear from './LinkMonthsInYear';

const butter = Butter(process.env.BUTTERCMS_KEY);

class LinkContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    }
  }

  fetchPosts() {
    butter.post.list({page: 1, page_size: 100000}).then((resp) => {
      this.setState({
        loaded: true,
        resp: resp.data
      })
    });
  }

  componentWillMount() {
    this.fetchPosts()
  }

  render() {
    if (this.state.loaded) {
      const postList = this.state.resp.data;
      const postYears = fromJS(_.groupBy(postList, item => item.published.slice(0, 4)))

      return (
        <div className="col-md-3">
          <div className="sidebar">
            <div className="yearPostList">
              {postYears.entrySeq().map( ([year, data]) => {
                const isFirstTitle = year === 2017

                return (
                  <Accordion accordion={false} key={year}>
                    <AccordionItem className="accordion__item">
                      <AccordionItemTitle>
                        <h5 className="u-position-relative">
                          {year}
                          <div className="accordion__arrow" role="presentation" />
                        </h5>
                      </AccordionItemTitle>
                      <AccordionItemBody>
                        <LinkMonthsInYear
                          postsFromYear={data}
                          year={year}
                        />
                      </AccordionItemBody>
                    </AccordionItem>
                  </Accordion>
                )
              })}
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="col-md-3">
          <div className="sidebar">
            Loading...
          </div>
        </div>
      )
    }
  }
}

export default LinkContainer
