import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import css from "./ContactList.module.css";

const ContactList = ({ contacts = [], onDelete }) => {
  const elements = contacts.map(({ id, name, number }) => (
    <li key={nanoid()} className={css.contactsList__item}>
      <div className={css.contactsList__wrapper}>
        <div>
          <div className={css.contactsList__container}>
            <FaUser className={css.contactsList__icon} />
            <span className={css.contactsList__name}>{name}: </span>
          </div>
          <div className={css.contactsList__container}>
            <FaPhone className={css.contactsList__icon} />
            <span className={css.contactsList__number}>{number}</span>
          </div>
        </div>

        <button
          type="button"
          className={css.contactsList__btn}
          onClick={() => onDelete(id)}
        >
          <FaTrashAlt className={css.contactsList__iconDelete} />
        </button>
      </div>
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
