import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import slugify from "slugify";
import { useSelector, useDispatch } from "react-redux";
import { booksOperations, booksSelectors } from "../redux/books";
import PageHeading from "../components/PageHeading/PageHeading";

const makeSlug = (string) => slugify(string, { lower: true });

export default function BooksView() {
  const location = useLocation();

  const dispatch = useDispatch();
  const books = useSelector(booksSelectors.getBooks);

  useEffect(() => {
    dispatch(booksOperations.fetchBooks());
  }, [dispatch]);

  return (
    <>
      <PageHeading text="Books" />

      {books && books.length > 0 && (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <Link
                to={makeSlug(`${book.title} ${book.id}`)}
                state={{ from: location }}
              >
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
