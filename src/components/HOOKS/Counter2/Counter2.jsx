import { useReducer } from "react";
import styles from "./Counter2.module.css";

function countReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };

    case "decrement":
      return { ...state, count: state.count - action.payload };

    default:
      throw new Error(`Unsupported action type ${action.type}`);
  }
}

export default function Counter2() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div className={styles.container}>
      <p className={styles.value}>{state.count}</p>
      <button
        type="button"
        className={styles.btn}
        onClick={() => dispatch({ type: "increment", payload: 1 })}
      >
        Збільшити
      </button>
      <button
        type="button"
        className={styles.btn}
        onClick={() => dispatch({ type: "decrement", payload: 1 })}
      >
        Зменшити
      </button>
    </div>
  );
}
