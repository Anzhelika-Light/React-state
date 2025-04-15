import PropTypes from "prop-types";
import css from "./styles.module.css";

const GoodsList = ({ items = [], onDelete }) => {
  const elements = items.map(({ id, name, price, description }) => (
    <li key={id} className={css.item}>
      <p className={css.name}>{name}</p>
      <p className={css.price}>{price}</p>
      <p className={css.description}>{description}</p>
      <button
        type="button"
        onClick={() => onDelete(id)}
        className={`${css.btn} ${css.deleteBtn}`}
      >
        Delete
      </button>
    </li>
  ));
  return <ul className={css.list}>{elements}</ul>;
};

GoodsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      createdAt: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};

export default GoodsList;
