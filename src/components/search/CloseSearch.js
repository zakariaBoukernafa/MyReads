import React, {Component} from 'react';
import Proptypes from 'prop-types'
import {Link} from 'react-router-dom';

class CloseSearch extends Component {
    onSearchButtonClose = () => {
        const {onSearchButtonClose} = this.props;
        onSearchButtonClose();
    }
    render() {
        return (
            <Link to='/'>
                <button className="close-search" onClick={this.onSearchButtonClose}>Close</button>
            </Link>
        );
    }

    static Proptypes = {
        onSearchButtonClose: Proptypes.func.isRequired
    }
};

export default CloseSearch;