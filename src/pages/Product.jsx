import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Quantity from '../components/QuantityBox';
import FirstImage from '../style/img/hyperx_headphones.webp';

function Product() {
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


    return (
        <div className='product-container'>
            <div className='product-img-container'>
                <img src={product.thumbnail || FirstImage} alt='product' className='product-img' />
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
