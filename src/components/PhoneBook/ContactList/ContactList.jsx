import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";
import css from "./ContactList.module.css";

const ContactList = ({ contacts = [], onDelete }) => {
  const elements = contacts.map(({ id, name, number }) => (
    <li key={nanoid()} className={css.contactsList__item}>
      <span className={css.contactsList__name}>{name}: </span>
      <span className={css.contactsList__number}>{number}</span>
      <button
        type="button"
        className={css.contactsList__btn}
        onClick={() => onDelete(id)}
      >
        Delete <FaTrashAlt className={css.contactsList__icon} />
      </button>
    </li>
  ));
  return <ul className={css.contactsList}>{elements}</ul>;
};

ContactList.protTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
