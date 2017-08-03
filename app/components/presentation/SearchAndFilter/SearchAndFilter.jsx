import React, { Component } from 'react';

export default class SearchAndFilter extends Component {
  constructor() {
    super();
    this.state = {
      type: '',
      searchInput: '',
    };
  }

  handleSearch(type, input) {
    const dataArray = (type, input) => {
	    return this.props.data.filter((person) => {
        return person[type].indexOf(input) > -1
      });
    }
    this.props.handleSearch(dataArray(type, input));
    this.setState({
      searchInput: '',
    });
  }

  render() {
    return (
      <div className='search-wrapper'>
        <form onSubmit={(e) => { e.preventDefault(); }} >
          <h1 className='search-instructions'>First choose a category and then enter your search criteria below</h1>
          <input className='search-input'
                 placeholder='Enter search query here...'
                 value={this.state.searchInput}
                 onChange={ e => this.setState({ searchInput: e.target.value })} />
          <button className='submit'
                  onClick={ () => { this.handleSearch(this.state.type, this.state.searchInput); }}>
                  Submit
          </button>
          <select className='category-dropdown'
                  onChange={(e) => this.setState({type: e.target.value})}>
            <option>Select a category</option>
            <option>name</option>
            <option>age</option>
            <option>sex</option>
            <option>race</option>
            <option>month</option>
            <option>state</option>
            <option>cause</option>
            <option>armed</option>
          </select>
        </form>
      </div>
    );
  }
}
