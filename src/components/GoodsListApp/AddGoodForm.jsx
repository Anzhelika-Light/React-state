import { Component } from "react";
import css from "./styles.module.css";

class AddGoodForm extends Component {
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
        <label className={css.label}>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className={css.input}
          />
        </label>
        <label className={css.label}>
          Price:
          <input
            type="text"
            name="price"
            value={price}
            onChange={handleChange}
            className={css.input}
          />
        </label>
        <label className={css.label}>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
            className={css.input}
          />
        </label>
        <button type="submit" className={css.btn}>
          Add good
        </button>
      </form>
    );
  }
}

export default AddGoodForm;
