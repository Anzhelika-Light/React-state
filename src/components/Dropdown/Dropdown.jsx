import React, { Component } from "react";
import css from "./Dropdown.module.css";

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const visible = this.state;
    return (
      <div className={css.dropdown}>
        <button className={css.toggle} type="button" onClick={this.toggle}>
          {visible ? "Hide" : "Show"}
        </button>

        {visible && <div className={css.menu}>Dropdown menu</div>}
      </div>
    );
  }
}

export default Dropdown;
