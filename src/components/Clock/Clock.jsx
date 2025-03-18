import { Component } from "react";
import css from "./Clock.module.css";

class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(
      () =>
        this.setState({
          time: new Date().toLocaleTimeString(),
        }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <div className={css.clockFace}>{this.state.time}</div>;
  }
}

export default Clock;
