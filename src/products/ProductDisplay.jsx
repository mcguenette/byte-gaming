import React, { useEffect, useState } from 'react';

const ProductDisplay = ({ id, setSelectedImage }) => {
  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    const fetchProductImages = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProductImages(data.images);
      // Optionally initialize the main image with the first image
      setSelectedImage(data.images[0]);
    };

    fetchProductImages();
  }, [id, setSelectedImage]);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="product-display">
      <div className="product-col product-col2">
        {productImages.slice(0, 4).map((image, index) => (
          <div key={index} className="image-group">
            <img
              alt="Product Thumbnail"
              className="product-thumbnail"
              src={image}
              onClick={() => handleClick(image)} // Add onClick event handler here
            />
            <img
              alt="Product Thumbnail Duplicate"
              className="product-thumbnail"
              src={image}
              onClick={() => handleClick(image)} // Add onClick event handler here
            />
            <img
              alt="Product Thumbnail Duplicate 2"
              className="product-thumbnail"
              src={image}
              onClick={() => handleClick(image)} // Add onClick event handler here
            />
            <img
              alt="Product Thumbnail Duplicate 3"
              className="product-thumbnail"
              src={image}
              onClick={() => handleClick(image)} // Add onClick event handler here
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;