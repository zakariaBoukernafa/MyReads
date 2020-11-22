import React, { Component } from 'react';
import PropTypes from 'prop-types';

//handles the select options clicks and moves the book to the selected shelf
class BookshelfChanger extends Component {
    onShelfChange = event => {
        const {onShelfChange,book} = this.props;
        onShelfChange(book,event.target.value);
    }

    render() {
        const {shelf} = this.props;
        return (
            <div className="book-shelf-changer">
                <select onChange={this.onShelfChange} defaultValue={shelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )

    }

    static propTypes = {
        onShelfChange: PropTypes.func.isRequired,
        shelf: PropTypes.string.isRequired
    };
}
export default BookshelfChanger;
