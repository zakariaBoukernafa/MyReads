import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const OpenSearch = props => {
    const {buttonText} = props;

    return (
        <div className="open-search">
        <Link to='/list-books'>
                <button>${buttonText}</button>
        </Link>
    </div>

    );
};


OpenSearch.prototype = {
    buttonText: PropTypes.string.isRequired,
};

export default OpenSearch;