import React, {Component} from 'react';

export default class SearchAndFilter extends Component {
  constructor () {
    super()
    this.state = {
      searchInput: ''
    }
  }

  render () {
    return (
      <div className='search-wrapper'>
        <form onSubmit={(e) => {e.preventDefault}}>
          <input value={this.state.searchInput} onChange={(e) => this.setState({searchInput: e.target.value})}/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
