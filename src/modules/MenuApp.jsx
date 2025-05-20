import { Route, Routes } from "react-router-dom";
import Menu from "./Menu/Menu";
import HomePage from "../pages/HomePage/HomePage";
import PostsPage from "../pages/PostsPage/PostsPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import SinglePostPage from "../pages/SinglePostPage/SinglePostPage";

function MenuApp() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/posts" element={<PostsPage />}></Route>
        <Route path="/posts/:id" element={<SinglePostPage />}></Route>
        <Route path="/contacts" element={<ContactsPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default MenuApp;
