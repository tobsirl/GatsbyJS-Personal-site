import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import Carousel, { Modal, ModalGateway } from 'react-images';

class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      lightboxIsOpen: false,
      selectedIndex: 0,
    };

    // this.toggleLightbox = this.toggleLightbox.bind(this);
  }

  // toggleLightbox(selectedIndex) {
  //   this.setState(state => ({
  //     lightboxIsOpen: !state.lightboxIsOpen,
  //     selectedIndex,
  //   }));
  // }

  renderGallery(images) {
    if (!images) return;

    const gallery = images.map((obj, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <article className="6u 12u$(xsmall) work-item" key={i}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="image fit thumb"
          href={obj.url}
        >
          <img src={obj.thumbnail} alt="" />
        </a>

        <h3>{obj.caption}</h3>
        <ul>
          <li>{obj.description1}</li>
        </ul>
      </article>
    ));

    // eslint-disable-next-line consistent-return
    return <div className="row">{gallery}</div>;
  }

  render() {
    const { images } = this.props;
    const { selectedIndex, lightboxIsOpen } = this.state;

    return (
      <div>
        {this.renderGallery(images)}
        {/* <ModalGateway>
          {lightboxIsOpen && (
            <Modal onClose={this.toggleLightbox}>
              <Carousel currentIndex={selectedIndex} views={images} />
            </Modal>
          )}
        </ModalGateway> */}
      </div>
    );
  }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
  images: PropTypes.array,
};

export default Gallery;
