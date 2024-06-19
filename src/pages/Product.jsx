// Adjusted JSX for Product Component to include product price and adjust layout

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Quantity from '../components/QuantityBox';
import FirstImage from '../style/img/hyperx_headphones.webp';
import ProductDisplay from '../products/ProductDisplay';

function Product() {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [imageClassName, setImageClassName] = useState('product-img fade-in');
  const { id } = useParams();

  async function getProduct() {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setSelectedImage(data.thumbnail);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Failed to fetch product:", error);
    }
  }

  useEffect(() => {
    getProduct();
  }, [id]);

  const handleImageChange = (newImage) => {
    setSelectedImage(newImage);
    setImageClassName('product-img fade-in');
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
<div className='product-page'>
  <div className='image-and-display-container'>
    <div className='product-image-container'>
      <img src={selectedImage || FirstImage} alt={`${product.title} image`} className={imageClassName} loading="lazy" />
    <ProductDisplay id={id} setSelectedImage={handleImageChange} />
    </div>
  <div className='product-info'>
    <h1 className='product-title'>{product.title}</h1>
    <div className='product-description'>
      <p>{product.description}</p>
    <div className='product-price'>
      ${product.price}
    <Quantity />
    </div>
    </div>
  </div>
  </div>
</div>
  );
}

export default Product;