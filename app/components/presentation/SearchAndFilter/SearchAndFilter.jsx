import React, { Component } from 'react';

export default class SearchAndFilter extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
    };
  }

  handleSearch(name) {
    this.props.handleSearch(name);
    this.setState({
      searchInput: '',
    });
  }


  render() {
    return (
      <div className='search-wrapper'>
        <form onSubmit={(e) => { e.preventDefault(); }} >
          <input className='name-input'
                 placeholder='Enter first and last name here'
                 value={this.state.searchInput}
                 onChange={ e => this.setState({ searchInput: e.target.value })} />
          <button className='submit'
                  onClick={ () => { this.handleSearch(this.state.searchInput); }}>Submit</button>
        </form>
      </div>
    );
  }
}
