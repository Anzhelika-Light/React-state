import { Component } from "react";
import PropTypes from "prop-types";
import css from "./styles.module.css";

class Searchbar extends Component {
  static defaultProps = {
    onSubmit: () => {},
  };
  static propTypes = {
    onSubmit: PropTypes.func,
  };
  state = {
    search: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state);
    this.reset();
  };

  reset() {
    this.setState({
      search: "",
    });
  }

  render() {
    const { handleChange, handleSubmit } = this;
    const { search } = this.state;

    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.SearchForm_button}>
            <span className={css.SearchForm_button_label}>Search</span>
          </button>

          <input
            name="search"
            value={search}
            className={css.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
