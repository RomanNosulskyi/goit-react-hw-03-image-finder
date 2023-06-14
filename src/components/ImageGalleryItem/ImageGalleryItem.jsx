import React from 'react';
import { Modal } from 'components/Modal/Modal';
import { ImageGalleryItemLi, ImageGalleryImg } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends React.Component {
  state = {
    showModal: false,
  };

  toggleModal = () =>
    this.setState(prevState => ({ showModal: !prevState.showModal }));

  render() {
    const { id, webformatURL, largeImageURL } = this.props.Card;
    const { showModal } = this.state;
    return (
      <ImageGalleryItemLi>
        <ImageGalleryImg
          src={webformatURL}
          alt={`Picker with id=${id}`}
          onClick={this.toggleModal}
        />
        {showModal && (
          <Modal LargeImage={largeImageURL} onClick={this.toggleModal} />
        )}
      </ImageGalleryItemLi>
    );
  }
}
