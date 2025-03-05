import { Component } from "react";
import PropTypes from "prop-types";
import css from "./GoodsList.module.css";

class GoodsList extends Component {
  static defaultProps = {
    goods: [],
  };

  static PropTypes = PropTypes.arrayOf(PropTypes.string.isRequired);

  state = {
    activeIndex: NaN,
  };

  setActiveIndex = (index) => {
    this.setState({
      activeIndex: index,
    });
  };

  makeItemClassNames = (index) => {
    const { activeIndex } = this.state;
    return activeIndex === index ? `${css.item} ${css.active}` : css.item;
  };

  render() {
    const { goods } = this.props;

    const elements = goods.map((good, index) => (
      <li
        key={good}
        className={this.makeItemClassNames(index)}
        onClick={() => this.setActiveIndex(index)}
      >
        {good}
      </li>
    ));
    return (
      <>
        <h2>Лавка желаний</h2>
        <ul className={css.list}>{elements}</ul>;
      </>
    );
  }
}

export default GoodsList;
