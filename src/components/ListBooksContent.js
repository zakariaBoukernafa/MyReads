import React from 'react';
import Bookshelf from './shelf/Bookshelf';
import PropTypes from 'prop-types';

const ListBooksContent = props => {
    const {books, onShelfChange} = props;

    const shelfs = [
        {
            title: 'Currently Reading',
            category: 'currentlyReading'
        }, {
            title: 'Want to Read',
            category: 'wantToRead'
        }, {
            title: 'Read',
            category: 'read'
        }
    ];
    return (

        <div className="list-books-content">
            {shelfs.map(shelf => (
                <div>
                    <Bookshelf
                        title={shelf.title}
                        books={books.filter(book => book.shelf === shelf.category)}
                        onShelfChange={onShelfChange}/>
                </div>
            ))}

        </div>

    );

}

Bookshelf.PropTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
};
export default ListBooksContent;