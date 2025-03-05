import { Component } from "react";
import { nanoid } from "nanoid";
import ShoppingForm from "./ShoppingForm";
import ShoppingList from "./ShoppingList";
import Filter from "./Filter";
import css from "./ShoppingPlan.module.css";

class ShoppingPlan extends Component {
  state = {
    purchases: [
      {
        id: "1",
        name: "Apples",
        quantity: "10",
        price: "30",
        isUrgent: false,
        purchaseType: "products",
        completed: false,
      },
      {
        id: "2",
        name: "Shoes",
        quantity: "1",
        price: "2500",
        isUrgent: true,
        purchaseType: "other",
        completed: true,
      },
    ],
    filter: "",
  };

  addPurchase = (data) => {
    if (this.isDublicate(data)) {
      return alert(`${data.name} is/are already in the list.`);
    }
    const newPurchase = { id: nanoid(), ...data };
    this.setState((prevState) => ({
      purchases: [newPurchase, ...prevState.purchases],
    }));
  };

  isDublicate = ({ name }) => {
    const { purchases } = this.state;
    const normalizedName = name.toLowerCase();
    const result = purchases.find(
      (purchase) => purchase.name.toLowerCase() === normalizedName
    );
    return result;
  };

  deletePurchase = (id) => {
    this.setState((prevState) => ({
      purchases: prevState.purchases.filter((purchase) => purchase.id !== id),
    }));
  };

  toggleCompleted = (id) => {
    this.setState(({ purchases }) => ({
      purchases: purchases.map((purchase) =>
        purchase.id === id
          ? { ...purchase, completed: !purchase.completed }
          : purchase
      ),
    }));
  };

  countTotalQuantity = () => {
    const { purchases } = this.state;
    const toBeBought = purchases.reduce(
      (total, { completed }) => (!completed ? total + 1 : total),
      0
    );
    return toBeBought;
  };

  countTotalPrice = () => {
    const { purchases } = this.state;
    const toBeBoughtPurchases = purchases.filter(
      (purchase) => purchase.completed === false
    );
    return toBeBoughtPurchases.reduce(
      (total, purchase) =>
        total + Number(purchase.price) * Number(purchase.quantity),
      0
    );
  };

  handleFilterChange = (e) => {
    const { name, value } = e.currentTarget;
    console.log(name);
    console.log(value);
    this.setState({
      [name]: value,
    });
  };

  getVisiblePurchases = () => {
    const { purchases, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return purchases.filter(
      ({ name, purchaseType }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        purchaseType.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { purchases, filter } = this.state;
    const { addPurchase, deletePurchase, toggleCompleted, handleFilterChange } =
      this;
    const totalQuantity = this.countTotalQuantity();
    const totalPrice = this.countTotalPrice();
    const visiblePurchases = this.getVisiblePurchases();

    return (
      <div className={css.container}>
        <ShoppingForm onSubmit={addPurchase} />
        <div className={css.wrapper}>
          <div>
            <p className={css.totalInfo}>
              <span className={css.totalName}>
                Загальна кількість покупок: {totalQuantity}
              </span>
            </p>
            <p className={css.totalInfo}>
              <span className={css.totalName}>
                Необхідна кількість коштів: {totalPrice}
              </span>
            </p>
          </div>
          <Filter value={filter} onFilterChange={handleFilterChange} />
          <ShoppingList
            purchases={visiblePurchases}
            onDelete={deletePurchase}
            onToggleCompleted={toggleCompleted}
          />
        </div>
      </div>
    );
  }
}

export default ShoppingPlan;
