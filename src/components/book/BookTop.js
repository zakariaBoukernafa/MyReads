import React from 'react';
import BookCover from './BookCover';
import BookShelfChanger from '../shelf/BookshelfChanger';
import PropTypes from 'prop-types';
import BookAuthors from './BookAuthors';

const bookTop = props => {
    const { backgroundImage, onShelfChange, shelf ,book} = props;
    return (
        <div className="book-top">
            <BookCover backgroundImage={backgroundImage}/>
            <BookShelfChanger onShelfChange={onShelfChange} shelf={shelf} book={book}/>
        </div>
    );
};


bookTop.prototype = {
    backgroundImage: PropTypes.string.isRequired,
    onShelfChange: PropTypes.func.isRequired,
    shelf: PropTypes.string.isRequired,
};

bookTop.defaultProps = {
    backgroundImage: '',
    
};

export default bookTop;