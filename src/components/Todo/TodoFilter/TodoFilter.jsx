import React from "react";
import css from "./TodoFilter.module.css";

const Filter = ({ value, onChange }) => {
  return (
    <div className={css.todoFilter}>
      <label className={css.label}>
        Filter
        <input
          type={css.input}
          className="input"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Filter;
