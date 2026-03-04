import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Main
      </NavLink>

      <NavLink
        to="/books"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Books
      </NavLink>
    </nav>
  );
}
