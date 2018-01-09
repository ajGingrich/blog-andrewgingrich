import React from 'react'
import ReactDOM from 'react-dom'
import { Map, fromJS, map } from 'immutable'
import LinksInMonth from './LinksInMonth'
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

class LinkMonthsInYear extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { year, postsFromYear } = this.props
    const monthPostList = postsFromYear.groupBy(item => item.get('published').slice(5, 7))

    return (
      <div className="monthPostList">
          {monthPostList.entrySeq().map( ([month, data]) => {
            const key = year + ' - ' + month

            return (
              <Accordion accordion={false} key={key}>
                <AccordionItem className="accordion__item">
                  <AccordionItemTitle >
                    <h5 className="u-position-relative">
                      {month}
                      <div className="accordion__arrow" role="presentation" />
                    </h5>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <LinksInMonth
                      postsFromMonth={data}
                      year={year}
                      month={month}
                    />
                  </AccordionItemBody>
                </AccordionItem>
              </Accordion>
            )
          })}
      </div>
    )
  }
}

export default LinkMonthsInYear
