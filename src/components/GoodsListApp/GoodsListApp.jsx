import { Component } from "react";
import GoodsList from "./GoodsList";
import AddGoodForm from "./AddGoodForm";
import css from "./styles.module.css";

class GoodsListApp extends Component {
  state = {
    items: [
      {
        createdAt: "2025-04-03T11:48:48.288Z",
        name: "Rustic Wooden Chips",
        description:
          "Stylish Computer designed to make you stand out with fatal looks",
        id: "1",
      },
      {
        createdAt: "2025-04-03T19:24:39.374Z",
        name: "Luxurious Plastic Chicken",
        description:
          "Savor the fluffy essence in our Bike, designed for runny culinary adventures",
        id: "2",
      },
    ],
  };

  addGood = (good) => {
    console.log(good);
  };

  render() {
    const { items } = this.state;
    return (
      <div className={css.container}>
        <AddGoodForm onSubmit={this.addGood} />
        <GoodsList items={items} />
      </div>
    );
  }
}

export default GoodsListApp;
