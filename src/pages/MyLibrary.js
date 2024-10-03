import React, { useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext';
import BookCard from '../components/BookCard';

const MyLibrary = () => {
    const { library, removeFromLibrary } = useContext(LibraryContext);

    return (
        <div>
            <h1>My Library</h1>
            {library.length === 0 ? <p>No books added yet.</p> : (
                <div className="library-list">
                    {library.map(book => (
                        <div key={book.id}>
                            <BookCard book={book} />
                            <button onClick={() => removeFromLibrary(book.id)}>Remove</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyLibrary;
