import PropTypes from "prop-types";

export const Publication = ({ title, text }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
};

Publication.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
