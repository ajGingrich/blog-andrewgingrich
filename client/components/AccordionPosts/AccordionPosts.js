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
import AccordionMonths from './AccordionMonths';

const butter = Butter(process.env.BUTTERCMS_KEY);

class AccordionPosts extends React.Component {

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
      const sequentialPosts = _.groupBy(postList, item => item.published.slice(0, 4));
      const postYears = fromJS(sequentialPosts)
      const date = new Date();
      const currentYear = date.getFullYear().toString();

      return (
        <div className="yearPostList">
          <div className="sidebarCenterWrapper">
            <h4>Blog Archive</h4>
          </div>
          {postYears.entrySeq().map( ([year, data]) => {

                return (
                  <Accordion accordion={false} key={year}>
                    <AccordionItem className="accordion__item" expanded={year === currentYear}>
                      <AccordionItemTitle>
                        <h5 className="u-position-relative">
                          {year}
                          <div className="accordion__arrow" role="presentation" />
                        </h5>
                      </AccordionItemTitle>
                      <AccordionItemBody>
                        <AccordionMonths
                          postsFromYear={data}
                          year={year}
                        />
                      </AccordionItemBody>
                    </AccordionItem>
                  </Accordion>
                )
          })}
        </div>
      )
    } else {
      return (
        <div className="yearPostList">
          Loading...
        </div>
      )
    }
  }
}

export default AccordionPosts
