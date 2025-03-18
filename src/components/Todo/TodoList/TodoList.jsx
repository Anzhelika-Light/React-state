import React, { Component } from "react";
import classNames from "classnames";
import Todo from "../Todo";
import css from "./TodoList.module.css";

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className={css.todoList}>
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className={completed ? `${css.item} ${css.completed}` : css.item}
        >
          <Todo
            text={text}
            completed={completed}
            onToggleCompleted={() => onToggleCompleted(id)}
            onDeleteTodo={() => onDeleteTodo(id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
