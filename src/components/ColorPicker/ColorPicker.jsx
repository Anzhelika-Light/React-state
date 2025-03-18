import React, { PureComponent } from "react";
import classNames from "classnames/bind";
import css from "./ColorPicker.module.css";

class ColorPicker extends PureComponent {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = (index) => {
    this.setState({
      activeOptionIdx: index,
    });
  };

  makeOptionClassName = (index) => {
    const cx = classNames.bind(css);
    return cx("option", {
      active: index === this.state.activeOptionIdx,
    });

    // const optionClasses = [css.option];
    // if (index === this.state.activeOptionIdx) {
    //   optionClasses.push(css.active);
    // }
    // return optionClasses.join(" ");
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;

    const { label } = options[activeOptionIdx];

    return (
      <div className={css.colorPicker}>
        <h2 className={css.title}>Color Picker</h2>
        <p>{label} is chosen</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              type="button"
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
