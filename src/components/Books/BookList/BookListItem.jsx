import { memo } from "react";
import css from "./BookList.module.css";

const BookListItem = ({ id, title, author, deleteBook }) => {
  return (
    <li className={css.item}>
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
  );
};

export default memo(BookListItem);
