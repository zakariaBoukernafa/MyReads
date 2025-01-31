import React from 'react';
import SearchBooksInput from './SearchBooksInput';
import CloseSearch from './CloseSearch';
import Proptypes from 'prop-types';
const SearchBooksBar = props => {

    const {handleSearchChange ,onSearchButtonClose} = props;
    return (
        <div className="search-books-bar">
            <CloseSearch onSearchButtonClose={onSearchButtonClose}/>
            <SearchBooksInput handleSearchChange={handleSearchChange}/>
        </div>
    );
};

SearchBooksBar.prototype = {
    handleSearchChange: Proptypes.func.isRequired
}

export default SearchBooksBar;