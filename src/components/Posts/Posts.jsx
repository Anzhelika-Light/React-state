import { useState, useEffect, Component } from "react";
import useFetch from "../../hooks/useFetch";
import PostList from "./PostList";
import { getPosts } from "../../services/posts-api";
import css from "./Posts.module.css";

const Posts = () => {
  // const [posts, setPosts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  // Using custom hook useFetch
  const { items, loading, error } = useFetch({
    fetchData: getPosts,
    dependencies: [page],
  });

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       setIsLoading(true);
  //       const data = await getPosts(page);
  //       setPosts((posts) => [...posts, ...data]);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchPosts();
  // }, [page]);

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  const isPosts = Boolean(items.length);

  return (
    <>
      <h2 className={css.title}>Posts list</h2>
      {isPosts && <PostList items={items} />}
      {loading && <p>...loading</p>}
      {error && <p>Failed to load posts. Try again later.</p>}
      {isPosts && (
        <button type="button" onClick={loadMore}>
          Load more
        </button>
      )}
    </>
  );
};

// class Posts extends Component {
//   state = {
//     posts: [],
//     isLoading: false,
//     error: null,
//     page: 1,
//   };

//   componentDidMount() {
//     this.fetchPosts();
//   }

//   componentDidUpdate(_, prevState) {
//     const { page } = this.state;
//     if (prevState.page !== page) {
//       this.fetchPosts();
//     }
//   }

//   async fetchPosts() {
//     const { page } = this.state;
//     this.setState({ isLoading: true });

//     try {
//       const data = await getPosts(page);
//       this.setState(({ posts }) => ({ posts: [...posts, ...data] }));
//     } catch (error) {
//       this.setState({ error });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   }

//   loadMore = () => {
//     this.setState(({ page }) => ({
//       page: page + 1,
//     }));
//   };

//   render() {
//     const { posts, isLoading, error } = this.state;
//     const { loadMore } = this;
//     const isPosts = Boolean(posts.length);

//     return (
//       <>
//         <h2 className={css.title}>Posts list</h2>
//         {isPosts && <PostList items={posts} />}
//         {isLoading && <p>...loading</p>}
//         {error && <p>Failed to load posts. Try again later.</p>}
//         {isPosts && (
//           <button type="button" onClick={loadMore}>
//             Load more
//           </button>
//         )}
//       </>
//     );
//   }
// }

export default Posts;
