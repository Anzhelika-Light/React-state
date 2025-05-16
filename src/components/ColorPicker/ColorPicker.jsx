import React, { PureComponent, useState } from "react";
import classNames from "classnames/bind";
import css from "./ColorPicker.module.css";

const ColorPicker = ({ options }) => {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  const setActiveIdx = (index) => {
    setActiveOptionIdx(index);
  };

  const makeOptionClassName = (index) => {
    const cx = classNames.bind(css);
    return cx("option", {
      active: index === activeOptionIdx,
    });
  };

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
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => setActiveIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
