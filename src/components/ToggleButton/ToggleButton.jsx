import { Component } from "react";
import PropTypes from "prop-types";
import css from "./ToggleButton.module.css";

class ToggleButton extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  state = {
    isActive: false,
  };

  handleClick = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  };

  render() {
    const { isActive } = this.state;
    const { text } = this.props;
    const { handleClick } = this;

    return (
      <button
        className={isActive ? `${css.btn}  ${css.active}` : css.btn}
        type="button"
        onClick={handleClick}
      >
        {text}
      </button>
    );
  }
}

// ToggleButton.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default ToggleButton;
