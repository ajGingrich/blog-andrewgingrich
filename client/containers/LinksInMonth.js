import React from 'react'
import ReactDOM from 'react-dom'
import { Map, groupBy, map } from 'immutable';
import LinkDescription from './LinkDescription';
import { getOrdinalIndicator, getSingleDigitDate } from '../helpers/dates'
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

class LinksInMonth extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { month, postsFromMonth, year} = this.props
    const linksList = postsFromMonth.groupBy(item => item.get('published').slice(8, 10))

    return (
      <div className="monthPostList">
          {linksList.entrySeq().map( ([day, data]) => {
            const key = year + ' - ' + month + ' - ' + day

            return (
              <Accordion accordion={false} key={key}>
                <AccordionItem className="accordion__item" expanded={true}>
                  <AccordionItemTitle>
                    <h5 className="u-position-relative">
                      {getSingleDigitDate(day) + getOrdinalIndicator(day)}
                      <div className="accordion__arrow" role="presentation" />
                    </h5>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <LinkDescription
                      LinksInDay={data}
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

export default LinksInMonth
