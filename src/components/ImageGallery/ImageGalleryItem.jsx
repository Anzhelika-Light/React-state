import css from "./styles.module.css";

const ImageGalleryItem = ({ items }) => {
  return (
    <li className={css.ImageGalleryItem} key={id}>
      <img src={largeImageURL} alt="" className={css.ImageGalleryItem_image} />
    </li>
  );
};

export default ImageGalleryItem;
