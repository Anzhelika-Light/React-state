import { NavLink, Routes, Route } from "react-router-dom";
import Home from "../pagesRepeta/Home";
import Dogs from "../pagesRepeta/Dogs";
import DogDetails from "../pagesRepeta/DogDetails";
import Layout from "./Layout";
import { Gallery } from "./Gallery";
import { Subbreeds } from "./Subbreeds";

export const NewApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dogs" element={<Dogs />} />
        <Route path="dogs/:dogId" element={<DogDetails />}>
          <Route path="subbreeds" element={<Subbreeds />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Route>
    </Routes>
  );
};
