import React from 'react';
import { NavLink, Redirect } from 'react-router-dom'
import SearchResults from './SearchResults'

class SearchPage extends React.Component {

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

  componentDidMount() {
    const { value } = this.props

    this.setState({
      value: value
    })
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.props;
    const { value: nextValue } = nextProps;

    if (value !== nextValue) {
      this.setState({
        value: nextValue
      })
    }
  }

  componentWillUnmount() {
    this.setState({
      value: ''
    })
  }

  render() {
    const { value } = this.state
    return (
      <div>
        <div className="pageSearchForm">
          <div className='searchForm'>
            <form onSubmit={this._handleSubmit}>
              <label>
                <input type="text" value={value} onChange={this._handleChange} placeholder="Search..." />
              </label>
              <span onClick={this._handleSubmit}><i className="fa fa-search fa-lg" /></span>
            </form>
          </div>
        </div>
        {value && <SearchResults value={value}/>}
      </div>
    );
  }
}

export default SearchPage
