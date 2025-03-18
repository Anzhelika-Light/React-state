import React, { Component } from "react";
import css from "./TodoEditor.module.css";

class TodoEditor extends Component {
  state = {
    message: "",
  };

  handleChange = (e) => {
    this.setState({
      message: e.currentTarget.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.message);
    this.reset();
  };

  reset = () => {
    this.setState({ message: "" });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    return (
      <form className={css.todoEditor} onSubmit={handleSubmit}>
        <textarea
          className={css.textarea}
          value={this.state.message}
          onChange={handleChange}
        ></textarea>
        <button className={css.btn} type="submit">
          Save
        </button>
      </form>
    );
  }
}

export default TodoEditor;
