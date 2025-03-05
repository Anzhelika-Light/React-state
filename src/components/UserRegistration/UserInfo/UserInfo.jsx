import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";
import css from "./UserInfo.module.css";

const UserInfo = ({ users = [], deleteUser }) => {
  const elements = users.map(({ id, name, email, password }) => (
    <li key={id} className={css.item}>
      <div className={css.wrapper}>
        <div>
          <p className={css.text}>
            <span className={css.label}>Name: </span>
            {name}
          </p>
          <p className={css.text}>
            <span className={css.label}>Email: </span>
            {email}
          </p>
          <p className={css.text}>
            <span className={css.label}>Password: </span>
            {password}
          </p>
        </div>
      </div>
      <FaTrashAlt
        className={css.icon}
        onClick={() => {
          deleteUser(id);
        }}
      />
    </li>
  ));
  return (
    <div>
      <h2 className={css.title}>User Data</h2>
      <ol className={css.list}>{elements}</ol>
    </div>
  );
};

UserInfo.propTypes = PropTypes.arrayOf(
  PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  })
);

export default UserInfo;
