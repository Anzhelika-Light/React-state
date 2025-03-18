import { Component } from "react";
import PropTypes from "prop-types";
import { Controls } from "./Controls";
import { Progress } from "./Progress";
import { Publication } from "./Publication";

const LS_KEY = "reader_item_index";

export class Reader2 extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequied,
        text: PropTypes.string.isRequired,
      })
    ),
  };

  state = {
    index: 0,
  };

  changeIndex = (value) => {
    this.setState((prevState) => ({
      index: Number(prevState.index + value),
    }));
  };

  componentDidMount = () => {
    const savedState = localStorage.getItem(LS_KEY);
    if (savedState) {
      this.setState({
        index: Number(savedState),
      });
    }
  };

  componentDidUpdate = (_, prevState) => {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  };

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const totalItems = items.length;
    const currentItem = items[index];

    return (
      <div>
        <Controls
          current={index + 1}
          total={totalItems}
          onIndexChange={this.changeIndex}
        />
        <Progress current={index + 1} total={totalItems} />

        <Publication title={currentItem.title} text={currentItem.text} />
      </div>
    );
  }
}
