import React from 'react';
import BooksGrid from './BooksGrid';
import PropTypes from 'prop-types';

const BookshelfBooks = props => {
    const {books, onShelfChange} = props;

    return (
        <div className="bookshelf-books">
            <BooksGrid books={books} onShelfChange={onShelfChange}/>
        </div>

    );
};


BookshelfBooks.prototype = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
};

export default BookshelfBooks;