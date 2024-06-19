import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import QuantityBox from '../components/QuantityBox';
import { motion } from 'framer-motion';
import ProductDisplay from '../products/ProductDisplay';
import Button from '../components/Button';
import { CartContext } from '../components/cart/CartProvider'; 

function Product({ pageTransition }) {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [imageClassName, setImageClassName] = useState('product-img fade-in');
  const { id } = useParams();
  const { addToCart } = useContext(CartContext); // Use CartContext

  async function getProduct() {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setSelectedImage(data.thumbnail);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Failed to fetch product:', error);
    }
  }

  useEffect(() => {
    getProduct();
  }, [id]);

  const handleImageChange = (newImage) => {
    setSelectedImage(newImage);
    setImageClassName('product-img fade-in');
  };

  // Updated addProductToCart function to use addToCart from context
  const addProductToCart = (product) => {
    addToCart(product);
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit='exit'
      variants={pageTransition}
    >
      <div className='product-page'>
        <div className='image-and-display-container'>
          <div className='product-image-container'>
            <img src={selectedImage} alt={`${product.title} image`} className={imageClassName} loading='lazy' />
            <ProductDisplay id={id} setSelectedImage={handleImageChange} />
          </div>
          <div className='product-info'>
            <h1 className='product-title'>{product.title}</h1>
            <div className='product-description'>
              <p>{product.description}</p>
              <div className='product-price'>
                ${product.price}
                <Button
                    className='primary'
                    text='Add to cart'
                    onClick={() => addProductToCart(product)}
                />
                <QuantityBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Product;