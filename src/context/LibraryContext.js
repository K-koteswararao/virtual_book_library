import React, { createContext, useState } from 'react';

export const LibraryContext = createContext();

const LibraryProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [library, setLibrary] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

    const addToLibrary = (book) => {
        if (!library.find(b => b.id === book.id)) {
            setLibrary([...library, book]);
        }
    };

    const removeFromLibrary = (bookId) => {
        setLibrary(library.filter(book => book.id !== bookId));
    };

    return (
        <LibraryContext.Provider value={{ books, setBooks, library, addToLibrary, removeFromLibrary, selectedBook, setSelectedBook }}>
            {children}
        </LibraryContext.Provider>
    );
};

export default LibraryProvider;
