import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import PageHeading from "../components/PageHeading/PageHeading";
import * as bookShelfAPI from "../services/bookshelf-api";

export default function BookDetailsView() {
  const location = useLocation();
  const { slug } = useParams();

  // 1. Безпечне отримання ID (додаємо перевірку, щоб не "впало", якщо slug порожній)
  const bookId = slug ? slug.match(/[a-z0-9]+$/)[0] : null;

  const [book, setBook] = useState(null);

  useEffect(() => {
    if (!bookId) return;
    bookShelfAPI.fetchBookById(bookId).then(setBook);
  }, [bookId]);

  // 2. Обчислюємо шлях назад (враховуючи зміни в v6)
  // Ми передавали state={{ from: location }} у BooksView
  const backLinkHref = location.state?.from ?? "/books";

  return (
    <>
      <PageHeading text={book ? `Книга ${book.title}` : "Завантаження..."} />

      {book && (
        <>
          {/* 3. Кнопка назад тепер простіша */}
          <Link to={backLinkHref}>Назад до списку</Link>
          <hr />

          <img src={book.imgUrl} alt={book.title} />
          <h2>{book.title}</h2>

          {/* 4. ЗАХИСТ: Додаємо опціональний ланцюжок ?.name */}
          <p>Автор: {book.author?.name || "Автор невідомий"}</p>

          <p>{book.descr}</p>
        </>
      )}
    </>
  );
}
