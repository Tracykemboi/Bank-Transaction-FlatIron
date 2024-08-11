// src/SearchBar.js
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
// function to handle changes in the input field
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  }; const handleChange = (e) => {
 

  return (
    <input
      type="text"
      placeholder="Search transactions..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
}

export default SearchBar;


