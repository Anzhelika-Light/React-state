import { useState, useEffect } from "react";
import CharactersSearchForm from "./CharactersSearchForm/CharactersSearchForm";
import CharactersList from "./CharactersList/CharactersList";
import Modal from "../Modal";
import Character from "./Character/Character";
import { searchCharacters } from "../../services/characters-api";
import css from "./CharactersSearch.module.css";

const CharactersSearch = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const showCharacters = async () => {
      try {
        setLoading(true);
        const data = await searchCharacters(search);
        setItems(data.results);
        // setItems((prevItems) => [...prevItems, ...data.results]);
      } catch (error) {
        setError;
      } finally {
        setLoading(false);
      }
    };
    if (search) {
      showCharacters();
    }
  }, [search]);

  const onSearch = (search) => {
    setSearch(search);
  };

  const deleteCharacter = (name) => {
    setItems((prevItems) => prevItems.filter((item) => item.name !== name));
  };

  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };

  const isCharacters = Boolean(items.length);

  return (
    <div>
      <CharactersSearchForm onSubmit={onSearch} />
      {isCharacters && (
        <CharactersList
          items={items}
          onDelete={deleteCharacter}
          onOpen={toggleModal}
        />
      )}
      {showModal && (
        <Modal onClose={toggleModal}>
          <Character items={items} onClose={toggleModal} />
        </Modal>
      )}
      {loading && <p>...loading</p>}
      {error && <p>Failed to get information. Try again later.</p>}
    </div>
  );
};

export default CharactersSearch;
