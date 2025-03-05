import React from "react";
import css from "./Counter.module.css";

const Controls = ({ onIncrement, onDecrement }) => (
  <div className={css.controls}>
    <button type="button" onClick={onIncrement}>
      Збільшити на 1
    </button>
    <button type="button" onClick={onDecrement}>
      Зменшити на 1
    </button>
  </div>
);

export default Controls;
