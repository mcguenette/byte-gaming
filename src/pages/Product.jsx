// Adjusted JSX for Product Component to include product price and adjust layout

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuantityBox from '../components/QuantityBox';
import { motion } from 'framer-motion';
import ProductDisplay from '../components/product-page/ProductDisplay';
import Button from '../components/Button';
import '../components/product-page/product.css';

    function Product({ pageTransition }) {
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
          <div className='product-page container'>
            <div className='product-display-container'>
              <div className='product-image-container'>
                <img src={selectedImage} alt={`${product.title} image`} className={imageClassName} loading='lazy' />
                <ProductDisplay id={id} setSelectedImage={handleImageChange} />
              </div>
              <div className='product-info'>
                <h4>BYTE GAMING</h4>
                <h2>{product.title}</h2>
                <div className='product-description'>
                  <p className='p'>{product.description}</p>
                  <div className='product-price'>
                    <p>${product.price}</p>
                  </div>
                  <div className='product-page-atc'>
                  <QuantityBox />
                    <Button
                        className='primary'
                        text='Add to cart'
                        onClick={() => addProductToCart(product)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }

    export default Product;