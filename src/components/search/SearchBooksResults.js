import React from 'react';
import BooksGrid from '../shelf/BooksGrid';
import PropTypes from 'prop-types';


const SearchBooksResults = props => {
    const {books,onShelfChange} = props;
    return (
        <div className="search-books-results">
        <BooksGrid books ={books} onShelfChange = {onShelfChange} />
    </div>
    );
};


SearchBooksResults.prototype = {
    books: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired,
};


export default SearchBooksResults;