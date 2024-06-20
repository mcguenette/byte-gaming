import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuantityBox from '../components/QuantityBox';
import { motion } from 'framer-motion';
import ProductDisplay from '../components/product-page/ProductDisplay';
import Button from '../components/Button';
import '../components/product-page/product.css';
import { CartContext } from '../components/cart/CartProvider'; 

function Product({ pageTransition }) {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [imageClassName, setImageClassName] = useState('product-img fade-in');
  const { productSlug } = useParams();
  const { addToCart } = useContext(CartContext); 
  const navigate = useNavigate();

  async function getProduct() {
    try {
      const response = await fetch(`https://bytegamingapi.azurewebsites.net/products`);
      const data = await response.json();
      const product = data.find(p => p.productSlug === productSlug);

      if (product) {
        setProduct(product);
        setSelectedImage(product.productImageURL);
        window.scrollTo(0, 0);
      } else {
        console.error('Product not found');
      }
    } catch (error) {
      console.error('Failed to fetch product:', error);
    }
  }

  useEffect(() => {
    getProduct();
  }, [productSlug]);

  const handleImageChange = (newImage) => {
    setSelectedImage(newImage);
    setImageClassName('product-img fade-in');
  };

  const addProductToCart = (product) => {
    addToCart(product, () => {
        navigate('/cart');
    });
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
            <img src={selectedImage} alt={`${product.productName} image`} className={imageClassName} loading='lazy' />
            <ProductDisplay id={product.productId} setSelectedImage={handleImageChange} />
          </div>
          <div className='product-info'>
            <h4>BYTE GAMING</h4>
            <h2>{product.productName}</h2>
            <div className='product-description'>
              <p className='p'>{product.productDescription}</p>
              <div className='product-price'>
                <p>${product.productPrice}</p>
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