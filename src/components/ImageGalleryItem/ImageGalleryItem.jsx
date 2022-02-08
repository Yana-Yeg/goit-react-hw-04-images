import PropTypes from "prop-types";

import s from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ small, big, handleBigImage }) {
  return (
    <li className={s.item} onClick={() => handleBigImage(big)}>
      <img src={small} alt="" className={s.itemImage}></img>
    </li>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.protoTypes = {
  small: PropTypes.string,
  big: PropTypes.string,
};
