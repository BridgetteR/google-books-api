import styles from "./App.module.scss";
import BookList from "./containers/BookList/BookList";
import Header from "./containers/Header/Header";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import DefaultLayout from "./containers/DefaultLayout/DefaultLayout";

function App() {
    const [searchBooks, setSearchBooks] = useState("");

    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        const promises = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${searchBooks}`
        );
        const responses = await promises.json();
        // console.log(responses.items);

        setBooks(responses.items);
    };

    useEffect(() => {
        getBooks();
    }, [searchBooks]);

    console.log(books);

    return (
        <div className={styles.App}>
            <Header setSearchBooks={setSearchBooks} searchBooks={searchBooks} />
            {/* <Router>
                <Routes>
                    <Route path="/" element={<DefaultLayout />} />
                    <Route path="/books" element={<BookList books={books} />} />
                </Routes>
            </Router> */}
            <DefaultLayout />
            <BookList books={books} />
        </div>
    );
}

export default App;
