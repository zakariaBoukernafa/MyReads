import React from 'react';
import PropTypes from 'prop-types';

const BookAuthors = props => {
    const {bookAuthors} = props;
    return (
        bookAuthors.map((author, index) => (
            <div key={index} className="book-authors">{author}</div>
        ))

    );
};


BookAuthors.prototype = {
    bookAuthors: PropTypes.string,
};

BookAuthors.defaultProps = {
    bookAuthors: [],
};

export default BookAuthors;