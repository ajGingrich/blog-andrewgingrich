import React from 'react';
import { NavLink, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { action as toggleMenu } from 'redux-burger-menu'
import store from 'store'

function browserSelector({browser}) {
  return {browser}
}

@connect(browserSelector)
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

  _handleCloseMenu() {
    const isOpen = false
    store.dispatch(toggleMenu(isOpen));
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
    const { browser, history } = this.props
    const isBrowserLessThanLarge = browser.lessThan.large

    return (
      <div className='searchForm'>
        <form onSubmit={this._handleSubmit}>
          <label className="navbarSearchLabel">
            <input type="text" value={value} onChange={this._handleChange} placeholder="Search..." />
          </label>
          {isBrowserLessThanLarge &&
            <span className='mobileSearchButton' onClick={this._handleSubmit && this._handleCloseMenu}>
              <button className='btn btn-primary'>Go</button>
            </span>
          }
          {!isBrowserLessThanLarge &&
            <span onClick={this._handleSubmit} className ="tooltip-bottom" data-tooltip="Search">
              <i className="fa fa-search fa-lg" />
            </span>
          }
        </form>
      </div>
    );
  }
}

export default withRouter(NavbarSearch)
