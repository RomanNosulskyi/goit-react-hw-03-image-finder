import React from 'react';
import { Searchbar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import fetchImages from './Services/Services';

export class App extends React.Component {
  state = {
    query: '',
    page: 1,
    images: [],
    status: `idle`,
  };

  componentDidUpdate(prevProps, prevState) {
    let { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ status: `pending` });
      fetchImages(query, page)
        .then(images => {
          if (images.length === 0 && page === 1) {
            return Promise.reject();
          }

          if (images.length === 0 && page > 1) {
            return this.setState({ status: `rejected` });
          }

          if (prevState.query === query) {
            images = [...prevState.images, ...images];
          }

          this.setState({
            images,
            status: `resolved`,
          });
        })
        .catch(() => {
          this.setState({ status: `rejected` });
        });
    }
  }
  handleSubmit = query => {
    this.setState(prevState => {
      if (prevState.query !== query) {
        return { query, page: 1 };
      }
    });
  };

  handleClickLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };
  render() {
    const { images, status, showModal, largeImageURL } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length !== 0 && (
          <ImageGallery Images={images} showModal={this.showModalOnClick} />
        )}
        {status === `pending` && <Loader />}
        {status === `resolved` && <Button onClick={this.handleClickLoadMore} />}
        {showModal && (
          <Modal
            largeImageURL={largeImageURL}
            onModalClose={this.onModalClose}
          />
        )}
      </>
    );
  }
}
