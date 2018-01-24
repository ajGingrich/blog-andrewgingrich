import React from 'react';
// import { client } from '@sendgrid/client'
//
// client.setApiKey(process.env.SENDGRID_KEY);
import axios from 'axios'

const sendgridKey = process.env.SENDGRID_KEY;
//const listId = '2842861';

class Subscription extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      hasSubscription: false,
    }

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  addRecipient(value) {
    const data = JSON.stringify([{ email: value }])
    const config = {
      headers: {
        'Authorization': 'Bearer ' + process.env.SENDGRID_KEY,
        'Content-Type': 'application/json'
      }
    }

    axios.post('https://api.sendgrid.com/v3/contactdb/recipients', data, config)
    .then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  }

  _handleChange(event) {
    this.setState({
      value: event.target.value,
      hasSubscription: false
    });
  }

  _handleSubmit(event) {
    event.preventDefault();
    const { value } = this.state

    if(value !== '') {
      this.addRecipient(value)
      this.setState({
        hasSubscription: true
      })
    }
  }

  render() {
    const { hasSubscription } = this.state

    if (!hasSubscription) {
      return (
        <div className="subscriptionContainer">
          <div className='searchForm'>
            <form onSubmit={this._handleSubmit}>
              <label>
                <input type="text" value={this.state.value} onChange={this._handleChange} placeholder="email..." />
              </label>
              <button className="btn btn-primary" type="submit" value="Submit">Subscribe</button>
            </form>
          </div>
        </div>
      )
    } else {
      return (
        <div className="subscriptionContainer">
          Thanks for subscribing!
        </div>
      )
    }
  }
}

export default Subscription
