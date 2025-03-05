import { Component } from "react";
import PropTypes from "prop-types";
import css from "./Accordion.module.css";

class AccordionOption1 extends Component {
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
    isExpanded: false,
    activeIndex: 0,
  };

  expandAllBtnClick = () => {
    this.setState({
      isExpanded: true,
      activeIndex: NaN,
    });
  };

  collapseAllBtnClick = () => {
    this.setState({
      isExpanded: false,
      activeIndex: NaN,
    });
  };

  setActiveIndex = (index) => {
    this.setState({
      activeIndex: index,
    });
  };

  makeTitleClassNames = (index) => {
    const { activeIndex, isExpanded } = this.state;
    return isExpanded || activeIndex === index
      ? `${css.isExpanded} ${css.title}`
      : css.title;
  };

  makeContentClassNames = (index) => {
    const { activeIndex, isExpanded } = this.state;
    return isExpanded || activeIndex === index
      ? `${css.isExpanded} ${css.content}`
      : css.content;
  };

  render() {
    const { isExpanded, activeIndex } = this.state;
    const { expandAllBtnClick, collapseAllBtnClick, setActiveIndex } = this;

    const elements = this.props.accordionItems.map(
      ({ id, title, text }, index) => (
        <div
          key={id}
          className={css.accordionItem}
          onClick={() => setActiveIndex(index)}
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

export default AccordionOption1;
