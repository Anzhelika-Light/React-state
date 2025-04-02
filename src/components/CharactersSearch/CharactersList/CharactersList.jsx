import { MdDelete } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import css from "./CharactersList.module.css";

const CharactersList = ({ items = [], onDelete, onOpen }) => {
  const elements = items.map(({ name, gender }) => (
    <li key={name} className={css.item}>
      <div>
        <p>
          <span className={css.text}>Name:</span> {name}
        </p>
        <p>
          <span className={css.text}>Gender:</span> {gender}
        </p>
      </div>
      <button type="button">
        <CiCircleMore className={css.icon} onClick={onOpen} />
      </button>

      <button type="button">
        <MdDelete className={css.icon} onClick={() => onDelete(name)} />
      </button>
    </li>
  ));
  return <ol className={css.list}>{elements}</ol>;
};

export default CharactersList;
