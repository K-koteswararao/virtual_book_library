import React, { useState, useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext';

const SearchBar = () => {
    const { books, setBooks } = useContext(LibraryContext);
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        const filteredBooks = books.filter(book =>
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase()) ||
            book.genre.toLowerCase().includes(search.toLowerCase())
        );
        setBooks(filteredBooks);
    };

    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Search by title, author, or genre" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
