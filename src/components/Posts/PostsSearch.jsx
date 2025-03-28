import { Component } from "react";
import PostList from "./PostList";
import PostsSearchForm from "./PostsSearchForm";
import Modal from "./Modal/Modal";
import { searchPosts } from "../../services/posts-api";
import css from "./PostsSearch.module.css";

class PostSearch extends Component {
  state = {
    posts: [],
    loading: false,
    error: null,
    search: "",
    page: 1,
    modalOpen: false,
    modalContent: {
      title: "",
      body: "",
    },
  };

  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if ((search && prevState.search !== search) || page > prevState.page) {
      this.fetchPosts();
    }
  }

  async fetchPosts() {
    const { search, page } = this.state;
    this.setState({ isLoading: true });

    try {
      const data = await searchPosts(search, page);
      this.setState(({ posts }) => ({ posts: [...posts, ...data] }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  onSearch = ({ search }) => {
    this.setState({ search });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  openModal = (modalContent) => {
    this.setState({
      modalOpen: true,
      modalContent,
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
      modalContent: {
        title: "",
        body: "",
      },
    });
  };

  render() {
    const { onSearch, loadMore, openModal, closeModal } = this;
    const { posts, loading, error, modalOpen, modalContent } = this.state;
    const isPosts = Boolean(posts.length);

    return (
      <div>
        {modalOpen && (
          <Modal close={closeModal}>
            <h3 className={css.postTitle}>{modalContent.title}</h3>
            <p className={css.postContent}>{modalContent.body}</p>
          </Modal>
        )}
        <PostsSearchForm onSubmit={onSearch} />
        {isPosts && <PostList posts={posts} onClick={openModal} />}
        {loading && <p>...Loading posts</p>}
        {error && <p>Failed to load posts. Try again later.</p>}
        {isPosts && <button onClick={loadMore}>Load more</button>}
      </div>
    );
  }
}

export default PostSearch;
