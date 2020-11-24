import React from 'react';
import BookTop from './BookTop';
import BookTitle from './BookTitle';
import BookAuthors from './BookAuthors'
import PropTypes from 'prop-types';

const Book = props => {
    const {book, onShelfChange} = props;
    const backgroundImage = book.imageLinks && book.imageLinks.thumbnail
        ? book.imageLinks.thumbnail
        : '';
    return (
        <div  className="book">
            <BookTop
                backgroundImage={backgroundImage}
                book ={book}
                onShelfChange={onShelfChange}
                shelf={book.shelf}/>
            <BookTitle bookTitle={book.title}/>
            <BookAuthors bookAuthors={book.authors}/>
        </div>
    );
};


Book.prototype = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired
};

export default Book;