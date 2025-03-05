import { Component } from "react";
import PropTypes from "prop-types";
import css from "./Reader.module.css";

class Reader extends Component {
  static defaultProps = {
    items: [],
  };

  static propTypes = PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  );

  state = {
    activeIndex: 0,
  };

  setActiveIndex = (index) => {
    this.setState({
      activeIndex: index,
    });
  };

  makeCaptionsClassNames = (index) => {
    const { activeIndex } = this.state;
    return activeIndex === index ? `${css.item} ${css.active}` : css.item;
  };

  render() {
    const { items } = this.props;
    const { activeIndex } = this.state;
    const { setActiveIndex } = this;

    const captions = items.map(({ id, caption }, index) => (
      <li
        key={id}
        className={this.makeCaptionsClassNames(index)}
        onClick={() => setActiveIndex(index)}
      >
        {caption}
      </li>
    ));

    const currentItem = items[activeIndex];
    const textElement = currentItem.text.map((item, index) => (
      <p key={index}>{item}</p>
    ));

    return (
      <div className={css.tabs}>
        <ul className={css.tabs__caption}>{captions}</ul>
        <div className={css.tabs__content}> {textElement}</div>
      </div>
    );
  }
}

export default Reader;
