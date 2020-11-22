import React from 'react';
import ListBooksTitle from './ListBooksTitle';
import ListBooksContent from '../ListBooksContent';
import OpenSearch from './OpenSearch';
import PropTypes from 'prop-types';

const ListBooks = props => {
    const {title, onShelfChange, books} = props;

    return (
        <div className="list-books">
            <ListBooksTitle title={title}/>
            <ListBooksContent books={books} onShelfChange={onShelfChange}/>
            <OpenSearch buttonText={'Add a Book'}/>
        </div>

    );
};


ListBooks.prototype = {
    title: PropTypes.string.isRequired,
    onShelfChange: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
};

export default ListBooks;