import { Link } from "react-router-dom";
import css from "../pages.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <h2>Page is not found</h2>
      <Link to="/">To main page</Link>
    </div>
  );
};

export default NotFoundPage;
