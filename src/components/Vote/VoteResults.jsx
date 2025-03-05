import css from "./Vote.module.css";

const VoteResults = ({
  total,
  democrate,
  republic,
  democratePercentage,
  republicPercentage,
}) => {
  return (
    <>
      <div className={css.element}>
        За республіканців:
        <ul>
          <li>Всього: {republic}</li>
          <li>У відсотках: {republicPercentage}%</li>
        </ul>
      </div>
      <div className={css.element}>
        За демократів:
        <ul>
          <li>Всього: {democrate}</li>
          <li>У відсотках: {democratePercentage}%</li>
        </ul>
      </div>
      <div className={css.element}>Разом усіх голосів: {total}</div>
    </>
  );
};

export default VoteResults;
