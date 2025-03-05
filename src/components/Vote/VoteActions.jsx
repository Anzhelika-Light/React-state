import css from "./Vote.module.css";

const VoteActions = ({ vote }) => {
  return (
    <>
      <div className={css.element}>
        <button type="button" onClick={() => vote("republic")}>
          За республіканців
        </button>
      </div>
      <div className={css.element}>
        <button type="button" onClick={() => vote("democrate")}>
          За демократів
        </button>
      </div>
    </>
  );
};

export default VoteActions;
