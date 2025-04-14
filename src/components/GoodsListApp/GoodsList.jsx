import css from "./styles.module.css";

const GoodsList = ({ items }) => {
  const elements = items.map(({ id, name }) => <li key={id}>{name}</li>);
  return <ul>{elements}</ul>;
};

export default GoodsList;
