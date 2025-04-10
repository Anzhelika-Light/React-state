import { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem";
import Loader from "./Loader";
import Button from "./Button";
import Modal from "../Modal";
import { searchImages } from "../../services/image-gallery-api";

class ImageGalleryApp extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
    page: 1,
    search: "",
    showModal: false,
  };
  //   componentDidMount() {
  //     this.fetchImages();
  //   }

  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if ((search && search !== prevState.search) || page > prevState.page) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    const { page, search } = this.state;
    this.setState({ loading: true });
    try {
      const data = await searchImages(search, page);
      console.log(data);
      this.setState(({ items }) => ({ items: [...items, ...data.hits] }));
    } catch (error) {
      console.log(error);
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }

  onSearch = ({ search }) => {
    this.setState({ search });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { items, loading, error, page, showModal } = this.state;
    const { loadMore, onSearch } = this;
    const isPosts = Boolean(items.length);

    return (
      <>
        <Searchbar onSubmit={onSearch} />
        {isPosts && <ImageGallery items={items} />}
        {isPosts && <Button onClick={loadMore} />}
        {loading && <Loader />}
        {error && <p>Failed to load images. Try again later.</p>}
        {/* {showModal && (
          <Modal>
            <ImageGalleryItem items={items} />
          </Modal>
        )} */}
      </>
    );
  }
}

export default ImageGalleryApp;
