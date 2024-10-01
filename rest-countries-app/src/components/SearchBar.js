
import React from 'react';

const SearchBar = ({ onSearch }) => {
    return (
        <input 
            type="text" 
            placeholder="Buscar país..." 
            onChange={(e) => onSearch(e.target.value)}
        />
    );
};

export default SearchBar;
