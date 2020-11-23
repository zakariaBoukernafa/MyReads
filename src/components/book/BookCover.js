import React from 'react';
import PropTypes from 'prop-types';

const BookCover = props => {
    const { backgroundImage } = props;
    return (
        <div
            className="book-cover"
            style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${backgroundImage})`
        }}></div>
    );
};

BookCover.prototype = {
    backgroundImage: PropTypes.string,
};

BookCover.defaultProps = {
    backgroundImage: '',
};

export default BookCover;