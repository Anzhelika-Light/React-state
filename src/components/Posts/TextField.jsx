import PropTypes from "prop-types";
import css from "./TextField.module.css";

const TextField = ({
  id,
  label,
  value,
  name,
  handleChange,
  type,
  className,
  placeholder,
  required,
  pattern,
}) => {
  const fullClassName = className ? `${css.field} ${className}` : css.field;

  return (
    <div className={css.formGroup}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        value={value}
        name={name}
        onChange={handleChange}
        type={type}
        className={fullClassName}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
      />
    </div>
  );
};

export default TextField;

TextField.defaultProps = {
  type: "text",
  required: false,
};

TextField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  pattern: PropTypes.string,
};
