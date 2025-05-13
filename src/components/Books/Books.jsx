import { useState, useEffect, useCallback } from "react";
import { nanoid } from "nanoid";
import FormAddBook from "./FormAddBook";
import BookList from "./BookList/BookList";
import useLocalStorage from "../../hooks/useLocalStorageBL";
import css from "./Books.module.css";

const getFilteredBooks = (filter, books) => {
  // Якщо властивість фільтр порожня, то просто повертаємо усі книги, не проганяючи їх через фільтр
  if (!filter) {
    return books;
  }
  const normalizedFilter = filter.toLowerCase();
  return books.filter(
    ({ title, author }) =>
      title.toLowerCase().includes(normalizedFilter) ||
      author.toLowerCase().includes(normalizedFilter)
  );
};

const Books = () => {
  // const [books, setBooks] = useState(() => {
  //   try {
  //     const value = JSON.parse(localStorage.getItem("books"));
  //     return value || [];
  //   } catch (error) {
  //     return [];
  //   }
  // });

  // Using custom hook useLocalStorage
  const [books, setBooks] = useLocalStorage({ key: "books", initialState: [] });

  const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("books", JSON.stringify(books));
  // }, [books]);

  const isDublicate = ({ title, author }) => {
    const normalizedTitle = title.toLowerCase();
    const normalizedAuthor = author.toLowerCase();
    const result = books.find(
      (book) =>
        book.title.toLowerCase() === normalizedTitle &&
        book.author.toLowerCase() === normalizedAuthor
    );
    return Boolean(result);
  };

  const addBook = (data) => {
    if (isDublicate(data)) {
      return alert(
        `${data.title}. ${data.author} is already added to the list.`
      );
    }
    const newBook = {
      id: nanoid(),
      ...data,
    };

    setBooks((books) => [...books, newBook]);
  };

  const deleteBook = useCallback(
    (bookId) => {
      setBooks((books) => {
        const newBooks = books.filter((book) => book.id !== bookId);
        return newBooks;
      });
    },
    [setBooks]
  );

  const handleFilter = useCallback(
    ({ target }) => {
      setFilter(target.value);
    },
    [setFilter]
  );

  const filteredBooks = getFilteredBooks(filter, books);

  return (
    <div className={css.container}>
      <h2 className={css.title}>My books</h2>
      <div className={css.row}>
        <div className={css.column}>
          <FormAddBook onSubmit={addBook} />
        </div>
        <div className={css.column}>
          <input
            type="text"
            name="filter"
            onChange={handleFilter}
            value={filter}
            className={css.filter}
            placeholder="Filter"
          />
          <BookList books={filteredBooks} deleteBook={deleteBook} />
        </div>
      </div>
    </div>
  );
};

// class Books extends Component {
//   state = {
//     books: [],
//     filter: "",
//   };

//   componentDidMount() {
//     const books = JSON.parse(localStorage.getItem("books"));
//     if (books?.length) {
//       this.setState({ books });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     const { books } = this.state;
//     if (prevState.books.length !== books.length) {
//       localStorage.setItem("books", JSON.stringify(books));
//     }
//   }

//   addBook = (data) => {
//     if (this.isDublicate(data)) {
//       return alert(
//         `${data.title}. ${data.author} is already added to the list.`
//       );
//     }
//     const newBook = {
//       id: nanoid(),
//       ...data,
//     };

//     this.setState(({ books }) => ({
//       books: [...books, newBook],
//     }));
//   };

//   isDublicate({ title, author }) {
//     const { books } = this.state;
//     const normalizedTitle = title.toLowerCase();
//     const normalizedAuthor = author.toLowerCase();
//     const result = books.find(
//       (book) =>
//         book.title.toLowerCase() === normalizedTitle &&
//         book.author.toLowerCase() === normalizedAuthor
//     );
//     return result;
//   }

//   deleteBook = (bookId) => {
//     this.setState(({ books }) => {
//       const newBooks = books.filter((book) => book.id !== bookId);
//       return { books: newBooks };
//     });
//   };

//   getFilteredBooks() {
//     const { books, filter } = this.state;
//     // Якщо властивість фільтр порожня, то просто повертаємо усі книги, не проганяючи їх через фільтр
//     if (!filter) {
//       return books;
//     }
//     const normalizedFilter = filter.toLowerCase();
//     return books.filter(
//       ({ title, author }) =>
//         title.toLowerCase().includes(normalizedFilter) ||
//         author.toLowerCase().includes(normalizedFilter)
//     );
//   }

//   handleFilter = ({ target }) => {
//     const { name, value } = target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   render() {
//     const { filter } = this.state;
//     const { addBook, deleteBook, handleFilter } = this;
//     const filteredBooks = this.getFilteredBooks();

//     return (
//       <div className={css.container}>
//         <h2 className={css.title}>My books</h2>
//         <div className={css.row}>
//           <div className={css.column}>
//             <FormAddBook onSubmit={addBook} />
//           </div>
//           <div className={css.column}>
//             <input
//               type="text"
//               name="filter"
//               onChange={handleFilter}
//               value={filter}
//               className={css.filter}
//               placeholder="Filter"
//             />
//             <BookList books={filteredBooks} deleteBook={deleteBook} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default Books;
