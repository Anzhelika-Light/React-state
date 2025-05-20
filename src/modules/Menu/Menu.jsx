import { NavLink } from "react-router-dom";
import css from "./Menu.module.css";

const getClassName = ({ isActive }) => {
  const className = isActive ? `${css.link} ${css.active}` : css.link;
  return className;
};

const Menu = () => {
  return (
    <div className={css.wrapper}>
      <ul className={css.menu}>
        <li>
          <NavLink to="/" className={getClassName}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts" className={getClassName}>
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" className={getClassName}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
