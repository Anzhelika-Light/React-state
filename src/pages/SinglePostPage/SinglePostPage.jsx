import { useState, useEffect } from "react";
import { Link, Outlet, useParams, useNavigate } from "react-router-dom";
import { getSinglePost } from "../../services/posts-api";
import css from "../pages.module.css";

const SinglePostPage = () => {
  const [state, setState] = useState({
    item: {},
    loading: false,
    error: null,
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setState((prevState) => ({
          ...prevState,
          loading: true,
          error: null,
        }));

        const result = await getSinglePost(id);
        setState((prevState) => {
          return {
            ...prevState,
            item: result,
          };
        });
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          error,
        }));
      } finally {
        setState((prevState) => {
          return {
            ...prevState,
            loading: false,
          };
        });
      }
    };

    fetchPosts();
  }, [setState]);

  const goBack = () => navigate(-1);

  const { title, body } = state.item;

  return (
    <div className={css.container}>
      <button onClick={goBack}>Go back</button>
      <h2>{title}</h2>
      <p>{body}</p>
      <Link to={`/posts/${id}/comments`}>Comments</Link>
      <Outlet />
    </div>
  );
};

export default SinglePostPage;
