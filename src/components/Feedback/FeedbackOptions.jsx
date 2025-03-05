import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import css from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options = [], onLeaveFeedback }) => {
  const elements = options.map((option) => (
    <button
      key={nanoid()}
      className={css.button}
      type="button"
      onClick={() => onLeaveFeedback("good")}
    >
      {option}
    </button>
  ));
  return <div className={css.feedbackOptions}>{elements}</div>;
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
