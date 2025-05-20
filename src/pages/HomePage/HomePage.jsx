import Posts from "../../modules/Posts/Posts";
import css from "../pages.module.css";

const HomePage = () => {
  return (
    <div className={css.container}>
      <h2>Home page</h2>
      <Posts />
    </div>
  );
};

export default HomePage;
