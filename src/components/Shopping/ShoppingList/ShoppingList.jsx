import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";
import css from "./ShoppingList.module.css";

const ShoppingList = ({ purchases = [], onDelete, onToggleCompleted }) => {
  const elements = purchases.map(
    ({ id, name, quantity, price, isUrgent, purchaseType, completed }) => (
      <li key={id} className={css.item}>
        <input
          type="checkbox"
          checked={completed}
          value={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <div className={completed ? css.completed : ""}>
          <h3>{name}</h3>
          <p>Кількість: {quantity}</p>
          <p>Ціна: {price}</p>
          {isUrgent && (
            <p
              className={
                isUrgent
                  ? completed
                    ? `${css.chip} ${css.urgent} ${css.completed}`
                    : `${css.chip} ${css.urgent}`
                  : css.chip
              }
            >
              Терміновo
            </p>
          )}
          <p>Тип: {purchaseType}</p>
        </div>
        <button
          type="button"
          className={css.btn}
          onClick={() => {
            onDelete(id);
          }}
        >
          <FaTrashAlt />
        </button>
      </li>
    )
  );
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Список покупок</h2>
      <ol className={css.list}>{elements}</ol>
    </div>
  );
};

ShoppingList.propTypes = {
  purchases: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      isUrgent: PropTypes.bool.isRequired,
      purchaseType: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
};

export default ShoppingList;
