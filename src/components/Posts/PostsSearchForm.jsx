import { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import TextField from "./TextField";
import SubmitButton from "./SubmitButton";

import initialState from "./initialState";
import fields from "./fields";

import css from "./PostsSearchForm.module.css";

class PostsSearchForm extends Component {
  static defaultProps = {
    onSubmit: () => {},
  };

  static PropTypes = {
    onSubmit: PropTypes.func,
  };

  state = { ...initialState };

  searchId = nanoid();

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({ ...initialState });
  }

  render() {
    const { search } = this.state;
    const { handleChange, handleSubmit, searchId } = this;

    return (
      <form className={css.form} onSubmit={handleSubmit}>
        <TextField
          value={search}
          handleChange={handleChange}
          id={searchId}
          {...fields.search}
        />
        <SubmitButton text="Search" />
      </form>
    );
  }
}

export default PostsSearchForm;
