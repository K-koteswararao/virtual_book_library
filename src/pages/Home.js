import React, { useEffect, useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';
import booksData from '../books.json';  // Assuming books.json contains book data

const Home = () => {
    const { setBooks } = useContext(LibraryContext);

    useEffect(() => {
        setBooks(booksData.books);
    }, [setBooks]);

    return (
        <div>
            <h1>Book Library</h1>
            <SearchBar />
            <BookList />
        </div>
    );
};

export default Home;
