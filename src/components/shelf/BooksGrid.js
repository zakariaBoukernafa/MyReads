import React from 'react';
import Book from '../book/Book';
import PropTypes from 'prop-types';

const BooksGrid = props => {
    const {books,onShelfChange} = props;

    return (
        <ol className="books-grid">
            {books.map(book => (<li key={book.id}><Book book={book} onShelfChange={onShelfChange}/></li>))}

        </ol>
    );

}

BooksGrid.PropTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange : PropTypes.func.isRequired
};

export default BooksGrid;