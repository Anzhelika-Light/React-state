import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../pages/HomePage/HomePage")); // instead of
// import HomePage from "../pages/HomePage/HomePage";
const PostsSearchPage = lazy(() =>
  import("../pages/PostsSearchPage/PostsSearchPage")
);
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const SinglePostPage = lazy(() =>
  import("../pages/SinglePostPage/SinglePostPage")
);
const SinglePostCommentsPage = lazy(() =>
  import("../pages/SinglePostPage/SinglePostCommentsPage")
);

const MenuRoutes = () => {
  return (
    <Suspense fallback={<p>...loading pages</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsSearchPage />} />
        <Route path="/posts/:id" element={<SinglePostPage />}>
          <Route path="comments" element={<SinglePostCommentsPage />}></Route>
        </Route>
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default MenuRoutes;
