import { useContext } from "react";
import { langContext } from "../langContext";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import styles from "./Navbar.module.css";
import locale from "./local.json";

const { title } = locale;

const Navbar = () => {
  const { lang } = useContext(langContext);
  return (
    <nav className={styles.navbar}>
      <a href="#">Logo</a>
      <div>{title[lang]}</div>
      <LanguageSwitcher />
    </nav>
  );
};

export default Navbar;
