import React from 'react';
import axios from 'axios';
//import handleAxiosError from 'helpers/handleAxiosError'

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
    const email = value.slice(0);
    const data = JSON.stringify({ 'email': email })
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    axios.post('/api/addcontact', data, config)
      .then(response => {
        console.log(response, 'response')
        this.setState({
          hasSubscription: true
        })
        return Promise.resolve(response)
      }).catch(error => {
          handleAxiosError(error)
        })
  }

  _handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  _handleSubmit(event) {
    event.preventDefault();
    const { value } = this.state

    if(value !== '') {
      this.addRecipient(value)
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
