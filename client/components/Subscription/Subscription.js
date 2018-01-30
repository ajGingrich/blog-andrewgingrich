import React from 'react';

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
      fetch('/api/addcontact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: value,
        })
      }).then(res => console.log(res))
        .catch(error => console.log(error))
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
