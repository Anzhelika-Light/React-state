import { useState } from "react";
import css from "../../ColorPicker/ColorPicker.module.css";

export default function ColorPicker({ options }) {
  const [activeOptionIdx, setActivOptioneIdx] = useState(0);

  const makeOptionClassName = (index) => {
    return index === activeOptionIdx
      ? `${css.option} ${css.active}`
      : css.option;
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
            onClick={() => setActivOptioneIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
