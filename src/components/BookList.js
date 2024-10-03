import React, { useContext } from 'react';
import BookCard from './BookCard';
import { LibraryContext } from '../context/LibraryContext';

const BookList = () => {
    const { books, setSelectedBook } = useContext(LibraryContext);

    return (
        <div className="book-list">
            {books.map(book => (
                <BookCard key={book.id} book={book} onClick={setSelectedBook} />
            ))}
        </div>
    );
};

export default BookList;
