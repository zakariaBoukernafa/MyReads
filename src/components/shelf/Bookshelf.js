import React from 'react';
import BookshelfTitle from './BookshelfTitle';
import BookshelfBooks from './BookshelfBooks';
import PropTypes from 'prop-types';

const Bookshelf = props => {
    const { title, books, onShelfChange } = props;
    return (

        <div className="bookshelf">
            <BookshelfTitle title={title}/>
            <BookshelfBooks books={books} onShelfChange={onShelfChange}/>
        </div>

    );

}

Bookshelf.PropTypes = {
    title : PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onShelfChange : PropTypes.func.isRequired
};
export default Bookshelf;