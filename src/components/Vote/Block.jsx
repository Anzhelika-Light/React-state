import css from "./Vote.module.css";

const Block = ({ title, children }) => {
  return (
    <div className={css.block}>
      <h2 className={css.heading}>{title}</h2>
      {children}
    </div>
  );
};

export default Block;
