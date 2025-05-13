import { Component, useEffect } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ close, children }) => {
  useEffect(() => {
    document.addEventListener("keydown", closeModal);
    return () => document.removeEventListener("keydown", closeModal);
  }, []);

  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === "Escape") {
      close();
    }
  };

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
};

// class Modal extends Component {
//   componentDidMount() {
//     document.addEventListener("keydown", this.closeModal);
//   }

//   componentWillUnmount() {
//     document.removeEventListener("keydown", this.closeModal);
//   }

//   closeModal = ({ target, currentTarget, code }) => {
//     if (target === currentTarget || code === "Escape") {
//       this.props.close();
//     }
//   };

//   render() {
//     const { closeModal } = this;
//     const { children } = this.props;

//     return createPortal(
//       <div className={css.overlay} onClick={closeModal}>
//         <div className={css.modal}>
//           <span className={css.close} onClick={closeModal}>
//             X
//           </span>
//           {children}
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }

export default Modal;
