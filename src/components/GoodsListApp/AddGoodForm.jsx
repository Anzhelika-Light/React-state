import { Component } from "react";
import PropTypes from "prop-types";
import css from "./styles.module.css";

class AddGoodForm extends Component {
  static defaultProps = {
    onSubmit: () => {},
  };

  static PropTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    name: "",
    price: "",
    description: "",
  };

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
    this.setState({ name: "", price: "", description: "" });
  }

  render() {
    const { name, price, description } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.wrapper}>
          <label className={css.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className={css.input}
          />
        </div>
        <div className={css.wrapper}>
          <label className={css.label}>Price:</label>
          <input
            type="text"
            name="price"
            value={price}
            onChange={handleChange}
            className={css.input}
          />
        </div>
        <div className={css.wrapper}>
          <label className={css.label}>Description:</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
            className={css.input}
          />
        </div>
        <button
          type="submit"
          className={css.btn}
          disabled={this.props.isSubmitting}
        >
          Add good
        </button>
      </form>
    );
  }
}

export default AddGoodForm;
