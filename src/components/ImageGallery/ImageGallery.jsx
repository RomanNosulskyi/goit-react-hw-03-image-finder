import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ data, showModal }) => {
  return (
    <ImageGalleryList>
      {data.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            showModal={showModal}
          />
        );
      })}
    </ImageGalleryList>
  );
};
ImageGallery.propTypes = {
  data: PropTypes.array,
  showModal: PropTypes.func,
};
