import React, { useState } from 'react';
import productImg1 from './style/img/hyperx_headphones.webp';
import productImg2 from '../dummy_images/productImg2.jpg';
import productImg3 from '../dummy_images/productImg3.jpg';
import productImg4 from '../dummy_images/productImg4.jpg';
import productImg1Icon from '../dummy_images/productImg1-icon.jpg';
import productImg2Icon from '../dummy_images/productImg2-icon.jpg';
import productImg3Icon from '../dummy_images/productImg3-icon.jpg';
import productImg4Icon from '../dummy_images/productImg4-icon.jpg';

// Optional: Import LightBox if you're using it
// import LightBox from './LightBox';

const ProductDisplay = () => {
  const [image, setImage] = useState(1);
  let url;

  switch (image) {
    case 1:
      url = productImg1;
      break;
    case 2:
      url = productImg2;
      break;
    case 3:
      url = productImg3;
      break;
    case 4:
      url = productImg4;
      break;
    default:
      url = productImg1; // Default case
  }

  return (
    <div className="product-display">
      <div className="product-col product-col1">
        {/* Navigation and Image Display */}
        <img className="main-product-image" alt="Product" src={url} onClick={() => {
          // Optional: Toggle LightBox here
        }} />
        {/* Optional: Include LightBox here */}
      </div>
      <div className="product-col product-col2">
        {/* Thumbnail Selection */}
        <img alt="Product Thumbnail" className={`product-thumbnail ${image === 1 && "active"}`} onClick={() => setImage(1)} src={productImg1Icon} />
        <img alt="Product Thumbnail" className={`product-thumbnail ${image === 2 && "active"}`} onClick={() => setImage(2)} src={productImg2Icon} />
        <img alt="Product Thumbnail" className={`product-thumbnail ${image === 3 && "active"}`} onClick={() => setImage(3)} src={productImg3Icon} />
        <img alt="Product Thumbnail" className={`product-thumbnail ${image === 4 && "active"}`} onClick={() => setImage(4)} src={productImg4Icon} />
      </div>
    </div>
  );
};

export default ProductDisplay;