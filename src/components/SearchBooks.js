import React  from 'react';
import SearchBooksResults from './search/SearchBooksResults';
import SearchBooksBar from './search/SearchBooksBar';
import Proptypes from 'prop-types';
const SearchBooks =props => {

  
        const { books, onShelfChange, handleSearchChange,onSearchButtonClose } = props;
        return (
            <div className="search-books">
                <SearchBooksBar handleSearchChange={handleSearchChange} onSearchButtonClose={onSearchButtonClose}/>
                <SearchBooksResults books={books} onShelfChange={onShelfChange}/>
            </div>
        );
  

    
}

SearchBooks.prototype = {
    books: Proptypes.array.isRequired,
    onShelfChange: Proptypes.func.isRequired,
    handleSearchChange : Proptypes.func.isRequired,
}

export default SearchBooks;