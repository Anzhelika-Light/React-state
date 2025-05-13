import PropTypes from "prop-types";
import BookListItem from "./BookListItem";
import css from "./BookList.module.css";

const BookList = ({ books = [], deleteBook }) => {
  const elements = books.map((item) => (
    <BookListItem key={item.id} {...item} deleteBook={deleteBook} />
  ));
  return (
    <>
      <h4 className={css.title}>Book List</h4>
      <ol className={css.list}>{elements}</ol>
    </>
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
