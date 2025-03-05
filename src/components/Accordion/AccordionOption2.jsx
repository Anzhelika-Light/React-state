import { Component } from "react";
import PropTypes from "prop-types";
import css from "./Accordion.module.css";

class AccordionOption2 extends Component {
  static defaultProps = {
    accordionItems: [],
  };

  static propTypes = PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  );

  state = {
    activeIndexes: [],
  };

  expandAllBtnClick = () => {
    const activeIndexes = this.props.accordionItems.map((_, index) => index);
    this.setState({
      activeIndexes: activeIndexes,
    });
  };

  collapseAllBtnClick = () => {
    this.setState({
      activeIndexes: [],
    });
  };

  setActiveIndexes = (index) => {
    this.setState(({ activeIndexes }) => {
      const newActiveIndexesArr = activeIndexes.includes(index)
        ? activeIndexes.filter((item) => item !== index)
        : [...activeIndexes, index];
      return { activeIndexes: newActiveIndexesArr };
    });
  };

  makeTitleClassNames = (index) => {
    const { activeIndexes } = this.state;
    return activeIndexes.includes(index)
      ? `${css.isExpanded} ${css.title}`
      : css.title;
  };

  makeContentClassNames = (index) => {
    const { activeIndexes } = this.state;
    return activeIndexes.includes(index)
      ? `${css.isExpanded} ${css.content}`
      : css.content;
  };

  render() {
    const { activeIndexes } = this.state;
    const { expandAllBtnClick, collapseAllBtnClick, setActiveIndexes } = this;

    const elements = this.props.accordionItems.map(
      ({ id, title, text }, index) => (
        <div
          key={id}
          className={css.accordionItem}
          onClick={() => setActiveIndexes(index)}
        >
          <p className={this.makeTitleClassNames(index)}>{title}</p>
          <div className={this.makeContentClassNames(index)}>
            <p>{text}</p>
          </div>
        </div>
      )
    );

    return (
      <div className={css.container}>
        <div className={css.accordion}>
          <h1>FAQ</h1>
          <button
            type="button"
            className={css.btn}
            id="expand-all"
            onClick={expandAllBtnClick}
          >
            Expand All
          </button>
          <button
            type="button"
            className={css.btn}
            id="collapse-all"
            onClick={collapseAllBtnClick}
          >
            Collapse All
          </button>

          {elements}
        </div>
      </div>
    );
  }
}

export default AccordionOption2;
