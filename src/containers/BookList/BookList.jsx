import BookCard from "../../components/BookCard/BookCard";
import styles from "./BookList.module.scss";

const BookList = ({ books }) => {
    return (
        <div className={styles.BookList}>
            {books &&
                books.map((book) => {
                    return <BookCard key={book.id} book={book} />;
                })}
        </div>
    );
};

export default BookList;
