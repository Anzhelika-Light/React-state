import { Component } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === "Escape") {
      this.props.close();
    }
  };

  render() {
    const { closeModal } = this;
    const { children } = this.props;

    return createPortal(
      <div className={css.overlay} onClick={closeModal}>
        <div className={css.modal}>
          <span className={css.close} onClick={closeModal}>
            X
          </span>
          {children}
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
