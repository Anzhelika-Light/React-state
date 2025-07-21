import { Component, useState } from "react";

import "./App.css";

import MenuApp from "./modules/MenuApp";
import { NewApp } from "./components/NewApp";
import Site from "./components/Ex1_Site";
import SWCharacters from "./components/Ex2_SWCharacters";

import "./App.css";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

class App extends Component {
  render() {
    return (
      <>
        {/* <NewApp /> */}

        {/* <MenuApp />  */}
        {/* <Site /> */}
        <SWCharacters />
      </>
    );
  }
}

export default App;
