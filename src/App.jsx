import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar.jsx";
import Container from "./components/Container/Container.jsx";

const HomeView = lazy(() => import("./views/HomeView"));
const BooksView = lazy(() => import("./views/BooksView"));
const BookDetailsView = lazy(() => import("./views/BookDetailsView"));
const NotFoundView = lazy(() => import("./views/NotFoundView"));

export default function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<h1>LOADING THE ROUTE...</h1>}>
        <Routes>
          <Route path="/" element={<HomeView />} />

          <Route path="/books" element={<BooksView />} />

          <Route path="/books/:slug" element={<BookDetailsView />} />

          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
