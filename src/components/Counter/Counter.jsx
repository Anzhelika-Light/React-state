import React from "react";
import Controls from "./Controls";
import css from "./Counter.module.css";

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};

  //   constructor() {
  //     super();
  //     this.state = {
  //       value: 0,
  //     };
  //   }

  state = { value: this.props.initialValue };

  handleIncrement = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };
  handleDecrement = () => {
    this.setState((prevState) => ({ value: prevState.value - 1 }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className={css.counter}>
        <span className={css.value}>{value}</span>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        {/* <div className={css.controls}>
          <button type="button" onClick={this.handleIncrement}>
            Збільшити на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Зменшити на 1
          </button>
        </div> */}
      </div>
    );
  }
}

export default Counter;
