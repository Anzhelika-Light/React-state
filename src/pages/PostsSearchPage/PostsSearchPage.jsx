import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PostsSearchForm from "../../modules/PostsSearchForm/PostsSearchForm";
import PostList from "../../modules/PostList/PostList";
import { searchingPosts } from "../../services/posts-api";
import css from "../pages.module.css";

const PostsSearchPage = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  // next string instead of => const [search, setSearch] = useState("");
  const search = searchParams.get("search");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setState((prevState) => ({ ...prevState, loading: true }));
        const data = await searchingPosts(search);
        setState((prevState) => ({ ...prevState, items: data }));
      } catch (error) {
        setState((prevState) => ({ ...prevState, error }));
      } finally {
        setState((prevState) => ({ ...prevState, loading: false }));
      }
    };

    if (search) {
      fetchPosts();
    }
  }, [search]);

  const changeSearch = ({ search }) => {
    // setSearch(search);
    setSearchParams({ search });
  };

  const { items, loading, error } = state;

  return (
    <div className={css.container}>
      <h2>Posts search page</h2>
      <PostsSearchForm onSubmit={changeSearch} />
      {items.length > 0 && <PostList items={items} />}
      {error && <p>Failed to download posts. Try again later.</p>}
      {loading && <p>...loading</p>}
    </div>
  );
};

export default PostsSearchPage;
