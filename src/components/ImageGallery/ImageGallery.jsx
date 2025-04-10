import css from "./styles.module.css";

const ImageGallery = ({ items = [] }) => {
  const elements = items.map(({ id, webformatURL }) => {
    return (
      <li className={css.ImageGalleryItem} key={id}>
        <img src={webformatURL} alt="" className={css.ImageGalleryItem_image} />
      </li>
    );
  });
  return <ul className={css.ImageGallery}>{elements}</ul>;
};

export default ImageGallery;
