import { Component, useState } from "react";
import PropTypes from "prop-types";
import { FaUserPlus } from "react-icons/fa";
import css from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    name: "",
    number: "",
  });

  const { name, number } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
    reset();
  };

  const reset = () => {
    setState({
      name: "",
      number: "",
    });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.form__label}>
        Name
        <input
          type="text"
          name="name"
          className={css.form__input}
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.form__label}>
        Number
        <input
          type="tel"
          name="number"
          className={css.form__input}
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" className={css.form__btn}>
        <FaUserPlus className={css.form__icon} />
      </button>
    </form>
  );
};

ContactForm.defaultProps = {
  onSubmit: () => {},
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// class ContactForm extends Component {
//   static defaultProps = {
//     onSubmit: () => {},
//   };

//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   state = {
//     name: "",
//     number: "",
//   };

//   handleChange = ({ target }) => {
//     const { name, value } = target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { onSubmit } = this.props;
//     onSubmit(this.state);
//     this.reset();
//   };

//   reset() {
//     this.setState({
//       name: "",
//       number: "",
//     });
//   }

//   render() {
//     const { name, number } = this.state;
//     const { handleChange, handleSubmit } = this;
//     return (
//       <form className={css.form} onSubmit={handleSubmit}>
//         <label className={css.form__label}>
//           Name
//           <input
//             type="text"
//             name="name"
//             className={css.form__input}
//             value={name}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label className={css.form__label}>
//           Number
//           <input
//             type="tel"
//             name="number"
//             className={css.form__input}
//             value={number}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <button type="submit" className={css.form__btn}>
//           <FaUserPlus className={css.form__icon} />
//         </button>
//       </form>
//     );
//   }
// }

export default ContactForm;
