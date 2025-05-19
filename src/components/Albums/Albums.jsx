import { Component, useEffect, useState } from "react";
import axios from "axios";
import { getAlbums } from "../../services/albums-api";
import css from "./Albums.module.css";

/*
Напишите компонент Albums, который отправляет запрос на https://jsonplaceholder.typicode.com/albums и выводит первые 10 альбомов на экран. Сделайте под ними кнопку "load more", при нажатии на которую выводятся следующие 10 альбомов.  */
const Albums = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await getAlbums(page);
        setItems((prevItems) => [...prevItems, ...data]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const elements = items.map(({ id, title }) => (
    <li key={id} className={css.item}>
      <p>{id}</p>
      {title}
    </li>
  ));

  return (
    <div>
      <h2 className={css.title}>Albums</h2>
      <ul className={css.list}>{elements}</ul>
      {loading && <p>...loading</p>}
      {error && <p>Failed to get albums. Try again later.</p>}
      {Boolean(items.length) && (
        <button type="button" onClick={loadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default Albums;
