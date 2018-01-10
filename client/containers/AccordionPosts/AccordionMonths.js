import React from 'react'
import ReactDOM from 'react-dom'
import { Map, fromJS, map } from 'immutable'
import AccordionDays from './AccordionDays'
import { getNonArrayMonth, getSingleDigitDate } from '../../helpers/dates'
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

class AccordionMonths extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { year, postsFromYear } = this.props
    const monthPostList = postsFromYear.groupBy(item => item.get('published').slice(5, 7))
    const date = new Date();
    const currentMonth = (date.getMonth() + 1).toString();

    return (
      <div className="monthPostList">
          {monthPostList.entrySeq().map( ([month, data]) => {
            const key = year + ' - ' + month

            return (
              <Accordion accordion={false} key={key}>
                <AccordionItem className="accordion__item" expanded={getSingleDigitDate(month) === currentMonth}>
                  <AccordionItemTitle>
                    <h5 className="u-position-relative">
                      {getNonArrayMonth(month)}
                      <div className="accordion__arrow" role="presentation" />
                    </h5>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <AccordionDays
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

export default AccordionMonths
