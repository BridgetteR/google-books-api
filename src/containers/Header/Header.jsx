import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <div className={styles.Header}>
            <h1>Google Books Search</h1>
            <SearchBar />
        </div>
    );
};

export default Header;
