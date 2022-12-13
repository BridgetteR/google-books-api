import SearchBar from "../../components/SearchBar/SearchBar";
import SearchButton from "../../components/SearchButton/SearchButton";
import styles from "./Header.module.scss";

const Header = ({ searchBooks, setSearchBooks }) => {
    return (
        <div className={styles.Header}>
            <h1>Google Books Search</h1>
            <div className={styles.Header__Search}>
                <SearchBar
                    setSearchBooks={setSearchBooks}
                    searchBooks={searchBooks}
                />
            </div>
        </div>
    );
};

export default Header;
