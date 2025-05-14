import LangContext from "./langContext";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";

function MainApp() {
  return (
    <LangContext.Provider value="ua">
      <Navbar />
      <Main />
    </LangContext.Provider>
  );
}

export default MainApp;
