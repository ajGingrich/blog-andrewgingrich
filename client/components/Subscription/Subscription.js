import React from 'react';
// import { client } from '@sendgrid/client'
//
// client.setApiKey(process.env.SENDGRID_KEY);

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

  // addContact(email) {
  //   const addEmail = {
  //     body: None,
  //     method: 'POST',
  //     url: '/v3/contactdb/lists/blog-andrewgingrich/recipients/' + email
  //   };
  //
  //   client.request(addEmail)
  //   .then(([response, body]) => {
  //     console.log(response.statusCode);
  //     console.log(body);
  //     this.setState({
  //       hasSubscription: true
  //     })
  //   })
  // }

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
      //this.addContact(email)
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
