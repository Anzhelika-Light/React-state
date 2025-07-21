import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

import Layout from "./Ex1_Layout";
const Home = lazy(() => import("../pages_exercises/Ex1_Home"));
const Products = lazy(() => import("../pages_exercises/Ex1_Products"));
const Partners = lazy(() => import("../pages_exercises/Ex1_Partners"));
const Contacts = lazy(() => import("../pages_exercises/Ex1_Contacts"));
// import Home from "../pages_exercises/Ex1_Home";
// import Products from "../pages_exercises/Ex1_Products";
// import Partners from "../pages_exercises/Ex1_Partners";
// import Contacts from "../pages_exercises/Ex1_Contacts";

const Site = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products-partners" element={<Partners />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};

export default Site;
