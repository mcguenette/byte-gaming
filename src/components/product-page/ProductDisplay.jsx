import React, { useEffect, useState } from 'react';

const ProductDisplay = ({ id, setSelectedImage }) => {
  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://bytegamingapi.azurewebsites.net/product`);
        const data = await response.json();
        const product = data.find(p => p.productId === id);

        if (product) {
          const productSlug = product.productSlug;
          fetchProductImages(productSlug);
        } else {
          console.error('Product not found');
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    const fetchProductImages = async (productSlug) => {
      try {
        const response = await fetch(`https://bytegamingapi.azurewebsites.net/product/${productSlug}`);
        const data = await response.json();
        setProductImages(data.images);
        // Optionally initialize the main image with the first image
        setSelectedImage(data.images[0]);
      } catch (error) {
        console.error('Error fetching product images:', error);
      }
    };

    fetchProductDetails();
  }, [id, setSelectedImage]);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className='product-display'>
      <div className='product-col product-col2'>
        {productImages.map((image, index) => (
          <div key={index} className='image-group'>
            <img
              alt='Product Thumbnail'
              className='product-thumbnail'
              src={image}
              onClick={() => handleClick(image)}
            />
            <img
              alt='Product Thumbnail Duplicate'
              className='product-thumbnail'
              src={image}
              onClick={() => handleClick(image)}
            />
            <img
              alt='Product Thumbnail Duplicate 2'
              className='product-thumbnail'
              src={image}
              onClick={() => handleClick(image)}
            />
            <img
              alt='Product Thumbnail Duplicate 3'
              className='product-thumbnail'
              src={image}
              onClick={() => handleClick(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
