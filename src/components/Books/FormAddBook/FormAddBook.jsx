import { useState } from "react";
import PropTypes from "prop-types";
import css from "./FormAddBook.module.css";

const FormAddBook = ({ onSubmit }) => {
  const [state, setState] = useState({
    title: "",
    author: "",
  });

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
      title: "",
      author: "",
    });
  };
  const { title, author } = state;

  return (
    <form onSubmit={handleSubmit}>
      <label className={css.formGroup}>
        Title:
        <input
          name="title"
          type="text"
          className={css.field}
          value={title}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.formGroup}>
        Author:
        <input
          name="author"
          type="text"
          className={css.field}
          value={author}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" className={css.btn}>
        Submit
      </button>
    </form>
  );
};

FormAddBook.propTypes = {
  onSubmit: PropTypes.func,
};

// class FormAddBook extends Component {
//   static defaultProps = {
//     onSubmit: () => {},
//   };

//   static propTypes = {
//     onSubmit: PropTypes.func,
//   };

//   state = {
//     title: "",
//     author: "",
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
//     onSubmit({ ...this.state });
//     this.reset();
//   };

//   reset() {
//     this.setState({
//       title: "",
//       author: "",
//     });
//   }

//   render() {
//     const { title, author } = this.state;
//     const { handleChange, handleSubmit } = this;

//     return (
//       <form onSubmit={handleSubmit}>
//         <label className={css.formGroup}>
//           Title:
//           <input
//             name="title"
//             type="text"
//             className={css.field}
//             value={title}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label className={css.formGroup}>
//           Author:
//           <input
//             name="author"
//             type="text"
//             className={css.field}
//             value={author}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <button type="submit" className={css.btn}>
//           Submit
//         </button>
//       </form>
//     );
//   }
// }

export default FormAddBook;
