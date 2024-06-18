import { useEffect, useState } from 'react';
import Quantity from '../components/QuantityBox';

function Product() {
    const [product, setProduct] = useState(null);

    async function getProduct() {
        const response = await fetch('https://dummyjson.com/products/1'); // Fetch a specific product by ID
        const data = await response.json(); // Convert the response to JSON
        setProduct(data); // Set the product data in the state
    }

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div className='product-container'>
            <div className='product-img-container'>
                <img src={product.thumbnail} alt='product' className='product-img' />
                <h1>{product.title}</h1>
                <Quantity />
            </div>
            <div className='product-description'>
                <p>{product.description}</p>
            </div>
        </div>
    );
}

export default Product;
