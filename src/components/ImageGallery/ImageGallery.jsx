import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";

function ImageGallery({ images, handleBigImage }) {
  return (
    <ul className={s.imageGallery}>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.webformatURL}
          small={image.webformatURL}
          big={image.largeImageURL}
          handleBigImage={handleBigImage}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array,
};
