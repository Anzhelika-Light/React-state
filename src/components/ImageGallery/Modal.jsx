import { useEffect } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import css from "./styles.module.css";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ onClose, largeImgURL }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const handleKeydown = ({ code }) => {
    if (code === "Escape") {
      onClose();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.Overlay} onClick={handleOverlayClick}>
      <div className={css.Modal}>
        <img className={css.largeImg} src={largeImgURL} alt="" />
      </div>
    </div>,
    modalRoot
  );
};

Modal.defaultProps = {
  onClose: () => {},
};

Modal.propTypes = {
  onClose: PropTypes.func,
};

export default Modal;
