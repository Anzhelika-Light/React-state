import LangContext from "./langContext";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";

function MainApp() {
  return (
    <LangContext value="ua">
      <Navbar />
      <Main />
    </LangContext>
  );
}

export default MainApp;
