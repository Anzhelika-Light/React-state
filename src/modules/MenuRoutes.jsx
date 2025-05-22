import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import PostsSearchPage from "../pages/PostsSearchPage/PostsSearchPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import SinglePostPage from "../pages/SinglePostPage/SinglePostPage";
import SinglePostCommentsPage from "../pages/SinglePostPage/SinglePostCommentsPage";

const MenuRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<PostsSearchPage />} />
      <Route path="/posts/:id" element={<SinglePostPage />}>
        <Route path="comments" element={<SinglePostCommentsPage />}></Route>
      </Route>
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MenuRoutes;
