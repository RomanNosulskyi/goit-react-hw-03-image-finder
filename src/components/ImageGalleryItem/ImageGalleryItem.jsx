import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItemLi, ImageGalleryImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  showModal,
}) => {
  return (
    <ImageGalleryItemLi>
      <ImageGalleryImg
        src={webformatURL}
        alt="Photo card"
        onClick={() => showModal(largeImageURL)}
      />
    </ImageGalleryItemLi>
  );
};
ImageGalleryItem.propTypes = {
  showModal: PropTypes.func,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  id: PropTypes.number,
};
