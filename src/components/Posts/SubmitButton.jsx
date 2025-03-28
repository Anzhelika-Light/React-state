import css from "./SubmitButton.module.css";

const SubmitButton = ({ text, onClick }) => {
  return (
    <button className={css.btn} onClick={onClick}>
      {text}
    </button>
  );
};

export default SubmitButton;
