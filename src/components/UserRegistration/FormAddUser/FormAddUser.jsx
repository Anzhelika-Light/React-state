import { Component } from "react";
import css from "./FormAddUser.module.css";

class FormAddUser extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
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
      name: "",
      email: "",
      password: "",
    });
  }

  render() {
    const { name, email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={css.formGroup}>
          Name:
          <input
            type="text"
            className={css.field}
            value={name}
            name="name"
            onChange={this.handleChange}
          />
        </label>
        <label className={css.formGroup}>
          Email:
          <input
            type="text"
            className={css.field}
            value={email}
            name="email"
            onChange={this.handleChange}
          />
        </label>
        <label className={css.formGroup}>
          Password:
          <input
            type="text"
            className={css.field}
            value={password}
            name="password"
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className={css.btn}>
          Add user
        </button>
      </form>
    );
  }
}

export default FormAddUser;
