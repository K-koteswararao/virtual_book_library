import React, { useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
    const { books, addToLibrary } = useContext(LibraryContext);
    const { id } = useParams();
    const book = books.find(book => book.id === parseInt(id));

    return (
        <div>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Rating: {book.rating}</p>
            <p>Description: {book.description}</p>
            <p>Publication Year: {book.publication_year}</p>
            <button onClick={() => addToLibrary(book)}>Add to My Library</button>
        </div>
    );
};

export default BookDetails;
