import React, { Component } from "react";
import classNames from "classnames";
import css from "./TodoList.module.css";

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className={css.todoList}>
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className={completed ? `${css.item} ${css.completed}` : css.item}
        >
          <input
            type="checkbox"
            className={css.checkbox}
            checked={completed}
            onChange={() => {
              onToggleCompleted(id);
            }}
          />
          <p className={css.text}>{text}</p>
          <button
            type="button"
            className={css.btn}
            onClick={() => onDeleteTodo(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
