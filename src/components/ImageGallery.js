import React, { useState } from 'react';

const ImageGallery = ({ images, movieName }) => {
  // State to keep track of the main image
  const [mainImage, setMainImage] = useState(images[0]);

  // Function to update the main image when a small image is clicked
  const handleImageClick = (image) => {
    setMainImage(image);
  };

  // Function to construct the image URL
  const getImageUrl = (imageKey) => {
    return `https://combat-aces.s3.amazonaws.com/${imageKey.key}`;
  };

  return (
    <div className="gallery">
      <div className="img-wrap main-img js-main-img">
        {/* Main image */}
        <img className="selected-img" src={getImageUrl(mainImage)} alt={movieName} />
      </div>
      <div className="small-images">
        {/* Small images */}
        {images.map((image, index) => (
          <img
            key={index}
            className="small-image js-image"
            data-url={getImageUrl(image)}
            src={getImageUrl(image)}
            alt={movieName}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

