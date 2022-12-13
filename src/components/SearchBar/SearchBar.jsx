import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ searchBooks, setSearchBooks }) => {
    // const navigate = useNavigate();
    const [newString, setNewString] = useState("");

    const handleChange = (event) => {
        setNewString(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await setSearchBooks(newString);
        // navigate("/books");
    };

    return (
        <form onSubmit={handleSubmit} className={styles.SearchBar}>
            <input
                className={styles.SearchBar__box}
                type="text"
                name="search"
                placeholder="Search"
                onChange={handleChange}
            />
            <input type="submit" className={styles.SearchBar__btn} value="" />
        </form>
    );
};

export default SearchBar;
