import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getCharacters } from "../services/sw-characters-api";

const CharactersList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name") ?? "";

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const data = await getCharacters();
        // const dataWithId = data.map((item) => ({
        //   ...item,
        // id: item.url.slice(30),
        // }));
        // console.log(dataWithId);
        // setItems([...dataWithId]);
        setItems([...data]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, []);

  const updateQueryString = (e) => {
    const characterIdValue = e.target.value;
    if (characterIdValue === "") {
      return setSearchParams({});
    }
    setSearchParams({ name: e.target.value });
  };

  const visibleCharacters = items.filter((item) =>
    item.name.toLowerCase().includes(name.toLowerCase())
  );

  const elements = visibleCharacters.map((item) => (
    <li key={item.name}>
      <Link to={`${item.url.slice(30)}`}>{item.name}</Link>
    </li>
  ));

  return (
    <>
      <h2>Characters List</h2>
      <input type="text" value={name} onChange={updateQueryString} />
      <ol>{elements}</ol>
      {loading && <p>...loading</p>}
      {error && <p>Failed to load info. Try again later, please.</p>}
    </>
  );
};

export default CharactersList;
