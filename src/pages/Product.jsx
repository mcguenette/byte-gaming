import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuantityBox from '../components/QuantityBox';
import { motion } from 'framer-motion';

function Product({ pageTransition }) {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  async function getProduct() {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
  }

  useEffect(() => {
    getProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit='exit'
      variants={pageTransition}
    >
      <div className='product-container'>
        <div className='product-img-container'>
          <img src={product.thumbnail} alt={product.title} className='product-img' />
          <h1>{product.title}</h1>
          <QuantityBox />
        </div>
        <div className='product-description'>
          <p>{product.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Product;
