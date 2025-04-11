import { Component } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import css from "./styles.module.css";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  static defaultProps = {
    onClose: () => {},
  };

  static propTypes = {
    onClose: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = ({ code }) => {
    if (code === "Escape") {
      this.props.onClose();
    }
  };

  handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={css.overlay}>
        <div className={css.modal}>
          <img className={css.largeImg} src={this.props.largeImgURL} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
