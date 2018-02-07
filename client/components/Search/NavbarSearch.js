import React from 'react';
import { NavLink, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'

class NavbarSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      submitted: false,
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    this.setState({
      value: event.target.value,
      submitted: false
    });
  }

  _handleSubmit(event) {
    event.preventDefault();

    if(this.state.value !== '') {
      this._handleRedirect()

      this.setState({
        submitted: true,
        value: ''
      })
    }
  }

  _handleRedirect() {
    const { history } = this.props
    const { value } = this.state

    history.push(`/search/${value}`)
  }

  render() {
    const { submitted, value } = this.state
    const { history } = this.props

    return (
      <div className='searchForm'>
        <form onSubmit={this._handleSubmit}>
          <label>
            <input type="text" value={value} onChange={this._handleChange} placeholder="Search..." />
          </label>
          <span onClick={this._handleSubmit}><i className="fa fa-search fa-lg" /></span>
        </form>
      </div>
    );
  }
}

export default withRouter(NavbarSearch)
