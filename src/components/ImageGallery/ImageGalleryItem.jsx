import css from "./styles.module.css";

const ImageGalleryItem = ({
  id,
  webformatURL,
  onOpen,
  setLargeImgURL,
  largeImageURL,
}) => {
  return (
    <li
      className={css.ImageGalleryItem}
      key={id}
      onClick={() => {
        onOpen();
        setLargeImgURL(largeImageURL);
      }}
    >
      <img src={webformatURL} alt="" className={css.ImageGalleryItem_image} />
    </li>
  );
};

export default ImageGalleryItem;
