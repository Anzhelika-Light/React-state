import { Component } from "react";
import GoodsList from "./GoodsList";
import * as API from "../../services/goods-api";
import AddGoodForm from "./AddGoodForm";
import css from "./styles.module.css";

class GoodsListApp extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchGoods();
  }

  fetchGoods = async () => {
    try {
      this.setState({ loading: true });
      const data = await API.getGoods();
      this.setState({ items: data });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  };

  addGood = async (values) => {
    try {
      this.setState({ loading: true });
      const good = await API.addGood(values);
      this.setState(({ items }) => ({
        items: [...items, good],
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  };

  deleteGood = async (id) => {
    try {
      this.setState({ loading: true });
      await API.deleteGood(id);
      this.setState(({ items }) => ({
        items: items.filter((item) => item.id !== id),
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { items, loading } = this.state;
    return (
      <div className={css.container}>
        <AddGoodForm onSubmit={this.addGood} isSubmitting={loading} />
        <GoodsList items={items} onDelete={this.deleteGood} />
      </div>
    );
  }
}

export default GoodsListApp;
