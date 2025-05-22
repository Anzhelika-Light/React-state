import { NavLink } from "react-router-dom";
import items from "./items";
import css from "./Menu.module.css";

const getClassName = ({ isActive }) => {
  const className = isActive ? `${css.link} ${css.active}` : css.link;
  return className;
};

const Menu = () => {
  const elements = items.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink to={to} className={getClassName}>
        {text}
      </NavLink>
    </li>
  ));
  return (
    <div className={css.wrapper}>
      <ul className={css.menu}>{elements}</ul>
    </div>
  );
};

export default Menu;
