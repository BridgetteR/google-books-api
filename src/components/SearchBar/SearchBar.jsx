import styles from "./SearchBar.module.scss";

const SearchBar = () => {
    return (
        <div className={styles.SearchBar}>
            <input type="text" defaultValue="Search"></input>
        </div>
    );
};

export default SearchBar;
