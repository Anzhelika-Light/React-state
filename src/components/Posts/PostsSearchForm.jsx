import { Component, useState, useRef, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import useForm from "../../hooks/useForm";

import TextField from "./TextField";
import SubmitButton from "./SubmitButton";
import initialState from "./initialState";
import fields from "./fields";

import css from "./PostsSearchForm.module.css";

const PostsSearchForm = ({ onSubmit }) => {
  // using custom hook useForm
  const { state, setState, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const searchId = useMemo(() => nanoid(), []);
  const { search } = state;

  // const [search, setSearch] = useState("");

  // // const searchRef = useRef();

  // // useEffect(() => {
  // //   searchRef.current.focus();
  // // }, []);

  // // const searchId = useRef(nanoid());

  // const handleChange = ({ target }) => {
  //   setSearch(target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit(search);
  //   reset();
  // };

  // const reset = () => {
  //   setSearch("");
  // };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      {/* <input type="text" ref={searchRef} /> */}
      <TextField
        id={searchId}
        value={search}
        handleChange={handleChange}
        {...fields.search}
      />
      <SubmitButton text="Search" />
    </form>
  );
};
PostsSearchForm.defaultProps = {
  onSubmit: () => {},
};

PostsSearchForm.PropTypes = {
  onSubmit: PropTypes.func,
};

// USING CLASSES
// class PostsSearchForm extends Component {
//   static defaultProps = {
//     onSubmit: () => {},
//   };

//   static PropTypes = {
//     onSubmit: PropTypes.func,
//   };

//   state = { ...initialState };

//   searchId = nanoid();

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
//     this.setState({ ...initialState });
//   }

//   render() {
//     const { search } = this.state;
//     const { handleChange, handleSubmit, searchId } = this;

//     return (
//       <form className={css.form} onSubmit={handleSubmit}>
//         <TextField
//           value={search}
//           handleChange={handleChange}
//           id={searchId}
//           {...fields.search}
//         />
//         <SubmitButton text="Search" />
//       </form>
//     );
//   }
// }

export default PostsSearchForm;
