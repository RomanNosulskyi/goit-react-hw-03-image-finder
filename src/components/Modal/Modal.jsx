import React from 'react';
import { Overlay, ModalBox, ImgXL } from './Modal.styles';
import PropTypes from 'prop-types';
export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.keyCode === 27 || e.currentTarget === e.target) {
      return this.props.onClick();
    }
  };
  render() {
    const { LargeImage } = this.props;
    return (
      <Overlay onClick={this.handleKeyDown}>
        <ModalBox>
          <ImgXL src={LargeImage} alt="large photo" />
        </ModalBox>
      </Overlay>
    );
  }
}
Modal.propTypes = {
  largeImageURL: PropTypes.string,
  onModalClose: PropTypes.func,
};
