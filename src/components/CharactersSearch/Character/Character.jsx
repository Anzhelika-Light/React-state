import css from "./Character.module.css";

const Character = ({ items, onClose }) => {
  const elements = items.map(
    ({ name, gender, birth_year, hair_color, skin_color }) => (
      <div key={name}>
        <h2>{name}</h2>
        <p>
          <span className={css.text}>Gender: </span>
          {gender}
        </p>
        <p>
          <span className={css.text}>Birth year: </span>
          {birth_year}
        </p>
        <p>
          <span className={css.text}>Hair color: </span>
          {hair_color}
        </p>
        <p>
          <span className={css.text}>Skin color: </span>
          {skin_color}
        </p>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    )
  );
  return <>{elements}</>;
};

export default Character;
