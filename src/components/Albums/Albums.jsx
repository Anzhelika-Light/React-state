import { Component } from "react";
import axios from "axios";
import { getAlbums } from "../../services/albums-api";
import css from "./Albums.module.css";

/*
Напишите компонент Albums, который отправляет запрос на https://jsonplaceholder.typicode.com/albums и выводит первые 10 альбомов на экран. Сделайте под ними кнопку "load more", при нажатии на которую выводятся следующие 10 альбомов.  */
class Albums extends Component {
  state = {
    items: [],
    page: 1,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchPosts();
  }

  componentDidUpdate(_, prevState) {
    const { page } = this.state;
    if (prevState.page !== page) {
      this.fetchPosts();
    }
  }

  async fetchPosts() {
    const { page } = this.state;
    this.setState({ isLoading: true });

    try {
      const data = await getAlbums(page);
      this.setState(({ items }) => ({ items: [...items, ...data] }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  //   fetchPosts() {
  //     const { page } = this.state;
  //     this.setState({ isLoading: true });
  //     axios
  //       .get(
  //         `https://jsonplaceholder.typicode.com/albums?_page=${page}&_limit=10`
  //       )
  //       .then(({ data }) =>
  //         this.setState(({ items }) => ({ items: [...items, ...data] }))
  //       )
  //       .catch((error) => {
  //         this.setState({ error: error.message });
  //       })
  //       .finally(this.setState({ isLoading: false }));
  //   }

  loadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  render() {
    const { items, isLoading, error } = this.state;
    const { loadMore } = this;

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
        {isLoading && <p>...loading</p>}
        {error && <p>Failed to get albums. Try again later.</p>}
        {Boolean(items.length) && (
          <button type="button" onClick={loadMore}>
            Load more
          </button>
        )}
      </div>
    );
  }
}

export default Albums;
