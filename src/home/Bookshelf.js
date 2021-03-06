import PropTypes from 'prop-types';
import React from 'react';
import BookGrid from '../common/BookGrid';

function Bookshelf( props ) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{ props.displayName }</h2>
            <div className="bookshelf-books">
                <BookGrid
                    books={ props.books }
                    updateShelf={ props.updateShelf }
                />
            </div>
        </div>
    );
}

Bookshelf.propTypes = {
    books: PropTypes.array.isRequired,
    displayName: PropTypes.string.isRequired,
    updateShelf: PropTypes.func.isRequired
};

export default Bookshelf;
