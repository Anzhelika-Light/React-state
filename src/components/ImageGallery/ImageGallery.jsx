import ImageGalleryItem from "./ImageGalleryItem";
import css from "./styles.module.css";

const ImageGallery = ({ items = [], onOpen, setLargeImgURL }) => {
  const elements = items.map(({ id, webformatURL, largeImageURL }) => (
    <ImageGalleryItem
      id={id}
      webformatURL={webformatURL}
      onOpen={onOpen}
      setLargeImgURL={setLargeImgURL}
      largeImageURL={largeImageURL}
    />
  ));
  return <ul className={css.ImageGallery}>{elements}</ul>;
};

export default ImageGallery;
