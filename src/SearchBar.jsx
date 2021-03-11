import React from 'react';

class SearchBar extends React.Component {
  
  state = {
    search : ''
  }
  
  handleSearchInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      search: value
    })
    this.props.onSearchMeal(this.state.search)
  }

  render () {
    
    return (
      <input 
       key="random1"
       name="search"
       value={this.state.search}
       placeholder={"search Meal"}
       onChange={this.handleSearchInputChange}
  
      //  onChange={(e) => setKeyword(e.target.value)}
      />
    );

  }
}

export default SearchBar