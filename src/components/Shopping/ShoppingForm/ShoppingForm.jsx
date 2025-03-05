import { Component } from "react";
import PropTypes from "prop-types";
import css from "./ShoppingForm.module.css";

class ShoppingForm extends Component {
  static defaultProps = {
    onSubmit: () => {},
  };
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    quantity: "",
    price: "",
    isUrgent: false,
    purchaseType: "",
  };

  handleChange = (e) => {
    const { name, value, checked, type } = e.currentTarget;
    const fieldValue = type === "checkbox" ? checked : value;
    this.setState({
      [name]: fieldValue,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { price, quantity } = this.state;
    if (price <= 0 || quantity <= 0) {
      alert("Кількість та ціна мають бути більшими за нуль.");
    } else {
      const { onSubmit } = this.props;
      onSubmit(this.state);
      this.reset();
    }
  };

  reset() {
    this.setState({
      name: "",
      quantity: "",
      price: "",
      isUrgent: false,
      purchaseType: "",
    });
  }

  render() {
    const { name, quantity, price, isUrgent, purchaseType } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label>
          Назва:
          <input
            type="text"
            name="name"
            value={name}
            className={css.input}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Кількість:
          <input
            type="text"
            name="quantity"
            value={quantity}
            className={css.input}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Ціна:
          <input
            type="text"
            name="price"
            value={price}
            className={css.input}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          <input
            type="checkbox"
            name="isUrgent"
            checked={isUrgent}
            onChange={this.handleChange}
          />
          Термінова покупка
        </label>
        <label>
          Тип покупки:
          <select
            name="purchaseType"
            value={purchaseType}
            onChange={this.handleChange}
            required
          >
            <option value="">--Оберіть, будь-ласка, варіант--</option>
            <option value="chemicals">Побутова хімія</option>
            <option value="dishes">Посуд</option>
            <option value="products">Продукти</option>
            <option value="other">Інше</option>
          </select>
        </label>
        <button type="submit" className={css.btn}>
          Додати до списку
        </button>
      </form>
    );
  }
}

export default ShoppingForm;
