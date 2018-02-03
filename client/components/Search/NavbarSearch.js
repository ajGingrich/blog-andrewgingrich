import React from 'react';
import { NavLink, Redirect } from 'react-router-dom'

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
      this.setState({
        submitted: true
      })
    }
  }

  componentWillUnmount() {
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <div className='searchForm'>
        <form onSubmit={this._handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this._handleChange} placeholder="Search..." />
          </label>
          <span onClick={this._handleSubmit}><i className="fa fa-search fa-lg" /></span>
        </form>
        {this.state.submitted &&
          <Redirect to={`/search/${this.state.value}`} />}
      </div>
    );
  }
}

export default NavbarSearch
