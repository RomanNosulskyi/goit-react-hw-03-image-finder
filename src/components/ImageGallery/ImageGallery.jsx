import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ Images }) {
  return (
    <ul className="ImageGallery">
      {Images.map(card => (
        <ImageGalleryItem key={card.id} Card={card} />
      ))}
    </ul>
  );
}
ImageGallery.propTypes = {
  data: PropTypes.array,
  showModal: PropTypes.func,
};
export { ImageGallery };
