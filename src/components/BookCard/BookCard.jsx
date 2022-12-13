import BookList from "../../containers/BookList/BookList";
import styles from "./BookCard.module.scss";

const BookCard = ({ book }) => {
    return (
        <div className={styles.BookCard}>
            <img
                className={styles.BookCard__img}
                src={
                    book.volumeInfo.imageLinks
                        ? book.volumeInfo.imageLinks.thumbnail
                        : "https://picsum.photos/150/200"
                }
            />

            <h2>{book.volumeInfo.title}</h2>
            <h3>
                {book.volumeInfo.authors
                    ? book.volumeInfo.authors.join(", ")
                    : "No Author Given"}
            </h3>
            <p>
                {/* {book.searchInfo
                    ? book.searchInfo.textSnippet
                    : book.volumeInfo.description} */}
                {book.volumeInfo.description}
            </p>
        </div>
    );
};

export default BookCard;
