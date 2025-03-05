import PropTypes from "prop-types";
import css from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.statistics}>
      <li className={css.stats}>
        <span className={css.stats__label}>Good: </span>
        {good}
      </li>
      <li className={css.stats}>
        <span className={css.stats__label}>Neutral: </span> {neutral}
      </li>
      <li className={css.stats}>
        <span className={css.stats__label}>Bad: </span>
        {bad}
      </li>
      <li className={css.stats}>
        <span className={css.stats__label}>Total: </span>
        {total}
      </li>
      <li className={css.stats}>
        <span className={css.stats__label}>Positive feedback: </span>
        {positivePercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
