import React, { Component } from "react";
import css from "./Form.module.css";

class Form extends Component {
  state = {
    name: "",
    tag: "",
    experience: "junior",
    licence: false,
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  //   Для 1 чекбокса окремий обробник, бо коли він один, то value йому не потрібен
  handleLicenceChange = (e) => {
    this.setState({
      licence: e.currentTarget.checked,
    });
  };

  reset = () => {
    this.setState({
      name: "",
      tag: "",
    });
  };

  render() {
    const { name, tag, experience, licence } = this.state;
    const { handleChange, handleSubmit, handleLicenceChange } = this;
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          Tag
          <input
            type="text"
            name="tag"
            value={tag}
            onChange={this.handleChange}
          />
        </label>
        <p>Your level:</p>
        <label>
          Junior
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={handleChange}
            checked={experience === "junior"}
          />
        </label>
        <label>
          Middle
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={handleChange}
            checked={experience === "middle"}
          />
        </label>
        <label>
          Senior
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={handleChange}
            checked={experience === "senior"}
          />
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="licence"
            checked={licence}
            onChange={handleLicenceChange}
          />
          Today is a great day!
        </label>
        <button type="submit" disabled={!licence}>
          Send
        </button>
      </form>
    );
  }
}

export default Form;
