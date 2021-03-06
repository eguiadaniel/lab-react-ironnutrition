import React from 'react';

const SearchBar = ({keyword}) => {
    
  return (
    <input 
     key="random1"
     value={keyword}
     placeholder={"search Meal"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar