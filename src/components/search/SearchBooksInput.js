import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchBooksInput extends Component {
    handleSearchChange = event => {
        const {handleSearchChange} = this.props;
        handleSearchChange(event.target.value);
    }
    render() {
        const { searchInputValue }= this.props;
        return (
            <div className="search-books-input-wrapper">

                <input
                    type="text"
                    placeholder="Search by title or author"
                    value={searchInputValue}
                    onChange={this.handleSearchChange}/>

            </div>
        );

    };

    static PropTypes = {
        handleSearchChange: PropTypes.func.isRequired,
        searchInputValue : PropTypes.string.isRequired,
        
    }
}



export default SearchBooksInput;