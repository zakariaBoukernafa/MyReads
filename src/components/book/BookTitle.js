import React from 'react';
import PropTypes from 'prop-types';

const BookTitle = props => {
    const {bookTitle} = props;
    return (
        <div className="book-title">{bookTitle}</div>

    );
};


BookTitle.prototype = {
    bookTitle: PropTypes.string,
};

BookTitle.defaultProps = {
    bookTitle: '',
};

export default BookTitle;