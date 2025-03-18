import PropTypes from "prop-types";

export const Controls = ({ current, total, onIndexChange }) => {
  return (
    <section>
      <button
        type="button"
        disabled={current === 1}
        onClick={() => onIndexChange(-1)}
      >
        Назад
      </button>
      <button
        type="button"
        disabled={current === total}
        onClick={() => onIndexChange(+1)}
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onIndexChange: PropTypes.func.isRequired,
};
