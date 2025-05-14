import { useContext } from "react";
import { langContext } from "../langContext";
import locale from "./locale.json";

const { title, content } = locale;

const Main = () => {
  const { lang } = useContext(langContext);
  return (
    <div>
      <h2>{title[lang]}</h2>
      <p>{content[lang]}</p>
    </div>
  );
};

export default Main;
