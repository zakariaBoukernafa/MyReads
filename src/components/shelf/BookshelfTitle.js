import React from 'react';

import PropTypes from 'prop-types';

const BookshelfTitle = props => {
    const {title} = props;
    return (
        <h2 className="bookshelf-title">props.title</h2>

    );
}

BookshelfTitle.PropTypes = {
    title: PropTypes.string.isRequired
};

export default BookshelfTitle;