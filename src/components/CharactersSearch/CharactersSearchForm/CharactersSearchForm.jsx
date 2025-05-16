import { useState, useRef } from "react";
import PropTypes from "prop-types";
import css from "./CharactersSearchForm.module.css";
import { nanoid } from "nanoid";

const CharactersSearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  const searchId = useRef(nanoid());

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(search);
    setSearch("");
  };

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
};

CharactersSearchForm.defaulProps = {
  onSubmit: () => {},
};

CharactersSearchForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default CharactersSearchForm;
