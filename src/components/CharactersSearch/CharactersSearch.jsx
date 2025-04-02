import { Component } from "react";
import axios from "axios";
import CharactersSearchForm from "./CharactersSearchForm/CharactersSearchForm";
import CharactersList from "./CharactersList/CharactersList";
import Modal from "../Modal";
import Character from "./Character/Character";
import { searchCharacters } from "../../services/characters-api";
import css from "./CharactersSearch.module.css";

class CharactersSearch extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
    search: "",
    showModal: false,
  };

  componentDidUpdate(_, prevState) {
    const { search } = this.state;
    if (search && prevState.search !== search) {
      this.searchCharacters();
    }
  }

  async searchCharacters() {
    const { search } = this.state;
    this.setState({ loading: true });

    try {
      const data = await searchCharacters(search);
      this.setState(({ items }) => ({ items: [...items, ...data.results] }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }

  onSearch = ({ search }) => {
    this.setState({ search });
  };

  deleteCharacter = (name) => {
    const { items } = this.state;
    this.setState({ items: items.filter((item) => item.name !== name) });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { items, loading, error, showModal } = this.state;
    const { onSearch, deleteCharacter, toggleModal } = this;
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
          <Modal onClose={this.toggleModal}>
            <Character items={items} onClose={this.toggleModal} />
          </Modal>
        )}
        {loading && <p>...loading</p>}
        {error && <p>Failed to get information. Try again later.</p>}
      </div>
    );
  }
}

export default CharactersSearch;
