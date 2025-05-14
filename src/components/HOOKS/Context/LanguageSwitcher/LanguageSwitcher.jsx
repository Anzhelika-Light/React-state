import { useContext } from "react";
import { langContext } from "../langContext";
import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const { lang, switchLang } = useContext(langContext);
  return (
    <div>
      <span
        onClick={switchLang}
        className={lang === "en" ? styles.currentLang : styles.lang}
      >
        EN
      </span>
      <span
        onClick={switchLang}
        className={lang === "ua" ? styles.currentLang : styles.lang}
      >
        UA
      </span>
    </div>
  );
};

export default LanguageSwitcher;
