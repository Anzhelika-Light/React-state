import { useEffect, useState } from "react";
import { getCharacters } from "../services/sw-characters-api";

const CharactersList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const data = await getCharacters();
        console.log("items", items);
        console.log(data);
        setItems((items) => [...items, ...data]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
      fetchCharacters();
    };
  }, []);

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  const elements = items.map((item) => <Link to="/:id">{item.name}</Link>);

  return (
    <>
      <h2>Characters List</h2>
      <ul>{elements}</ul>
      {loading && <p>...loading</p>}
      {error && <p>Failed to load info. Try again later, please.</p>}
      <button type="button" onClick={loadMore}>
        Load more
      </button>
    </>
  );
};

export default CharactersList;
