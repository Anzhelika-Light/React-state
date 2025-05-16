import { Component, useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Loader from "./Loader";
import Button from "./Button";
import Modal from "./Modal";
import { searchImages } from "../../services/image-gallery-api";

const ImageGalleryApp = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [largeImgURL, setLargeImgURL] = useState(null);

  // componentDidUpdate(_, prevState) {
  //   const { search, page } = this.state;
  //   if ((search && search !== prevState.search) || page > prevState.page) {
  //     this.fetchImages();
  //   }
  // }

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const data = await searchImages(search, page);
        setItems((prevItems) => [...prevItems, ...data.hits]);
        setShowLoadMore(items.length + data.hits.length < data.total);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (search) {
      fetchImages();
    }
  }, [search, page]);

  const onSearch = (search) => {
    setSearch(search);
    setItems([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };

  // const getLargeImgURL = (largeImgURL) => {
  //   setLargeImgURL(largeImgURL);
  // };

  const isPosts = Boolean(items.length);

  return (
    <>
      <Searchbar onSubmit={onSearch} />
      {isPosts && (
        <ImageGallery
          items={items}
          onOpen={toggleModal}
          setLargeImgURL={setLargeImgURL}
        />
      )}
      {isPosts && showLoadMore && <Button onClick={loadMore} />}
      {loading && <Loader />}
      {error && <p>Failed to load images. Try again later.</p>}

      {showModal && <Modal onClose={toggleModal} largeImgURL={largeImgURL} />}
    </>
  );
};

// class ImageGalleryApp extends Component {
//   state = {
//     items: [],
//     loading: false,
//     error: null,
//     page: 1,
//     search: "",
//     showModal: false,
//     showLoadMore: true,
//     largeImgURL: null,
//   };

//   componentDidUpdate(_, prevState) {
//     const { search, page } = this.state;
//     if ((search && search !== prevState.search) || page > prevState.page) {
//       this.fetchImages();
//     }
//   }

//   async fetchImages() {
//     const { page, search } = this.state;
//     this.setState({ loading: true });
//     try {
//       const data = await searchImages(search, page);
//       console.log(data);
//       this.setState(({ items }) => ({
//         items: [...items, ...data.hits],
//         showLoadMore: items.length + data.hits.length < data.total,
//       }));
//     } catch (error) {
//       console.log(error);
//       this.setState({ error });
//     } finally {
//       this.setState({ loading: false });
//     }
//   }

//   onSearch = (search) => {
//     this.setState({ search, items: [], page: 1 });
//   };

//   loadMore = () => {
//     this.setState(({ page }) => ({ page: page + 1 }));
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({ showModal: !showModal }));
//   };

//   setLargeImgURL = (largeImgURL) => {
//     this.setState({ largeImgURL });
//   };

//   render() {
//     const {
//       items,
//       loading,
//       error,
//       showLoadMore,
//       page,
//       showModal,
//       largeImgURL,
//     } = this.state;
//     const { loadMore, onSearch, toggleModal, setLargeImgURL } = this;
//     const isPosts = Boolean(items.length);

//     return (
//       <>
//         <Searchbar onSubmit={onSearch} />
//         {isPosts && (
//           <ImageGallery
//             items={items}
//             onOpen={toggleModal}
//             setLargeImgURL={setLargeImgURL}
//           />
//         )}
//         {isPosts && showLoadMore && <Button onClick={loadMore} />}
//         {loading && <Loader />}
//         {error && <p>Failed to load images. Try again later.</p>}

//         {showModal && <Modal onClose={toggleModal} largeImgURL={largeImgURL} />}
//       </>
//     );
//   }
// }

export default ImageGalleryApp;
