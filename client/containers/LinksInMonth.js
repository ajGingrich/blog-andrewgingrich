import React from 'react'
import ReactDOM from 'react-dom'
import { Map, groupBy, map } from 'immutable';
import LinkDescription from './LinkDescription';
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
              <Accordion key={key}>
                <AccordionItem>
                  <AccordionItemTitle>
                    <h5 className="postTitle">{day}</h5>
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
