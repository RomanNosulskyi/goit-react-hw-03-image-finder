import React from 'react';
import { Searchbar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { api } from './Services/Services';

export class App extends React.Component {
  state = {
    searchImg: ``,
    page: 1,
    data: [],
    status: `idle`,
    showModal: false,
    largeImageUrl: ``,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchImg, page } = this.state;
    if (prevState.searchImg !== searchImg || prevState.page !== page) {
      api(searchImg, page, this.loadData, this.changeStatus);
    }
  }

  onSubmit = searchImg => {
    this.setState({ searchImg });
    this.setState({ data: [] });
    this.setState({ page: 1 });
  };
  loadMore = page => {
    this.setState({ page: this.state.page + 1 });
    return;
  };

  loadData = data => {
    this.setState({ data: [...this.state.data, ...data] });
  };
  changeStatus = status => {
    this.setState({ status });
  };
  showModalOnClick = url => {
    this.setState({ showModal: true, largeImageURL: url });
  };
  onModalClose = () => {
    this.setState({ showModal: false, largeImageURL: '' });
  };
  render() {
    const { data, status, showModal, largeImageURL } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery data={data} showModal={this.showModalOnClick} />
        {status === `pending` && <Loader />}
        {status === `resolved` && <Button onClick={this.loadMore} />}
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
