import { Component } from "react";
import PropTypes from "prop-types";
import css from "./CharactersSearchForm.module.css";
import { nanoid } from "nanoid";

class CharactersSearchForm extends Component {
  static defaulProps = {
    onSubmit: () => {},
  };

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    search: "",
  };

  searchId = nanoid();

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state);
    this.reset();
  };

  reset() {
    this.setState({ search: "" });
  }

  render() {
    const { search } = this.state;
    const { handleChange, handleSubmit, searchId } = this;

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor={searchId}>Enter search query</label>
        <input
          type="text"
          name="search"
          id={searchId}
          value={search}
          required
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default CharactersSearchForm;
