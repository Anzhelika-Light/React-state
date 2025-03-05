import { Component } from "react";
import PropTypes from "prop-types";
import { BiSolidTrash } from "react-icons/bi";
import css from "./CharactersList.module.css";

class CharactersList extends Component {
  static defaultProps = {
    characters: [],
  };

  static PropTypes = PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      actor: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  );

  state = {
    characters: [...this.props.characters],
  };

  removeCharacter = (id) => {
    this.setState((prevState) => ({
      characters: prevState.characters.filter((item) => item.id !== id),
    }));
  };

  render() {
    const { characters } = this.state;
    const elements = characters.map(({ id, actor, character }) => (
      <li className={css.item} key={id}>
        <span>
          <span className={css.bold}>{actor}: </span>
          {character}
        </span>
        <span>
          <BiSolidTrash
            className={css.icon}
            onClick={() => {
              this.removeCharacter(id);
            }}
          />
        </span>
      </li>
    ));
    return <ul>{elements}</ul>;
  }
}

export default CharactersList;
