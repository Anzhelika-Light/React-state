import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

import { Layout } from "./Layout";

// import Home from "../pagesRepeta/Home";
const Home = lazy(() => import("../pagesRepeta/Home"));
const Dogs = lazy(() => import("../pagesRepeta/Dogs"));
const DogDetails = lazy(() => import("../pagesRepeta/DogDetails"));
const Gallery = lazy(() => import("./Gallery"));
const Subbreeds = lazy(() => import("./Subbreeds"));

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
