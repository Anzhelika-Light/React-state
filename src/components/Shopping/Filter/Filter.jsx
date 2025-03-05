import css from "./Filter.module.css";

const Filter = ({ filter, onFilterChange }) => {
  return (
    <input type="text" value={filter} name="filter" onChange={onFilterChange} />
  );
};

export default Filter;
