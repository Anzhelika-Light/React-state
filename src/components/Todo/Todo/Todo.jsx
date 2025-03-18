import IconButton from "../../IconButton";
import { ReactComponent as DeleteIcon } from "../../../icons/delete.svg";
import css from "../TodoList/TodoList.module.css";

const Todo = ({ text, completed, onToggleCompleted, onDeleteTodo }) => (
  <>
    <input
      type="checkbox"
      className={css.checkbox}
      checked={completed}
      onChange={onToggleCompleted}
    />
    <p className={css.text}>{text}</p>
    {/* <button type="button" className={css.btn} onClick={onDeleteTodo}>
      Delete
    </button> */}
    <IconButton onClick={onDeleteTodo}>
      <DeleteIcon width="32" height="32" fill="#fff" />
    </IconButton>
  </>
);

export default Todo;
