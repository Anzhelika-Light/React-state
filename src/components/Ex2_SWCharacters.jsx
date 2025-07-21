import { Routes, Route } from "react-router-dom";

import { NavLink } from "react-router-dom";
import CharacterDetails from "../pages_exercises/Ex2_CharacterDetails";
import CharactersList from "../pages_exercises/Ex2_CharactersList";

const SWCharacters = () => {
  return (
    <Routes>
      <Route path="/" element={<CharactersList />} />
      <Route path="/:id" element={<CharacterDetails />} />
    </Routes>
  );
};

export default SWCharacters;
