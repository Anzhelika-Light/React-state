import PropTypes from "prop-types";
import css from "./BookList.module.css";

const BookList = ({ books = [], deleteBook }) => {
  const elements = books.map(({ id, title, author }) => (
    <li key={id} className={css.item}>
      {title}. Author: {author}.
      <span
        type="button"
        className={css.remove}
        onClick={() => {
          deleteBook(id);
        }}
      >
        x
      </span>
    </li>
  ));
  return (
    <ol className={css.list}>
      <h4 className={css.title}>Book List</h4>
      {elements}
    </ol>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ),
};

export default BookList;
