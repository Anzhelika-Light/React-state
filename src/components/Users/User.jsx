import css from "./User.module.css";

const User = ({ items, onClose }) => {
  const elements = items.map(
    ({ id, name, email, address, phone, website, company }) => (
      <li key={id}>
        <p>
          <span className={css.text}>Name: </span>
          {name}
        </p>
        <p>
          <span className={css.text}>Email: </span>
          {email}
        </p>
        <p>
          <span className={css.text}>Address: </span>
          {address.city}, {address.street}, {address.suite}`
        </p>
        <p>
          <span className={css.text}>Phone: </span>
          {phone}
        </p>
        <p>
          <span className={css.text}>Website: </span>
          {website}
        </p>
        <p>
          <span className={css.text}>Company: </span>
          {company.name}
        </p>
        <button type="button" className={css.btn} onClick={onClose}>
          Close
        </button>
      </li>
    )
  );
  return <ul className={css.list}>{elements}</ul>;
};
export default User;
