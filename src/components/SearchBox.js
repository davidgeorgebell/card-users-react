import React from 'react';
import styled from 'styled-components'

const SearchBox = ({ placeholder, handleChange }) => (

      <Search
      type='search' 
      placeholder={placeholder}
      onChange={handleChange}
         />
)

export default SearchBox;

const Search = styled.input`
    -webkit-appearance: none;
    border: none;
    outline: none;
    padding: 10px;
    width: 150px;
    line-height: 30px;
    margin-bottom: 30px;
  `;
  