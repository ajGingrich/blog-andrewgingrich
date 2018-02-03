import React from 'react';
import axios from 'axios';
import Subscription from './Subscription'

class SubscriptionWrapper extends React.Component {

  render() {
    return (
      <div className='subscriptionWrapper'>
        <div className="sidebarCenterWrapper">
          <h4>Subscribe</h4>
        </div>
        <div className="subsciptionText">
          Receive email updates whenever a new article is posted.
        </div>
        <Subscription />
      </div>
    )
  }
}

export default SubscriptionWrapper
