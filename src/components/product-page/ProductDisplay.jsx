import React, { useEffect, useState } from 'react';

const ProductDisplay = ({ id, setSelectedImage }) => {
  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    const fetchProductImages = async () => {
      try {
        const response = await fetch(`https://bytegamingapi.azurewebsites.net/products`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch product images: ${response.status}`);
        }

        const data = await response.json();
        const product = data.find(p => p.productId === id);

        if (product) {
          setProductImages([product.productImageURL]);
          setSelectedImage(product.productImageURL);
        } else {
          console.error('Product not found');
        }
      } catch (error) {
        console.error('Error fetching product images:', error);
      }
    };

    fetchProductImages();
  }, [id, setSelectedImage]);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className='product-display'>
      <div className='thumbnails-group'>
        {productImages.map((image, index) => (
          <div key={`thumbnail-${index}`} className='thumbnail'>
            {[...Array(4)].map((_, i) => (
              <img
                key={i}
                alt={`Product Thumbnail ${i}`}
                className='product-thumbnail'
                src={image}
                onClick={() => handleClick(image)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
